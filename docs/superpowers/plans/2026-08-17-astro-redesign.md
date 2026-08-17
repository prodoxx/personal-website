# Astro Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Nuxt 3 site with a simple, SEO focused Astro site that has an about front page and a markdown posts section.

**Architecture:** Astro renders every page to static HTML at build time. Posts live in a content collection with a validated schema. One base layout owns the head tags, the nav, and the footer.

**Tech Stack:** Astro (latest, major 5 or newer), Tailwind 4 through `@tailwindcss/vite`, `@tailwindcss/typography`, `@astrojs/sitemap`, `@astrojs/rss`, pnpm, Node 24, Vercel.

**Spec:** `docs/superpowers/specs/2026-08-17-astro-redesign-design.md`

## Global Constraints

- The site URL is `https://reggieescobar.com`. Set it as `site` in the Astro config.
- Use pnpm for every install and script. Node stays at `24.x` in the `engines` field.
- Never run `git push`. Commit locally only.
- Never add a `Co-Authored-By` trailer or any AI attribution line to a commit message.
- In prose inside files (README, site copy, comments), never use em dashes, en dashes, colons inside sentences, or hyphenated compound words.
- The GA4 tag id is `G-LZRLE3P50T`. It loads only in production builds.
- Old routes (`/blog/*`, `/about`, `/portfolio`, `/contact`) get no redirects. They return 404.
- Work on the current branch `chore/simple-website`.

## File Structure

```
astro.config.mjs             # site URL, Tailwind vite plugin, sitemap integration
package.json                 # replaced, Astro scripts
tsconfig.json                # replaced, extends astro/tsconfigs/strict
src/
  content.config.ts          # posts collection + zod schema
  assets/hero.png            # moved from public/ for image optimization
  styles/global.css          # tailwind + typography plugin import
  layouts/Base.astro         # head, SEO tags, nav, footer, GA
  pages/index.astro          # hero + about + posts link + Person JSON-LD
  pages/posts/index.astro    # posts list
  pages/posts/[slug].astro   # post page + BlogPosting JSON-LD
  pages/404.astro            # not found page
  pages/rss.xml.js           # RSS feed
src/content/posts/           # markdown posts (hello-world.md migrates here)
public/                      # favicons, webmanifest, robots.txt, images/reggie.png
```

---

### Task 1: Remove Nuxt and scaffold the Astro baseline

**Files:**
- Delete: `app.vue`, `nuxt.config.ts`, `pages/`, `components/`, `layouts/`, `server/`, `assets/`, `public/resume.pdf`, `pnpm-lock.yaml`
- Create: `.gitignore`, `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/styles/global.css`, `src/layouts/Base.astro`, `src/pages/index.astro`

**Interfaces:**
- Consumes: nothing.
- Produces: `Base.astro` with props `{ title: string; description: string; ogType?: string }`, a default slot for the page body, and a named slot `head` for extra head tags. Every later page task imports it from `src/layouts/Base.astro`.

Note. Do not delete `content/` in this task. Task 2 moves `content/blog/hello-world.md` into the new collection.

- [ ] **Step 1: Delete the Nuxt files**

```bash
git rm -r app.vue nuxt.config.ts pages components layouts server assets
git rm public/resume.pdf pnpm-lock.yaml
rm -rf node_modules .nuxt .output
```

- [ ] **Step 2: Write `.gitignore`**

```
node_modules/
dist/
.astro/
.DS_Store
```

- [ ] **Step 3: Write `package.json`**

```json
{
  "name": "personal-website",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "packageManager": "pnpm@9.1.3+sha1.6110a47202a78d07d0bf8c9f4f4c63cc83bb833a",
  "engines": {
    "node": "24.x"
  }
}
```

- [ ] **Step 4: Install the dependencies**

```bash
pnpm add astro tailwindcss @tailwindcss/vite @tailwindcss/typography
pnpm add -D @astrojs/check typescript
```

Then run `pnpm list astro` and confirm the major version is 5 or newer.

- [ ] **Step 5: Write `astro.config.mjs`**

