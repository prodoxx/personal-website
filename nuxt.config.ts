// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-gtag"],
  gtag: {
    enabled: process.env.NODE_ENV === "production",
    id: "G-LZRLE3P50T",
  },
  css: ["~/assets/css/main.css"],
});
