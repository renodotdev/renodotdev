import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    readTime: z.string().default('5 min read'),
    featured: z.boolean().default(false),
    author: z.string().default('Della Reno Rinaldi'),
    coverImage: z.string().optional(),
    audience: z.string().default('Founders & Engineering Teams'),
  }),
});

export const collections = { articles };