```js
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://reggieescobar.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 6: Write `tsconfig.json`**

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

- [ ] **Step 7: Write `src/styles/global.css`**

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

- [ ] **Step 8: Write `src/layouts/Base.astro`**

```astro
---
import "../styles/global.css";

interface Props {
  title: string;
  description: string;
  ogType?: string;
}

const { title, description, ogType = "website" } = Astro.props;
const canonical = new URL(Astro.url.pathname, Astro.site);
const ogImage = new URL("/images/reggie.png", Astro.site);
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@_reggieescobar" />
    <link rel="icon" href="/favicon.ico" sizes="32x32" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#ffffff" />
    <slot name="head" />
  </head>
  <body class="bg-white text-zinc-800">
    <div class="mx-auto flex min-h-screen max-w-2xl flex-col px-5">
      <header class="flex items-center justify-between py-8">
        <a href="/" class="font-semibold text-zinc-900">Reggie Escobar</a>
        <nav>
          <a href="/posts/" class="font-medium text-violet-700 hover:underline">Posts</a>
        </nav>
      </header>
      <main class="flex-1 pb-16">
        <slot />
      </main>
      <footer
        class="flex flex-wrap gap-x-5 gap-y-2 border-t border-zinc-200 py-8 text-sm text-zinc-500"
      >
        <a href="https://github.com/prodoxx" class="hover:text-zinc-900">GitHub</a>
        <a href="https://x.com/_reggieescobar" class="hover:text-zinc-900">X</a>
        <a href="https://www.linkedin.com/in/reggie-escobar/" class="hover:text-zinc-900">LinkedIn</a>
        <a href="mailto:contact@reggieescobar.com" class="hover:text-zinc-900">contact@reggieescobar.com</a>
      </footer>
    </div>
  </body>
</html>
```

- [ ] **Step 9: Write a temporary `src/pages/index.astro`**

Task 4 replaces this file with the full front page.

```astro
---
import Base from "../layouts/Base.astro";
---

<Base
  title="Reggie Escobar | Senior Software Engineer"
  description="Reggie Escobar is a senior software engineer with more than 7 years of experience. He builds web apps, mobile apps, and AI tools."
>
  <h1 class="text-4xl font-bold tracking-tight text-zinc-900">Reggie Escobar</h1>
</Base>
```

- [ ] **Step 10: Build and verify**

```bash
pnpm build
grep -c 'rel="canonical" href="https://reggieescobar.com/"' dist/index.html
grep -c 'property="og:image"' dist/index.html
grep -c '<h1' dist/index.html
```

Expected: the build succeeds and each grep prints `1`.

- [ ] **Step 11: Run the type checks**

Run: `pnpm check`
Expected: 0 errors.

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "feat: replace Nuxt with an Astro and Tailwind baseline"
```

---

### Task 2: Posts collection and posts list page

**Files:**
- Create: `src/content.config.ts`, `src/pages/posts/index.astro`
- Move: `content/blog/hello-world.md` to `src/content/posts/hello-world.md`

**Interfaces:**
- Consumes: `Base.astro` props `{ title, description, ogType? }` from Task 1.
- Produces: collection `posts`. Each entry has `id` (the file name without `.md`, used as the URL slug) and `data: { title: string; description: string; date: Date; draft: boolean }`. Tasks 3 and 5 call `getCollection("posts", ({ data }) => !data.draft)`.

- [ ] **Step 1: Write `src/content.config.ts`**

```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
```

- [ ] **Step 2: Move the existing post**

```bash
mkdir -p src/content/posts
git mv content/blog/hello-world.md src/content/posts/hello-world.md
```

The frontmatter (`title`, `date`, `description`) already fits the schema. Do not edit the file.

- [ ] **Step 3: Write `src/pages/posts/index.astro`**

