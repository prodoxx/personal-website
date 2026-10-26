import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().default(false),
      // Social share image (og:image, twitter:image, and JSON-LD image).
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

export const collections = { posts };
