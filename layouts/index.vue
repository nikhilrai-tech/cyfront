<template>
  <v-theme-provider>
  <v-app dark :ripple="false" class="index">

    <div v-if="$nuxt.isOffline" style="background-color: #000000eb;width: 100vw; height: 100vh; z-index: 4300;  position: absolute; display: flex; justify-content: center; align-items: center; flex-direction: column;">
      <h1 style="font-family: Segoe UI !important;"> OOPS</h1>
      <br>
      <p> You're Offline</p>
    </div>
    <v-app-bar fixed app>
      
      <nuxt-link to="/"><logo :type="'auto'" :size="'small'" :speed="'medium'" /></nuxt-link>

      <v-spacer />

      <!-- <Auth :mode="mode" :setlogin="setlogin" :setsignup="setsignup" :close="close" /> -->
      <client-only>
        <span v-if="!$auth.loggedIn">
          <NewAuth />
        </span>
        <span v-else>

        </span>

      <!-- {{mode}} -->
      <span v-if="$auth.loggedIn">
      <v-menu v-if="$auth.loggedIn" bottom offset-y >
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" small class="mr-1" v-on="on" >
          <v-avatar size="30">
            <img v-if="$auth.user.profile" :src="$auth.user.profile" :alt="$auth.user.name" >
            <v-icon v-else dark> mdi-account-circle </v-icon>
          </v-avatar>
          </v-btn>
        </template>

        <v-list >

          <v-list-item :key="0" >
            <!-- <v-list-item-avatar class="margin-r">
              <v-avatar size="30">
                <img v-if="$auth.user.profile" :src="$auth.user.profile" >
                <v-icon v-else dark> mdi-account-circle </v-icon>
              </v-avatar>
            </v-list-item-avatar> -->
            <v-list-item-content>
              <v-list-item-title>{{$auth.user.name}}</v-list-item-title>
              <v-list-item-subtitle>{{$auth.user.username}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <v-list-item :key="1" :to="'/profile'">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item :key="2" :to="'/dashboard'">
            <v-list-item-title>Go to App</v-list-item-title>
          </v-list-item>

          <v-list-item :key="3" @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-list-item-title>Toggle Theme</v-list-item-title>
          </v-list-item>

          <v-divider />

          <v-list-item :key="4" @click.stop="$auth.strategy.token.reset();window.location.reload()">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>
      </span>
      <!-- <v-menu v-else bottom offset-y >
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" small class="mr-1" v-on="on" >
          <v-icon>mdi-power</v-icon>
          </v-btn>
        </template>

        <v-list>

          <v-list-item :key="1" @click="setlogin">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item :key="2" @click="setsignup">
            <v-list-item-title>Signup</v-list-item-title>
          </v-list-item>

          <v-list-item :key="3" @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-list-item-title>Toggle Theme</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu> -->
      <nuxt-link v-else to="?action=login">
        <v-btn icon small class="mr-1">
          <v-icon>mdi-power</v-icon>
        </v-btn>
      </nuxt-link>
      </client-only>
    </v-app-bar>
    
    <v-main>
      <v-container fluid >
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="false" >
      <span>SecuriumX &copy; {{ new Date().getFullYear() }} </span>
    </v-footer>


    <Snackbar />

  </v-app>
  </v-theme-provider>
</template>

<script>
// import vuetify from 'vuetify';
import dark from "../assets/img/dark-bg.png";
import light from "../assets/img/light-bg.png";
// import Auth from "../components/auth/Auth.vue";
import NewAuth from "../components/auth/NewAuth.vue";
import Snackbar from "../components/universal/Snackbar.vue";
import Logo from "../components/universal/Logo.vue";

export default {
  name: 'DefaultLayout',
  components: {
    // Auth, 
    Snackbar, Logo, 
    NewAuth
  },
  data() {
    return {
      darkb: dark,
      lightb: light,
      mode: null
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.$vuetify.theme.dark ? 'dark-theme' : 'light-theme',
      }
    }
  },
  computed: {
    console: () => console,
    window: () => window,
    body: () => document.body,
  },
  created() {
    this.$nuxt.$on('setsignup', (message,type) => {
      this.setsignup()
        })
    this.$store.commit('clearSnack')
  },
  beforeMount() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
        if (theme === "true") {
            this.$vuetify.theme.dark = true;
            this.darktheme = true;
        } else {
            this.$vuetify.theme.dark = false;
        }
    }
  },
  methods: {
    setlogin() {
      this.mode = 'login'
      return 0;
    },
    setsignup() {
      this.mode = null
      this.mode = 'signup'
      // console.log('setting signup......')
      // console.log(this.mode)
      return 0;
    },
    close() {
      this.mode = null;
      return 0;
    }
  },
}
</script>

<style scoped>
body.dark {
  background: #050e1d;
}
</style>