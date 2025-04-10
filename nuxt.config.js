import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  
  server : {
    port: 3500,
    host: "0.0.0.0"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - SecuriumX',
    title: "Where Bugs Meet Bounties",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/SECURIUM.svg'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css'}
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css',
    '~/assets/dash.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ { src: '~/plugins/axios', ssr: true },{src: '~/plugins/notifier.js', ssr: false},{ src: '~/plugins/tiptap.js', mode: 'client' }, ], 

  router: {
    middleware: ['router-auth'],
    // scrollBehavior(to) {
    //   if (to.hash) {
    //     return window.scrollTo({
    //       top: document.querySelector(to.hash).offsetTop + window.innerHeight,
    //       behavior: 'smooth'
    //     })
    //   }
    //   return window.scrollTo({ top: 0, behavior: 'smooth' })
    // }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/moment',
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/google-analytics',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
  ],
  loading: {
    color: '#58a6ff',
    height: '3px',
    duration: 3000
  }, 
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://127.0.0.1:8000',
    // baseURL: 'https://cyback.onrender.com',  
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'SecuriumX Bug Bounty Platform',
      short_name: 'SecuriumX',
      lang: 'en',
      description: "Where Bugs Meet Bounties - SecuriumX",
      start_url: "/",
      background_color: '#000',
      theme_color: "#000"
    },
    icon: {
      purpose: []
    }
  },
  layoutTransition: {
    name: 'default',
    mode: 'out-in'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    defaultAssets : {
      font: {
        family: 'Rajdhani' 
      },
    },
    theme: {
      dark : true,
      themes: {
        options: { customProperties: true },
        dark: {
          application: '#ffff00',
          header: '#3739FF',
          footer: '#101721',
          anchor: '#4c98ef',
          background: '#f00',
          primary: '#03CDD7',
          secondary: '#8361da',
          accent: '#0040b9',
          info: '#4c98ef',
          warning: colors.orange.darken3,
          error: colors.deepOrange.accent4,
          success: "#2ead66",
        },
        light: {
          primary: '#03CDD7',
          // secondary: '#fb9678',
          secondary: '#8361da',
          accent: '#0040b9',
          info: '#4c98ef',
        },
        blueish: {
          anchor: '#ff0000'
        }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    splitChunks: {
       layouts: true
    },
    publicPath: '/_cyber3ra/'
  },
  globalName: 'cyber3ra',
  googleAnalytics: {
    // id: 'UA-163821965-4',
    id: 'UA-163821965-3',
    // dev: true,
    // debug: {
    //     enabled: true,
    //     sendHitTask: true
    //   }
  },

  auth: {
    // plugins: [ { src: '~/plugins/axios', ssr: true } ],
    strategies: {
      local: {
        token: {
          prefix: 'access_token.',
          property: 'access_token',
          maxAge: 86400,
          name: 'Authorization',
          type: 'Bearer'
        },
        refreshToken: {
          prefix: 'refresh_token.',
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 86400
        },
        // user: {
        //   property: 'user',
        //   autoFetch: true
        // },
        endpoints: {
          login: {
            url: "/app/accounts/login",
            method: "post",
            propertyName: "token"
          },
          user: {
            url: "/app/accounts/user",
            method: "get",
            propertyName: false,
          },
          tokenRequired: true,
          // authorization: 'https://accounts.google.com/o/oauth2/auth',
          // token: undefined,
          // userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
          logout: {
            url: "/app/accounts/logout",
            method: "get",
          }
        },
        // token: {
        //   property: 'access_token',
        //   type: 'Bearer',
        //   maxAge: 1800
        // },
        // refreshToken: {
        //   property: 'refresh_token',
        //   maxAge: 60 * 60 * 24 * 30
        // },
        options: {
          expires: 1800
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    }
  },
}
