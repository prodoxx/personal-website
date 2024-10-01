// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-gtag", "@nuxt/content"],
  gtag: {
    enabled: process.env.NODE_ENV === "production",
    id: "G-LZRLE3P50T",
  },
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
  app: {
    head: {
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
    },
  },
});
