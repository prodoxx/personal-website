# Personal Website Redesign in Astro

Date 2026-08-17. Status approved.

## Goal

Replace the Nuxt 3 site with a simple, SEO focused Astro 5 site. The site has a white background, an about front page, and a posts section. Keep the current `public/hero.png` photo in the hero.

## Scope

The new site has four pages.

- `/` shows the hero and the about section.
- `/posts` lists all posts, newest first.
- `/posts/<slug>` renders one post from markdown.
- `/404` is a simple not found page.

Drop the portfolio, contact, about, and blog pages. Drop `resume.pdf`. Old URLs return 404 with no redirects. The old blog post moves to the new posts collection at `/posts/hello-world`.

## Stack

- Astro 5, latest stable release, static output.
- Tailwind 4 through the Vite plugin, plus the `@tailwindcss/typography` plugin for post bodies.
- `@astrojs/sitemap` for the sitemap and `@astrojs/rss` for the feed.
- pnpm, Node 24, deploy on Vercel. Keep `vercel.json` with the pnpm install command.

## Project layout

```
src/
  content.config.ts        # posts collection + schema
  layouts/Base.astro       # head, SEO tags, nav, footer
  pages/index.astro
  pages/posts/index.astro
  pages/posts/[slug].astro
  pages/404.astro
  pages/rss.xml.js
  assets/hero.png          # moved here for image optimization
  styles/global.css        # tailwind import + base styles
public/                    # favicons, robots.txt, webmanifest
```

## Content model

Posts live in `src/content/posts/` as markdown files. A zod schema validates the frontmatter. I list the fields below.

- `title`, string, required.
- `description`, string, required.
- `date`, date, required.
- `draft`, boolean, optional, default false.

Draft posts do not appear in the list, the sitemap, or the RSS feed. The build fails on bad frontmatter. To publish a post, add one markdown file, commit, and push.

## Page design

The background is white. Text is near black gray. Links and small accents use one purple tone that echoes the photo. Fonts come from the system font stack. The content sits in one centered column of about 42rem.

A minimal header shows the site name on the left and one "Posts" link on the right. A small footer shows four links. They are GitHub (https://github.com/prodoxx), X (https://x.com/_reggieescobar), LinkedIn (https://www.linkedin.com/in/reggie-escobar/), and email (contact@reggieescobar.com).

The front page hero is side by side. The left side shows the name as the h1, a one line role, and a short intro. The right side shows a cropped, rounded portion of `hero.png`. On mobile the photo stacks above the text. Below the hero, an about section holds a short rewrite of the story in a few paragraphs. The page ends with a "Posts" link. The Astro image component converts the PNG into small responsive files with set width and height.

The posts list is a plain vertical list. Each entry shows the title as a link, the date, and the description. The post page shows the title as h1, the date, then the body with typography styles. A back link at the top returns to the list.

## SEO

- Astro prerenders every page to static HTML.
- Every page sets a unique title, a meta description, and a canonical URL from `Astro.site` (https://reggieescobar.com).
- Every page sets Open Graph and Twitter card tags. Posts use their own title and description.
- The front page embeds JSON-LD Person and WebSite data. Each post embeds JSON-LD BlogPosting data with dates and author.
- The sitemap integration generates the sitemap. Update `robots.txt` to point at it.
- An RSS feed serves all posts at `/rss.xml`.
- Each page uses semantic HTML with one h1 and a correct heading order.

## Analytics

Keep the GA4 tag `G-LZRLE3P50T`. The script loads only in production builds. It is the only client JavaScript on the site.

## Cleanup

Delete all Nuxt files. That covers `app.vue`, `nuxt.config.ts`, `pages/`, `components/`, `layouts/`, `server/`, `assets/`, `content/`, and the Nuxt dependencies in `package.json`. Remove `public/resume.pdf`. Keep the favicons, the webmanifest, `robots.txt`, and `hero.png`.

## Verification

- `pnpm build` and `astro check` pass.
- The built HTML contains the meta tags and the JSON-LD blocks.
- The sitemap, the RSS feed, and the 404 page work in `astro preview`.
- A local Lighthouse run scores 100 on SEO and 95 or above on performance.
