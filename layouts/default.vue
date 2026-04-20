<template>
  <div class="layout-root">
    <AnimatedBackground />
    <AppNav />
    <main class="layout-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-root {
  position: relative;
  min-height: 100vh;
  color: #efece5;
  isolation: isolate;
}
.layout-main {
  position: relative;
  z-index: 1;
  padding-top: 88px; /* room for fixed nav */
}
</style>
