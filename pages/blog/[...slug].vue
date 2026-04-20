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
  title: `${post.value?.title} — Reggie Escobar`,
  meta: [
    { name: "description", content: post.value?.description },
    { name: "keywords", content: post.value?.keywords },
    { property: "og:title", content: `${post.value?.title} — Reggie Escobar` },
    { property: "og:description", content: post.value?.description },
    { property: "og:image", content: postImage },
    { property: "og:url", content: postUrl },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@_reggieescobar" },
    { name: "twitter:title", content: `${post.value?.title} — Reggie Escobar` },
    { name: "twitter:description", content: post.value?.description },
    { name: "twitter:image", content: postImage },
  ],
  link: [{ rel: "canonical", href: postUrl }],
});
</script>

<template>
  <main class="post-page">
    <div class="post-inner a-fadeUp">
      <nav class="crumbs">
        <NuxtLink to="/blog" class="link-magnetic">Blog</NuxtLink>
        <span class="sep">/</span>
        <span class="current">{{ post?.title }}</span>
      </nav>

      <article v-if="post" class="post">
        <header class="post-head">
          <p class="eyebrow">{{ formatDate(post.date) }}</p>
          <h1 class="post-title">{{ post.title }}</h1>
          <p v-if="post.description" class="post-desc">{{ post.description }}</p>
        </header>
        <div class="prose-wrap">
          <ContentDoc class="prose prose-invert !max-w-none" />
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
.post-page {
  max-width: 820px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}
@media (min-width: 768px) { .post-page { padding: 60px 24px 120px; } }

.crumbs {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 13px;
  color: #7c83ab;
  margin-bottom: 28px;
  font-family: "JetBrains Mono", monospace;
}
.crumbs :deep(a) { color: #e8b564; }
.sep { color: #7a7265; }
.current { color: #d6d0c2; }

.eyebrow {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #e8b564;
  margin-bottom: 16px;
}
.post-title {
  font-size: clamp(32px, 4.5vw, 56px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: #fff;
  margin-bottom: 12px;
}
.post-desc {
  color: #bdb5a5;
  font-size: clamp(16px, 1.4vw, 19px);
  line-height: 1.6;
  margin-bottom: 28px;
}
.post-head { margin-bottom: 36px; }

.prose-wrap :deep(.prose) {
  color: #d6d0c2;
}
.prose-wrap :deep(.prose h1),
.prose-wrap :deep(.prose h2),
.prose-wrap :deep(.prose h3),
.prose-wrap :deep(.prose h4) {
  color: #ffffff;
  letter-spacing: -0.02em;
}
.prose-wrap :deep(.prose a) {
  color: #e8b564;
}
.prose-wrap :deep(.prose strong) {
  color: #fff;
}
.prose-wrap :deep(.prose code) {
  color: #e99aad;
  background: rgba(255, 255, 255, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}
.prose-wrap :deep(.prose pre) {
  background: rgba(10, 11, 24, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}
.prose-wrap :deep(.prose blockquote) {
  border-left: 3px solid #e8b564;
  color: #bdb5a5;
}
</style>