```astro
---
import { getCollection } from "astro:content";
import Base from "../../layouts/Base.astro";

const posts = (await getCollection("posts", ({ data }) => !data.draft)).sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
);

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
---

<Base
  title="Posts | Reggie Escobar"
  description="Posts by Reggie Escobar about software engineering, side projects, and lessons from work."
>
  <h1 class="text-3xl font-bold tracking-tight text-zinc-900">Posts</h1>
  <ul class="mt-8 space-y-8">
    {
      posts.map((post) => (
        <li>
          <a
            href={`/posts/${post.id}/`}
            class="text-lg font-medium text-violet-700 hover:underline"
          >
            {post.data.title}
          </a>
          <time
            datetime={post.data.date.toISOString()}
            class="block text-sm text-zinc-500"
          >
            {formatDate(post.data.date)}
          </time>
          <p class="mt-1 text-zinc-600">{post.data.description}</p>
        </li>
      ))
    }
  </ul>
</Base>
```

- [ ] **Step 4: Build and verify the list**

```bash
pnpm build
grep -c 'Hello, World!' dist/posts/index.html
grep -c 'href="/posts/hello-world/"' dist/posts/index.html
```

Expected: the build succeeds and each grep prints `1`.

- [ ] **Step 5: Verify that drafts stay hidden**

Write `src/content/posts/draft-test.md`.

```markdown
---
title: "Draft test"
date: "2026-01-01"
description: "This post must not appear."
draft: true
---

Hidden body.
```

```bash
pnpm build
grep -c 'Draft test' dist/posts/index.html || true
rm src/content/posts/draft-test.md
```

Expected: the grep prints `0`. Then the file is removed.

- [ ] **Step 6: Run the type checks**

Run: `pnpm check`
Expected: 0 errors.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add the posts collection and the posts list page"
```

---

### Task 3: Post page and 404 page

**Files:**
- Create: `src/pages/posts/[slug].astro`, `src/pages/404.astro`

**Interfaces:**
- Consumes: `Base.astro` from Task 1 and the `posts` collection from Task 2.
- Produces: routes `/posts/<slug>/` for every published post, plus the 404 page.

- [ ] **Step 1: Write `src/pages/posts/[slug].astro`**

```astro
---
import { getCollection, render } from "astro:content";
import type { CollectionEntry } from "astro:content";
import Base from "../../layouts/Base.astro";

export async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

type Props = { post: CollectionEntry<"posts"> };

const { post } = Astro.props;
const { Content } = await render(post);

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.data.title,
  description: post.data.description,
  datePublished: post.data.date.toISOString(),
  author: {
    "@type": "Person",
    name: "Reggie Escobar",
    url: "https://reggieescobar.com/",
  },
  mainEntityOfPage: new URL(`/posts/${post.id}/`, Astro.site).href,
});
---

<Base
  title={`${post.data.title} | Reggie Escobar`}
  description={post.data.description}
  ogType="article"
>
  <script type="application/ld+json" set:html={jsonLd} slot="head" />
  <article>
    <a href="/posts/" class="text-sm font-medium text-violet-700 hover:underline">← Posts</a>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-zinc-900">
      {post.data.title}
    </h1>
    <time
      datetime={post.data.date.toISOString()}
      class="mt-2 block text-sm text-zinc-500"
    >
      {formatDate(post.data.date)}
    </time>
    <div class="prose prose-zinc mt-8 max-w-none">
      <Content />
    </div>
  </article>
</Base>
```

- [ ] **Step 2: Write `src/pages/404.astro`**

```astro
---
import Base from "../layouts/Base.astro";
---

<Base title="Page not found | Reggie Escobar" description="This page does not exist.">
  <h1 class="text-3xl font-bold tracking-tight text-zinc-900">Page not found</h1>
  <p class="mt-4 text-zinc-600">
    This page does not exist.
    <a href="/" class="text-violet-700 hover:underline">Go back home</a>.
  </p>
</Base>
```

- [ ] **Step 3: Build and verify**

```bash
pnpm build
grep -c '<h1[^>]*>[^<]*Hello, World!' dist/posts/hello-world/index.html
grep -c 'application/ld+json' dist/posts/hello-world/index.html
grep -c 'BlogPosting' dist/posts/hello-world/index.html
grep -c 'indie hacking' dist/posts/hello-world/index.html
test -f dist/404.html && echo ok
```

Expected: each grep prints `1` and the last line prints `ok`.

- [ ] **Step 4: Run the type checks**

Run: `pnpm check`
Expected: 0 errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add the post page and the 404 page"
```

