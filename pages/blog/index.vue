<script setup lang="ts">
useHead({
  title: "Blog — Reggie Escobar",
  meta: [
    {
      name: "description",
      content: "Notes on software engineering, product craft, and building in the AI era.",
    },
    { property: "og:title", content: "Blog — Reggie Escobar" },
    {
      property: "og:description",
      content: "Notes on software engineering, product craft, and building in the AI era.",
    },
    { property: "og:image", content: "https://reggieescobar.com/images/reggie.png" },
    { property: "og:url", content: "https://reggieescobar.com/blog" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@_reggieescobar" },
    { name: "twitter:title", content: "Blog — Reggie Escobar" },
  ],
  link: [{ rel: "canonical", href: "https://reggieescobar.com/blog" }],
});
</script>

<template>
  <div class="blog-page">
    <div class="blog-head a-fadeUp">
      <p class="eyebrow">// Writing</p>
      <h1 class="h1">Field <span class="text-gradient">notes</span>.</h1>
      <p class="lead">
        A small log of what I've learned while shipping — product, engineering,
        AI, and the spaces in between.
      </p>
    </div>

    <BlogPostList />
  </div>
</template>

<style scoped>
.blog-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}
@media (min-width: 768px) { .blog-page { padding: 80px 24px 120px; } }

.blog-head {
  margin-bottom: 48px;
}
.eyebrow {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 9999px;
  border: 1px solid rgba(232, 181, 100, 0.25);
  background: rgba(232, 181, 100, 0.06);
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f4d48a;
  margin-bottom: 20px;
}
.h1 {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.04;
  color: #fff;
  margin-bottom: 18px;
}
.lead {
  color: #bdb5a5;
  font-size: clamp(15px, 1.4vw, 18px);
  line-height: 1.65;
  max-width: 580px;
}
</style>
