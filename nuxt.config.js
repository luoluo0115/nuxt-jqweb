module.exports = {
    /*
    ** Server configuration
    */
  /*
  ** Environment variable configuration
  */
  env: {
    baseUrl: 'https://qjz.jiqiao.tech'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'jqweb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '上海机巧科技' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_1893753_5frrxdov2n.css' }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    // your settings here
    // sass: [],
    // scss: [],
    // stylus: [],
    less: ['~/assets/css/variables.less'],
  },
  axios: {
    proxy: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
    },
    credentials: true
  },
  proxy: {
    '/api': {
      target: 'https://qjz.jiqiao.tech',
      pathRewrite: { 'https://qjz.jiqiao.tech': 'https://qjz.jiqiao.tech' },
      changeOrigin:true
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    { src: '~/assets/css/index.less' },
    { src: '~/assets/css/iconfont.css' },
  ],
  plugins: [
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/filters.js', ssr: true },
    { src: '~/plugins/api-repositories.js', ssr: true },
    { src: '~/plugins/api.js', ssr: true },
    { src: '~/plugins/storeCache', ssr: false },
    { src: '~/plugins/directive/focus/index.js', ssr: false },
    { src: '~/plugins/directive/loading/index.js', ssr: false },
    { src: '~/plugins/element-ui.js', ssr: true },
    { src: '~/plugins/head.js', ssr: true },
    { src: '~/plugins/vue-swiper.js', ssr: false },
    
  ],
  /*
  ** Build configuration
  */
  build: {
    /**
     * 将查看源代码中的css采用外部引入方式
     */
    extractCSS: {
      allChunks: true
    },
    vendor: ['element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

