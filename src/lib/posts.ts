import { getCollection } from "astro:content";

/** Published posts, newest first. */
export async function getPublishedPosts() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const WORDS_PER_MINUTE = 230;

/** Estimated reading time in minutes for a post's Markdown or MDX body. */
export function readingMinutes(body: string) {
  const text = body
    .replace(/^import .*$/gm, "") // MDX imports
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
    .replace(/\]\([^)]*\)/g, "]") // link URLs
    .replace(/<[^>]+>/g, " "); // HTML and JSX tags
  const words = text.split(/\s+/).filter((word) => /\w/.test(word)).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
