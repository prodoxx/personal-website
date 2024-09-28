<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";

const textWrapper = ref<HTMLSpanElement | null>(null);
const textElement = ref<HTMLSpanElement | null>(null);
const svgViewBox = ref("0 0 0 0");
const circlePath = ref("");

const createCirclePath = () => {
  if (!textElement.value || !textWrapper.value) return;

  const rect = textElement.value.getBoundingClientRect();
  const padding = 1; // Adjust padding as needed

  const width = rect.width + padding * 2;
  const height = rect.height + padding * 50;

  svgViewBox.value = `0 0 ${width} ${height}`;

  const centerX = width / 2;
  const centerY = height / 2;

  circlePath.value = `
    M ${padding},${centerY}
    Q ${padding},${padding} ${centerX},${padding}
    T ${width - padding},${centerY}
    Q ${width - padding},${height / 2} ${centerX},${height / 2}
    T ${padding},${centerY}
  `;
};

onMounted(() => {
  nextTick(() => {
    createCirclePath();
  });
});
</script>

<style scoped>
.handwritten-circle {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>

<template>
  <div class="container mx-auto px-4 pt-10 md:py-8">
    <h1 class="text-5xl font-bold mb-16 text-center md:text-left">Reggie Escobar</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <p class="text-3xl mb-6 leading-tight">
          I'm a
          <span class="relative inline-block" ref="textWrapper">
            <span class="relative z-10 px-1 rounded" ref="textElement">software engineer</span>
            <svg class="absolute inset-x-0 -top-1/4" :viewBox="svgViewBox" xmlns="http://www.w3.org/2000/svg">
              <path class="handwritten-circle" :d="circlePath" fill="none" stroke="#3b82f6" stroke-width="2" />
            </svg>
          </span>
          who builds immersive and user-friendly
          <span class="relative inline-block">
            applications
            <svg class="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path d="M0 8 Q 25 0, 50 8 T 100 8" fill="none" stroke="#F87171" stroke-width="4" />
            </svg>
          </span>
          that users love.
        </p>
        <p class="text-xl text-gray-600 mb-8">
          Check out what <a href="#" class="underline">I'm writing in my blog</a>, find me on
          <a href="https://x.com/_reggieescobar" class="underline">Twitter</a>, or on
          <a href="https://www.linkedin.com/in/reggie-escobar/" class="underline">LinkedIn</a>, or just
          <a href="mailto:contact@reggieescobar.com" class="underline">send me an email</a> saying hi or if you want to
          hire me for a project.
        </p>
      </div>
      <div class="flex justify-center items-center">
        <img src="/images/reggie.png" alt="Reggie Escobar" class="max-w-full h-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.handwritten-circle {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: draw 2s forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