---

### Task 4: Front page with hero and about

**Files:**
- Move: `public/hero.png` to `src/assets/hero.png`
- Modify: `src/pages/index.astro` (full replacement of the Task 1 placeholder)

**Interfaces:**
- Consumes: `Base.astro` from Task 1 and `src/assets/hero.png`.
- Produces: the final front page. No later task depends on it.

- [ ] **Step 1: Move the hero image**

```bash
mkdir -p src/assets
git mv public/hero.png src/assets/hero.png
```

- [ ] **Step 2: Replace `src/pages/index.astro`**

```astro
---
import { Image } from "astro:assets";
import Base from "../layouts/Base.astro";
import hero from "../assets/hero.png";

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Reggie Escobar",
      url: "https://reggieescobar.com/",
      image: "https://reggieescobar.com/images/reggie.png",
      jobTitle: "Senior Software Engineer",
      sameAs: [
        "https://github.com/prodoxx",
        "https://x.com/_reggieescobar",
        "https://www.linkedin.com/in/reggie-escobar/",
      ],
    },
    {
      "@type": "WebSite",
      name: "Reggie Escobar",
      url: "https://reggieescobar.com/",
    },
  ],
});
---

<Base
  title="Reggie Escobar | Senior Software Engineer"
  description="Reggie Escobar is a senior software engineer with more than 7 years of experience. He builds web apps, mobile apps, and AI tools."
>
  <script type="application/ld+json" set:html={jsonLd} slot="head" />

  <section class="flex flex-col-reverse gap-8 sm:flex-row sm:items-center">
    <div class="flex-1">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-900">Reggie Escobar</h1>
      <p class="mt-2 text-lg text-violet-700">Senior software engineer</p>
      <p class="mt-4 text-zinc-600">
        I build web apps, mobile apps, and AI tools for founders and product
        teams. I take products from idea to launch.
      </p>
    </div>
    <div class="w-full overflow-hidden rounded-2xl sm:w-64 sm:shrink-0">
      <Image
        src={hero}
        alt="Reggie Escobar"
        widths={[320, 640, 960]}
        sizes="(min-width: 640px) 16rem, 100vw"
        loading="eager"
        class="aspect-[16/9] w-full object-cover object-right sm:aspect-[4/5]"
      />
    </div>
  </section>

  <section class="mt-16">
    <h2 class="text-2xl font-semibold text-zinc-900">About me</h2>
    <div class="mt-4 space-y-4 text-zinc-600">
      <p>
        I am a senior backend and full stack engineer with more than 7 years
        of experience. I ship production systems in Node.js, Python, and
        TypeScript. My work covers payment integrations, AI infrastructure,
        and distributed backends for SaaS platforms.
      </p>
      <p>
        I started to write code as a kid. Cheat menus for flash games became
        personal blogs, then small apps in college, then a career in
        software. Along the way I learned how to think in systems.
      </p>
      <p>
        I live in Taipei, Taiwan, and I work with remote teams. On the side I
        build my own SaaS products. If you want to talk about a project,
        <a href="mailto:contact@reggieescobar.com" class="text-violet-700 hover:underline">send me an email</a>.
      </p>
    </div>
  </section>

  <p class="mt-12">
    <a href="/posts/" class="font-medium text-violet-700 hover:underline">Read my posts →</a>
  </p>
</Base>
```

- [ ] **Step 3: Build and verify**

```bash
pnpm build
ls dist/_astro | grep -c hero
grep -c 'loading="eager"' dist/index.html
grep -c 'width=' dist/index.html
grep -c '"@type":"Person"' dist/index.html
grep -c 'About me' dist/index.html
```

Expected: the `ls` grep prints `1` or more, and each other grep prints `1` or more.

- [ ] **Step 4: Run the type checks**

