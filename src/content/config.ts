import { defineCollection, z } from 'astro:content';

const publicationLinks = z.object({
  pdf: z.string().url().optional(),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    myName: z.string().default('Changlun Li'),
    venue: z.string(),
    venueShort: z.string(),
    conference: z.enum(['emnlp2026', 'neurips2025', 'ijcai2025', 'vldb2025']),
    year: z.number(),
    order: z.number(),
    equalContribution: z.array(z.string()).default([]),
    category: z.enum(['AI / LLMs', 'AI for Finance']),
    links: publicationLinks.default({}),
    featured: z.boolean().default(false),
    note: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { publications, blog };
