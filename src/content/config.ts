import { defineCollection, z } from 'astro:content';

const publicationLinks = z.object({
  pdf: z.string().url().optional(),
  code: z.string().url().optional(),
  bibtex: z.string().optional(),
  page: z.string().url().optional(),
  slides: z.string().optional(),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    myName: z.string().default('Changlun Li'),
    venue: z.string(),
    venueShort: z.string(),
    year: z.number(),
    category: z.enum(['AI / LLMs', 'AI for Finance']),
    abstract: z.string(),
    links: publicationLinks.default({}),
    featured: z.boolean().default(false),
    note: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    category: z.enum(['Model', 'Dataset', 'Benchmark', 'FinTech', 'Open Source']),
    links: z.object({
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      paper: z.string().url().optional(),
    }).default({}),
    featured: z.boolean().default(false),
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

export const collections = { publications, projects, blog };
