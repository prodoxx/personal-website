<script setup lang="ts">
const { data: post } = await useAsyncData("post", () => {
  const slug = useRoute().params.slug as string[];
  return queryContent("/blog")
    .where({ _path: { $contains: slug } })
    .findOne();
});

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const postUrl = `https://reggieescobar.com${post.value?._path}`;
const postImage = post.value?.image
  ? `https://reggieescobar.com${post.value.image}`
  : "https://reggieescobar.com/images/reggie.png";

useHead({
  title: `${post.value?.title} - Reggie Escobar`,
  meta: [
    { name: "description", content: post.value?.description },
    { name: "keywords", content: post.value?.keywords },
    { property: "og:title", content: `${post.value?.title} - Reggie Escobar` },
    { property: "og:description", content: post.value?.description },
    { property: "og:image", content: postImage },
    { property: "og:url", content: postUrl },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@_reggieescobar" },
    { name: "twitter:title", content: `${post.value?.title} - Reggie Escobar` },
    { name: "twitter:description", content: post.value?.description },
    { name: "twitter:image", content: postImage },
  ],
  link: [{ rel: "canonical", href: postUrl }],
});
</script>
<template>
  <main>
    <ContentWrapper>
      <Logo />
      <nav class="text-sm mb-8">
        <NuxtLink to="/blog" class="text-blue-600 hover:underline">Blog</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-600">{{ post?.title }}</span>
      </nav>
      <div v-if="post" class="prose mb-12">
        <h1 class="mb-0">{{ post.title }}</h1>
        <p class="text-sm text-gray-500 mb-0 mt-2">{{ formatDate(post.date) }}</p>
      </div>
      <ContentDoc class="prose !max-w-none" />
    </ContentWrapper>
  </main>
</template>
