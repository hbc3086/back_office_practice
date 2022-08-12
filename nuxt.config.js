import session from 'express-session';
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "BackOffice",
    meta: [
      { charset: "utf-8" },
      { 
        name: "viewport",
        content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content: "BACK_OFFICE_3",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      //     href: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/allok/img/favicon.ico",
    ]
  },
  css: ["~/static/scss/style.scss", "animate.css"],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  /*
   ** Build configuration
   */

  // serverMiddleware: [
  //   session({
  //     secret: 'super-secret-key',
  //     resave: false,
  //     saveUninitialized: false,
  //     rolling: true,
  //     cookie: { maxAge: 1000 * 60 * 30 },
  //   }),
  //   '~/api/index.js',
  // ],

  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    extractCSS: process.env.NODE_ENV === 'production' ? true : false,
    postcss: {
      plugins: {
        autoprefixer: {
          grid: process.env.NODE_ENV === 'production' ? true : false,
          flexbox: process.env.NODE_ENV === 'production' ? true : false,
        },
      },
    },
  },
  buildModules: ["@nuxt/postcss8"],
  plugins:[
    {
      src: "~plugins/tui-grid.js",
      ssr: false
    }
  ],
}