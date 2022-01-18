import colors from 'vuetify/es5/util/colors';

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        // titleTemplate: '%s - nft-plus-studio',
        title: 'Reggie Escobar',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: "Hi, I'm Reggie. A software engineer from Belize.",
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content:
                    'reggie escobar, belize software engineer, belize tech, belizean programmer, belize fintech expert, belizean software developer',
            },
            { name: 'format-detection', content: 'telephone=no' },
            {
                name: 'msapplication-TileColor',
                content: '#da532c',
            },
            {
                name: 'theme-color',
                content: '#000000',
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:url',
                content: 'https://reggieescobar.com',
            },
            {
                property: 'og:title',
                content: 'Reggie Escobar',
            },
            {
                property: 'og:description',
                content: "Hi, I'm Reggie. A software engineer from Belize.",
            },
            {
                property: 'og:image',
                content:
                    'https://firebasestorage.googleapis.com/v0/b/misc-a3aff.appspot.com/o/selfie.png?alt=media&token=087cd180-a785-4139-a08a-e01efde967c1',
            },
            {
                property: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                property: 'twitter:url',
                content: 'https://reggieescobar.com',
            },
            {
                property: 'twitter:title',
                content: 'Reggie Escobar',
            },
            {
                property: 'twitter:description',
                content: "Hi, I'm Reggie. A software engineer from Belize.",
            },
            {
                property: 'twitter:image',
                content:
                    'https://firebasestorage.googleapis.com/v0/b/misc-a3aff.appspot.com/o/selfie.png?alt=media&token=087cd180-a785-4139-a08a-e01efde967c1',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'apple-touch-icon',
                type: '180x180',
                href: '/apple-touch-icon.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png',
            },
            {
                rel: 'manifest',
                href: '/site.webmanifest',
            },
            {
                rel: 'mask-icon',
                href: '"/safari-pinned-tab.svg',
                color: '#5bbad5',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/google-fonts',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    googleFonts: {
        families: {
            Poppins: [100, 300, 400, 500, 600, 700, 800, 900],
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
