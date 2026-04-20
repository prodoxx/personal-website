<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog").sort({ date: -1 }).find()
);

function getPostPreview(post: any): string {
  if (post.description) {
    return post.description;
  }
  if (typeof post.body === "string") {
    return post.body.substring(0, 160) + "...";
  }
  if (post.body && post.body.children) {
    const textContent = post.body.children
      .filter((child: any) => child.type === "text")
      .map((child: any) => child.value)
      .join(" ");
    return textContent.substring(0, 160) + "...";
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
  <div class="post-list" v-if="posts && posts.length">
    <article
      v-for="(post, i) in posts"
      :key="post._path"
      class="post-item glass a-fadeUp"
      :style="{ animationDelay: (i * 0.05) + 's' }"
    >
      <p class="post-date">{{ formatDate(post.date) }}</p>
      <h2 class="post-title">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </h2>
      <p class="post-preview">{{ getPostPreview(post) }}</p>
      <NuxtLink :to="post._path" class="post-more link-magnetic">
        Read article <span class="arr">→</span>
      </NuxtLink>
    </article>
  </div>
  <div v-else class="empty">
    <p class="eyebrow">// No posts yet</p>
    <p>Check back soon.</p>
  </div>
</template>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.post-item {
  padding: 22px 24px;
  border-radius: 16px;
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}
.post-item:hover {
  transform: translateX(4px);
  border-color: rgba(224, 108, 135, 0.35);
  background: rgba(224, 108, 135, 0.04);
}
.post-date {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #e8b564;
  margin-bottom: 10px;
}
.post-title {
  font-size: clamp(20px, 2.5vw, 26px);
  font-weight: 600;
  letter-spacing: -0.015em;
  margin-bottom: 8px;
}
.post-title :deep(a) {
  color: #fff;
  transition: color 0.2s ease;
}
.post-title :deep(a:hover) {
  color: #e8b564;
}
.post-preview {
  color: #bdb5a5;
  font-size: 14px;
  line-height: 1.65;
  margin-bottom: 14px;
}
.post-more {
  color: #e8b564;
  font-size: 13px;
  font-weight: 500;
}
.post-item:hover .arr { transform: translateX(4px); }
.arr { display: inline-block; transition: transform 0.3s ease; margin-left: 2px; }

.empty {
  padding: 40px;
  text-align: center;
  border-radius: 16px;
  border: 1px dashed rgba(255, 255, 255, 0.12);
  color: #bdb5a5;
}
.empty .eyebrow {
  font-family: "JetBrains Mono", monospace;
  color: #e8b564;
  letter-spacing: 0.2em;
  font-size: 11px;
  margin-bottom: 6px;
}
</style>
