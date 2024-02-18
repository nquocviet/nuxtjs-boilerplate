// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: false,
    layoutTransition: false,
  },
  vite: {
    css: {},
  },
  css: ["~/assets/css/main.css", "~/assets/css/utility.css"],
  modules: ["nuxt-icon", "@nuxt/image"],
  postcss: {
    plugins: {
      autoprefixer: {
        grid: true,
      },
    },
  },
  devtools: { enabled: true },
});
