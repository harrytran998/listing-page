const webpack = require('webpack');

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  // head: {
  //   title: 'listing-page',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/base.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
    ['@nuxtjs/axios', { baseURL: 'https://urich-server.herokuapp.com/api/web' }],
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    ['@nuxtjs/fontawesome', {
      component: 'Fa',
      suffix: true
    }],
    '@nuxtjs/netlify-files',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['lodash'],
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
  },
  env: {
    baseUrl: process.env.BASE_URL
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://urich-server.herokuapp.com/api/web',
    proxyHeaders: false,
    credentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json, text/plain, */*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Credentials': true
    },
    proxy: true
  },
  proxy: {
    '/api/': { target: process.env.BASE_URL, pathRewrite: { '^/api/': '' } }
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  script: [
    { src: '/js/fb-sdk.js' }
  ]
}
