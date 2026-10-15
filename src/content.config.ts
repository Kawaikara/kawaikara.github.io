import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const reference = defineCollection({
  loader: glob({
    base: './src/content/reference',
    deferRender: true,
    generateId: ({ entry }) => entry.replace(/\.md$/i, ''),
    pattern: '**/*.md',
  }),
  schema: z.object({
    appVersion: z.string(),
    channel: z.enum(['stable', 'staging']),
    category: z.string().optional(),
    description: z.string().optional(),
    displayPath: z.string().optional(),
    section: z.enum(['app-design', 'app-api', 'builtin-sites', 'site-api']),
    siteApiVersion: z.string().nullable(),
    sourcePath: z.string(),
    sourceRef: z.string(),
    symbolKind: z.string().optional(),
    title: z.string(),
  }),
});

export const collections = { reference };
