

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  router: {
    base: '/'
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Luciano Kapluk - Software developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Luciano Kapluk - Software developer', name: 'Luciano Kapluk - Software developer Flutter', content: "Luciano Kapluk - Software developer flutter developer, react native , freelance, code" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/codigo (1).png' },
      { rel: "stylesheet",  href: "css/animate.css"},
      { rel: "stylesheet",  href: "css/bootstrap.css"},
      { rel: "stylesheet",  href: "css/bootstrap.min.css"},
      { rel: "stylesheet",  href: "css/owl.theme.css"},
      { rel: "stylesheet",  href: "css/owl.carousel.css"},
      { rel: "stylesheet",  href: "fonts/font-awesome/css/font-awesome.css"},
      { rel: "stylesheet",  href: "css/style.css"},
      { rel: "stylesheet",  href: "css/responsive.css"},  
    ]
  },
  /*
  ** Global CSS
  */

  css: [
  ],
  script: [
    { src: "js/modernizr.custom.js"},
    { src: "js/owl.carousel.js"},
    ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  env: {
  /*   BASE_URL: 'https://lucianokapluk.github.io', */
    BASE_URL: 'https://afternoon-basin-01987.herokuapp.com',

  },
  /*
  ** Nuxt.js modules
  */
  modules: [
  
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
 build: {
 
  },

  optimization: {
    minimize: true,
  },

  generate: {
    dir: 'docs',
  
  
  }
}
