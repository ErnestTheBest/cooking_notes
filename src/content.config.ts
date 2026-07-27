import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    number: z.number(),
    date: z.coerce.date(),
    summary: z.string(),
    servings: z.number().optional(),
    time: z.number().optional(),
    mainIngredient: z.string(),
    methods: z.array(z.enum(["жарка", "запекание", "сувид", "варка"])),
    equipment: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    ingredients: z.array(
      z.object({
        amount: z.union([z.number(), z.string()]),
        unit: z.string().default(""),
        name: z.string(),
      }),
    ),
  }),
});

export const collections = { notes };
