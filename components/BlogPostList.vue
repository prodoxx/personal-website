<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () => queryContent("/blog").sort({ date: -1 }).find());

function getPostPreview(post: any): string {
  if (post.description) {
    return post.description;
  }
  if (typeof post.body === "string") {
    return post.body.substring(0, 150) + "...";
  }
  if (post.body && post.body.children) {
    const textContent = post.body.children
      .filter((child: any) => child.type === "text")
      .map((child: any) => child.value)
      .join(" ");
    return textContent.substring(0, 150) + "...";
  }
  return "No preview available";
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <div class="space-y-8">
    <article v-for="post in posts" :key="post._path" class="border-b pb-8 last:border-b-0">
      <h2 class="text-2xl font-bold mb-2">
        <NuxtLink :to="post._path" class="hover:text-blue-600 transition-colors">
          {{ post.title }}
        </NuxtLink>
      </h2>
      <p class="text-gray-500 text-sm mb-2">{{ formatDate(post.date) }}</p>
      <p class="text-gray-600 mb-4">{{ getPostPreview(post) }}</p>
      <NuxtLink :to="post._path" class="text-blue-600 hover:underline"> Read more </NuxtLink>
    </article>
  </div>
</template>
