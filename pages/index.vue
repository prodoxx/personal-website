<template>
  <div class="min-h-screen bg-white">
    <ProfileCard />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Reggie Escobar - Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "I'm a software engineer who builds immersive and user-friendly applications that users love. Check out my blog, find me on Twitter or LinkedIn, or send me an email.",
    },
    {
      name: "keywords",
      content: "Reggie Escobar, software engineer, web development, applications, belize, taiwan software engineer",
    },
    { property: "og:title", content: "Reggie Escobar - Software Engineer" },
    {
      property: "og:description",
      content:
        "I'm a software engineer who builds immersive and user-friendly applications that users love. Check out my blog, find me on Twitter or LinkedIn, or send me an email.",
    },
    { property: "og:image", content: "/images/reggie.png" },
    { property: "og:url", content: "https://reggieescobar.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@_reggieescobar" },
  ],
  link: [{ rel: "canonical", href: "https://reggieescobar.com" }],
});
</script>
