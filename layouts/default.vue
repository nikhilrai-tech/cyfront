<template>
  <v-theme-provider theme="light">
  <v-app :dark="darktheme" class="header default" >

    <div v-if="$nuxt.isOffline" style="background-color: #000000eb;width: 100vw; height: 100vh; z-index: 4300;  position: absolute; display: flex; justify-content: center; align-items: center; flex-direction: column;">
      <h1 style="font-family: Segoe UI !important;"> OOPS</h1>
      <br>
      <p> You're Offline</p>
    </div>
    <Navbar :drawerb="drawer" />

    <v-app-bar fixed app elevate-on-scroll>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.width < 561" @click="drawer = true;$store.commit('openNav')"></v-app-bar-nav-icon>

      <div style="width: 350px;" class="mt-7c">
        <v-autocomplete
            v-model="select" :loading="sloading" :items="sitems" :search-input.sync="search" append-icon="" flat hide-no-data hide-details item-text="query" item-value="link"
            placeholder="Search Anything" dense filled rounded clearable>
          <template #item="{ index ,item }">
            <v-list-item :key="index" class="d-flex" :to="item.link" @click="search = null">
                <div >{{ item.query }}</div>
            </v-list-item>
          </template>
        </v-autocomplete>
      </div>


      <!-- <v-btn router :to="'/login'">Login</v-btn>
            
       -->
      
      <v-spacer />

      <Noti v-if="$auth.loggedIn" :notis="notifications" :del="deleteread" :load="loading" :refresh="refr" />

      <v-menu v-if="$auth.loggedIn" bottom offset-y >
        <template #activator="{ on, attrs }">
          <v-btn small icon v-bind="attrs" class="mr-1" v-on="on" >
          <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>

          <v-list-item :key="1" router :to="'/profile'">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item :key="2" router :to="'/'" >
            <v-list-item-title>Landing Page</v-list-item-title>
          </v-list-item>

          <!-- <v-list-item :key="3" @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-list-item-title>Toggle Theme</v-list-item-title>
          </v-list-item> -->

          <v-list-item :key="4" @click.stop="$fetch();$nuxt.refresh();">
            <v-list-item-title>Refresh Page</v-list-item-title>
          </v-list-item>

          <!-- <v-list-item :key="5" @click="showstore">
            <v-list-item-title>Store</v-list-item-title>
          </v-list-item> -->
          <v-divider />

          <v-list-item :key="6" @click.stop="$auth.strategy.token.reset();$auth.logout();">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>
      <template v-else>
      <v-btn small icon class="mr-1" @click.stop="$fetch();$nuxt.refresh();" >
      <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn small icon class="mr-1" to="/?action=login" >
      <v-icon>mdi-power</v-icon>
      </v-btn>
      </template>
    </v-app-bar>

    <v-main style="padding-top: 65px !important;">
      <v-container fluid>
        <Nuxt />
      </v-container>
      <client-only>
        <div v-if="welcome">
          <Welcome :display="welcome" />
        </div>
      </client-only>
    </v-main>


    <v-footer :absolute="false" >
      <v-spacer />
      <span>SecuriumX &copy; {{ new Date().getFullYear() }} </span>
    </v-footer>

    <Snackbar />
  </v-app>
  </v-theme-provider>
</template>

<script>
// import vuetify from 'vuetify';
import Noti from "../components/universal/Noti.vue"
import Snackbar from "../components/universal/Snackbar.vue"
import Welcome from "../components/universal/Welcome.vue"
import Navbar from "../components/app/Navbar.vue"
export default {
  name: 'AppLayout',
  components: {
    Noti, Snackbar, Navbar, 
    Welcome
  },
  data() {
    return {
      loading: true,
      colors: ['primary','secondary','accent','warning','info','teal','pink','cyan','purple','lime','indigo','blue-grey'],
      notifications: [],
      drawer: this.$vuetify.breakpoint.width > 561,
      darktheme: false,
      neon: false,
      sloading: false,
      sitems: [],
      search: null,
      select: null,
      queries: [
        {query: 'How to add a Profile Picture', link: '/profile'},
      ],
      welcome: false,
    }
  },
  async fetch() {
      // await console.log('fetching ... notifications')
      if(this.$auth.loggedIn){
      try{
          const resp = await this.$axios.get('/app/user/notifications', 
              // { headers: {"Authorization" : this.$auth.strategy.token.get()} }
              )
        //  console.log(resp.data)
          this.notifications = resp.data
          this.loading = false
      }
      catch(e){
          console.log(e)
          this.notifications = [] 
          this.loading = false
      }
      }
  },
  head () {
    return {
      bodyAttrs: {
        class: `${this.$vuetify.theme.dark ? 'theme-dark' : 'theme-light'} `,
        neon: `${this.neon ? 'true' : 'false'}`
      }
    }
  },
  fetchKey: 'site-sidebar',
  computed: {
    console: () => console,
    window: () => window,
  },
  watch: {
    async $route(to, from) {
      await this.$fetch()
      this.checkthemes()
    },
    search (val) {
      // console.log('entered ',val)
      val && val !== this.select && this.querySelections(val);
      if(val){
        if(val.length < 1){
          // console.log('cleared')
          this.sitems = []
        }
      }
      else{
          this.sitems = []
      }
    },
  },
  beforeMount() {
    this.checkthemes()
  },
  mounted() {
    // const newuser = localStorage.getItem("new_user");
    // console.log(newuser)
    // localStorage.setItem("new_user","true")
    // console.log(this.$nuxt.isOffline)
    this.checkthemes()
  },
  created() {
    this.$nuxt.$on('refresh', () => {this.refr();this.$nuxt.refresh()})
    this.$store.commit('clearSnack') 
    // const newuser = localStorage.getItem("new_user");
    // console.log(newuser)
    // localStorage.setItem("new_user","true")
  },
  methods: {
    checkthemes() {
      this.neon = localStorage.getItem('neon')==="true";
      // console.log(localStorage.getItem('neon'))
      const theme = localStorage.getItem("dark_theme");
      if (theme) {
          if (theme === "true") {
              this.$vuetify.theme.dark = true;
              this.darktheme = true;
          } else {
              this.$vuetify.theme.dark = false;
          }
      }
      const newuser = localStorage.getItem("new_user");
      console.log(newuser)
      if (!newuser) {
          if (this.$auth.loggedIn && !this.$auth.user.is_staff) {
            this.welcome = true
          }
      }
    },
    querySelections (v) {
      this.loading = true
      setTimeout(() => {
        // console.log(this.queries)
        this.sitems = this.queries.filter(e => {
          // console.log((e.query || '').toLowerCase().includes((v || '').toLowerCase()) > -1)
          try{
            return (e.query || '').toLowerCase().includes((v || '').toLowerCase())
          }
          catch(e){
            console.log(e)
            return false
          }
        })
        // console.log(this.sitems)
        this.loading = false
      }, 500)
    },
    async deleteread() {
      this.loading = true
        try{
            const resp = await this.$axios.post('/app/user/notifications', {}
                // { headers: {"Authorization" : this.$auth.strategy.token.get()} }
                )
          //  console.log(resp.data)
            this.notifications = resp.data
            this.loading = false
        }
        catch(e){
            console.log(e)
            this.notifications = []
            this.loading = false
        }
    },
    refr (){
      this.$fetch()
    }
  },
}
</script>