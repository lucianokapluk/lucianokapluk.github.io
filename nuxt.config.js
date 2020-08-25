
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
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet",  href: "css/animate.css"},
      { rel: "stylesheet",  href: "css/bootstrap.css"},
      { rel: "stylesheet",  href: "css/bootstrap.min.css"},
      { rel: "stylesheet",  href: "css/owl.theme.css"},
      { rel: "stylesheet",  href: "css/owl.carousel.css"},
      { rel: "stylesheet",  href: "fonts/font-awesome/css/font-awesome.css"},
      { rel: "stylesheet",  href: "css/style.css"},
      { rel: "stylesheet",  href: "css/responsive.css"},
      { rel: "stylesheet",  href: "fonts/font-awesome/css/font-awesome.css"},
      
    ]
  },
  /*
  ** Global CSS
  */
 serverMiddleware: [
  { path: '/api/send', handler: '~/api/sendEmail' },
],
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

  ],

  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  env: {
    BASE_URL: 'https://lucianokapluk.github.io',

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
  generate: {
    dir: 'docs'
  }
}
