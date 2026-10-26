# reggieescobar.com

Personal website built with Astro and Tailwind. Vercel deploys the site.

## Commands

- `bun run dev` starts the dev server.
- `bun run build` builds the site to `dist/`.
- `bun run preview` serves the built site.
- `bun run check` runs the Astro type checks.

## How to add a post

1. Create a Markdown (`.md`) or MDX (`.mdx`) file in `src/content/posts/`. Use MDX to add components such as `Callout` and `Figure`. The file name becomes the URL slug.
2. Add `title`, `description`, and `date` to the frontmatter. Add `draft: true` to hide a post.
3. Start headings inside the post body at level two (`##`). The post title is the only h1 on the page.
4. Commit and push. Vercel builds and deploys the site.
