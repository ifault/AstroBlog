import { SITE } from "@config";
import { defineCollection, z } from "astro:content";
import { getCollection } from "astro:content";
const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { blog };
export async function getEnglishBlogs() {
	const englishDocsEntries = await getCollection('blog', ({ id }) => {
    return !id.includes('/')
  });
	return englishDocsEntries.map((post) => {
		const slug = post.slug.split('/')[0];
		return {
			...post,
			slug
		}
	})
}
export async function getChineseBlogs() {
	const englishDocsEntries = await getCollection('blog', ({ id }) => {
    return id.startsWith('zh/')
  });
	return englishDocsEntries.map((post) => {
		const slug = post.slug.split('/')[0];
		return {
			...post,
			slug
		}
	})
}