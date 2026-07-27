---
name: add-cooking-note
description: Add or update factual cooking notes in the cooking_notes Astro project. Use when the user describes how they cook a dish, asks to add a recipe or product, supplies ingredient quantities or steps, or wants an existing note corrected.
---

# Add Cooking Note

Add one Markdown note without inventing culinary facts.

## Workflow

1. Read `src/content.config.ts` and the existing files in `src/content/notes/`.
2. Extract only facts stated by the user. Preserve their temperatures, power
   levels, quantities, equipment, sequence, and uncertainty.
3. Reuse existing spelling for products, methods, units, equipment, and tags.
4. Create or update one file in `src/content/notes/`.
5. Run `npm run build` and fix schema or Markdown errors.
6. Report what was added and name any useful facts that remain unknown.

## Never invent data

- Do not invent servings, cooking time, temperature, doneness, equipment,
  observations, ratings, or status.
- Do not add lorem ipsum, placeholder notes, sample products, or speculative
  advice.
- Omit optional fields when the user did not provide them.
- Keep an explicit uncertainty as uncertainty instead of resolving it.
- Ask a question only when different interpretations would materially change
  the note. Otherwise add the known facts and leave the rest absent.

## Frontmatter

Follow the current schema. A typical note looks like:

```yaml
---
title: Омлет под крышкой
number: 1
date: 2026-07-27
summary: Омлет на антипригарной сковороде.
mainIngredient: яйца
methods:
  - жарка
equipment:
  - антипригарная сковорода
tags:
  - яйца
  - под крышкой
ingredients:
  - amount: 6
    unit: шт.
    name: яйца
---
```

Apply these rules:

- `number`: use the next unused integer for a new note; preserve it on update.
- `date`: use the date the note is added unless the user supplies another date.
- `summary`: write one short factual sentence from the supplied information.
- `mainIngredient`: use one stable filter value such as `яйца`, `курица`,
  `говядина`, `свинина`, or `картофель`.
- `methods`: use existing controlled values from `src/content.config.ts`.
  Extend the enum only when the user explicitly supplies a genuinely new
  cooking method.
- `equipment`: include only equipment that affects the result.
- `tags`: derive useful free-form filters from the note and reuse existing
  wording. Do not create synonyms for an existing tag.
- `ingredients`: preserve the user's quantities and units. Use a string such as
  `по вкусу` only when that is what the user communicated.
- `servings` and `time`: include only when provided by the user.

## Note body

Use `## Как делаю` followed by a short introduction when useful and a numbered
sequence of actions. Keep power levels, temperatures, timings, visual cues, and
lid changes in the exact step where they occur.

Add `## Наблюдения` only when the user actually provides an observation,
comparison, failed attempt, or next-time adjustment.

Write concise natural Russian. Preserve the user's practical voice; do not turn
the note into restaurant copy or generic recipe advice.