Run: `pnpm check`
Expected: 0 errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: build the front page with the hero and about sections"
```

---

### Task 5: Sitemap, RSS feed, and robots.txt

**Files:**
- Create: `src/pages/rss.xml.js`
- Modify: `astro.config.mjs`, `src/layouts/Base.astro`, `public/robots.txt`

**Interfaces:**
- Consumes: the `posts` collection from Task 2.
- Produces: `/sitemap-index.xml`, `/rss.xml`, and an updated `robots.txt`.

- [ ] **Step 1: Install the integrations**

```bash
pnpm add @astrojs/rss @astrojs/sitemap
```

- [ ] **Step 2: Replace `astro.config.mjs`**

```js
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://reggieescobar.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 3: Write `src/pages/rss.xml.js`**

```js
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("posts", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  return rss({
    title: "Reggie Escobar",
    description:
      "Posts by Reggie Escobar about software engineering, side projects, and lessons from work.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
    })),
  });
}
```

- [ ] **Step 4: Add the feed link to `src/layouts/Base.astro`**

In the head, replace this line

```astro
    <meta name="theme-color" content="#ffffff" />
```

with these lines

```astro
    <meta name="theme-color" content="#ffffff" />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Reggie Escobar"
      href={new URL("/rss.xml", Astro.site)}
    />
```

- [ ] **Step 5: Replace `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://reggieescobar.com/sitemap-index.xml
```

- [ ] **Step 6: Build and verify**

```bash
pnpm build
test -f dist/sitemap-index.xml && echo sitemap-ok
grep -c 'posts/hello-world' dist/sitemap-0.xml
grep -c 'posts/hello-world' dist/rss.xml
grep -c 'rss.xml' dist/index.html
```

Expected: `sitemap-ok` prints, and each grep prints `1` or more.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add the sitemap, the RSS feed, and the robots update"
```

---

### Task 6: Analytics, cleanup, and final verification

**Files:**
- Modify: `src/layouts/Base.astro`, `public/site.webmanifest`, `README.md`

**Interfaces:**
- Consumes: `Base.astro` from Task 1.
- Produces: the finished site. Nothing depends on this task.

- [ ] **Step 1: Add GA4 to `src/layouts/Base.astro`**

In the head, replace this line

```astro
    <slot name="head" />
```

with this block

```astro
    <slot name="head" />
    {
      import.meta.env.PROD && (
        <Fragment>
          <script
            is:inline
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-LZRLE3P50T"
          ></script>
          <script is:inline>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-LZRLE3P50T");
          </script>
        </Fragment>
      )
    }
```

- [ ] **Step 2: Verify GA in the production build**

```bash
pnpm build
grep -c 'googletagmanager' dist/index.html
grep -c 'G-LZRLE3P50T' dist/index.html
```

Expected: each grep prints `1` or more.

- [ ] **Step 3: Verify GA stays out of dev**

```bash
pnpm dev & DEV_PID=$!
sleep 5
curl -s http://localhost:4321/ | grep -c googletagmanager || true
kill $DEV_PID
```

Expected: the grep prints `0`.

- [ ] **Step 4: Update `public/site.webmanifest`**

Open the file. Set `"theme_color"` to `"#ffffff"` and `"background_color"` to `"#ffffff"`. Keep every other field.

- [ ] **Step 5: Replace `README.md`**

```markdown
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
```

- [ ] **Step 6: Confirm `vercel.json` needs no change**

Run: `cat vercel.json`
Expected: it still contains `"installCommand": "pnpm install --frozen-lockfile"`. Do not edit it.

- [ ] **Step 7: Full verification pass**

```bash
pnpm check
pnpm build
pnpm preview & PREVIEW_PID=$!
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/posts/
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/posts/hello-world/
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/rss.xml
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/sitemap-index.xml
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/blog/hello-world
kill $PREVIEW_PID
```

Expected: five `200` lines, then one `404` line for the old blog URL.

- [ ] **Step 8: Lighthouse check**

This step needs a local Chrome. Skip it if Chrome is not available and report that.

```bash
pnpm preview & PREVIEW_PID=$!
sleep 3
npx lighthouse http://localhost:4321/ --only-categories=seo,performance --chrome-flags="--headless" --quiet
kill $PREVIEW_PID
```

Expected: SEO score 100 and performance score 95 or above.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "chore: add analytics and finish the site cleanup"
```
