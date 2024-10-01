<script setup lang="ts">
useHead({
  title: "Reggie Escobar - Blog",
  meta: [
    {
      name: "description",
      content: "My blog where I write about software engineering, web development, and other topics.",
    },
    {
      name: "keywords",
      content: "Reggie Escobar, blog, software engineering, web development, programming, technology",
    },
    { property: "og:title", content: "Reggie Escobar - Blog" },
    {
      property: "og:description",
      content: "My blog where I write about software engineering, web development, and other topics.",
    },
    { property: "og:image", content: "/images/reggie.png" },
    { property: "og:url", content: "https://reggieescobar.com/blog" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@_reggieescobar" },
  ],
  link: [{ rel: "canonical", href: "https://reggieescobar.com/blog" }],
});
</script>
<template>
  <div class="min-h-screen bg-white">
    <ContentWrapper>
      <Logo />
      <div class="prose mb-12">
        <h1>Blog</h1>
      </div>
      <BlogPostList />
    </ContentWrapper>
  </div>
</template>
