# reggieescobar.com

Personal website built with Astro and Tailwind. Vercel deploys the site.

## Commands

- `pnpm dev` starts the dev server.
- `pnpm build` builds the site to `dist/`.
- `pnpm preview` serves the built site.
- `pnpm check` runs the Astro type checks.

## How to add a post

1. Create a markdown file in `src/content/posts/`. The file name becomes the URL slug.
2. Add `title`, `description`, and `date` to the frontmatter. Add `draft: true` to hide a post.
3. Commit and push. Vercel builds and deploys the site.
