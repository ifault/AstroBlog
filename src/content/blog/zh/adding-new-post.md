---
author: Sat Naing
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2023-12-21T09:12:47.400Z
title: Adding new posts in AstroPaper theme china
featured: true
draft: false
tags:
  - docs
description:
  Some rules & recommendations for creating or adding new posts using AstroPaper
  theme.
---

Here are some rules/recommendations, tips & ticks for creating new posts in AstroPaper blog theme.

## Table of contents

## Frontmatter

Frontmatter is the main place to store some important information about the blog post (article). Frontmatter lies at the top of the article and is written in YAML format. Read more about frontmatter and its usage in [astro documentation](https://docs.astro.build/en/guides/markdown-content/).

Here is the list of frontmatter property for each post.

| Property           | Description                                                                                 | Remark                                        |
| ------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **_title_**        | Title of the post. (h1)                                                                     | required<sup>\*</sup>                         |
| **_description_**  | Description of the post. Used in post excerpt and site description of the post.             | required<sup>\*</sup>                         |
| **_pubDatetime_**  | Published datetime in ISO 8601 format.                                                      | required<sup>\*</sup>                         |
| **_modDatetime_**  | Modified datetime in ISO 8601 format. (only add this property when a blog post is modified) | optional                                      |
| **_author_**       | Author of the post.                                                                         | default = SITE.author                         |
| **_slug_**         | Slug for the post. This field is optional but cannot be an empty string. (slug: ""❌)       | default = slugified file name                 |
| **_featured_**     | Whether or not display this post in featured section of home page                           | default = false                               |
| **_draft_**        | Mark this post 'unpublished'.                                                               | default = false                               |
| **_tags_**         | Related keywords for this post. Written in array yaml format.                               | default = others                              |
| **_ogImage_**      | OG image of the post. Useful for social media sharing and SEO.                              | default = SITE.ogImage or generated OG image  |
| **_canonicalURL_** | Canonical URL (absolute), in case the article already exists on other source.               | default = `Astro.site` + `Astro.url.pathname` |

> Tip! You can get ISO 8601 datetime by running `new Date().toISOString()` in the console. Make sure you remove quotes though.

Only `title`, `description` and `pubDatetime` fields in frontmatter must be specified.

Title and description (excerpt) are important for search engine optimization (SEO) and thus AstroPaper encourages to include these in blog posts.

`slug` is the unique identifier of the url. Thus, `slug` must be unique and different from other posts. The whitespace of `slug` should to be separated with `-` or `_` but `-` is recommended. Slug is automatically generated using the blog post file name. However, you can define your `slug` as a frontmatter in your blog post.

For example, if the blog file name is `adding-new-post.md` and you don't specify the slug in your frontmatter, Astro will automatically create a slug for the blog post using the file name. Thus, the slug will be `adding-new-post`. But if you specify the `slug` in the frontmatter, this will override the default slug. You can read more about this in [Astro Docs](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs).

If you omit `tags` in a blog post (in other words, if no tag is specified), the default tag `others` will be used as a tag for that post. You can set the default tag in the `/src/content/config.ts` file.

```ts
// src/content/config.ts
export const blogSchema = z.object({
  // ---
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default(["others"]), // replace "others" with whatever you want
  // ---
});
```
