<template>
  <v-row>
    <v-col class="text-centerc">
      <v-card class="settings">
        <v-card-title>App Settings</v-card-title>
        <v-card-text>
          <!-- <v-tooltip top><template #activator="{ on, attrs }"> -->
            <v-switch v-model="neon" :label="'Neon Effect'" @change="toggleNeon" ></v-switch>
            <!-- </template>
          <span :v-if="!dark">You can only turn on for Dark Theme</span></v-tooltip> -->
            <br>
          <v-switch
            v-model="dark" :label="'Dark Theme'" @change="toggleDark" 
           
          ></v-switch>
          <!-- {{$auth.neon}} -->
        </v-card-text>

          <v-card-title>User Manual</v-card-title>
          <v-card-text>
            <v-btn text><a href="/usermanual.pdf" download="User Manual" style="color: inherit; text-decoration: none;">Download</a></v-btn>
            <br>
            <br>
            <v-btn color="primary" class="pl-0c" text @click="newuser">Take a Tour <v-icon>mdi-chevron-right</v-icon></v-btn>
          </v-card-text>

          <v-card-title>Account</v-card-title>
          <v-card-text>
            <v-btn color="error" @click="change1 = !change1">Change Email</v-btn>
          </v-card-text>
          <v-card-text>
            <v-btn color="warning" @click="change2 = !change2" >Change Username</v-btn>
          </v-card-text>
          
          <v-card-title>Help</v-card-title>
          <v-card-text>
            <v-btn color="error" to="/contact" outlined>Contact Admin</v-btn>
          </v-card-text>

          <v-dialog v-model="change1" width="300">
            
            <form @submit.prevent="newemail.step ? changeEmail() : checkEmail()">
            <v-card :loading="loading">
              <v-card-title class="headlinec">
                  Change Email
              </v-card-title>
              <v-card-text v-if="!newemail.step" class="py-0">
              <v-card-subtitle>Let's check if we have valid Email Address</v-card-subtitle>
              <v-list-item>
                <v-list-item-content class="px-1 mt-1">
                  <v-text-field v-model="newemail.email" outlined  placeholder="New Email" />
                </v-list-item-content>
              </v-list-item>
              </v-card-text>
              <v-card-text v-else>
                <v-card-subtitle>Please enter password to change the Email</v-card-subtitle>
                <v-list-item>
                  <v-list-item-content class="px-1">
                    <v-text-field v-model="newemail.password" outlined placeholder="Enter Password" hide-details />
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
              <v-card-actions class="pb-5">
                  <v-spacer />
                  <v-btn :disabled="loading" color="primary" type="submit">{{newemail.step ? 'Change' : 'Check'}}</v-btn>
                  <v-spacer />
              </v-card-actions>
            </v-card>
            </form>
          </v-dialog>

          <v-dialog v-model="change2" width="300">
            
            <form @submit.prevent="newusername.step ? changeUsername() : checkUsername()">
            <v-card :loading="loading">
              <v-card-title class="headlinec">
                  Change Username
              </v-card-title>
              <v-card-text v-if="!newusername.step" class="py-0">
              <v-card-subtitle>Let's check if we have valid Username</v-card-subtitle>
              <v-list-item>
                <v-list-item-content class="px-1 mt-1">
                  <v-text-field v-model="newusername.username" outlined  placeholder="New Username" />
                </v-list-item-content>
              </v-list-item>
              </v-card-text>
              <v-card-text v-else>
                <v-card-subtitle>Please enter password to change the Username</v-card-subtitle>
                <v-list-item>
                  <v-list-item-content class="px-1">
                    <v-text-field v-model="newusername.password" outlined placeholder="Enter Password" hide-details />
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
              <v-card-actions class="pb-5">
                  <v-spacer />
                  <v-btn :disabled="loading" color="primary" type="submit">Change</v-btn>
                  <v-spacer />
              </v-card-actions>
            </v-card>
            </form>
          </v-dialog>




      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      // email: '',
      // password: '',
      change1: false,
      change2: false,
      loading: false,
      neon: false,
      dark: false,
      newemail: {
        step: false,
        email: '',
        password: '',
        done: false
      },
      newusername: {
        step: false,
        email: '',
        password: '',
        done: false
      },
    }
  },
  head() {
    return {
      title: 'Settings',
    }
  },
  mounted() {
    this.neon = localStorage.getItem("neon") === "true";
    this.dark = localStorage.getItem("dark_theme") === "true";
  },
  methods: {
    async checkEmail () {
      this.loading = true
      console.log('dxhfbh')
      try{
        const resp = await this.$axios.post('/app/user/checkemail',{email: this.newemail.email})
        // console.log(resp.data)
        if(!resp.data.error){
          this.newemail.step = true
        }
        this.loading = false
      }
      catch(e){
        console.log(e)
        this.loading = false
      }
    },
    async changeEmail () {
      this.loading = true
      try{
        const resp = await this.$axios.post('/app/user/changeemail',{email: this.newemail.email,password: this.newemail.password})
        // console.log(resp.data)
        if(!resp.data.error){
          this.change1 = false
          this.newemail = {
            step: false,
            email: '',
            password: '',
            done: false
          }
        }
        this.loading = false
      }
      catch(e){
        console.log(e)
        this.loading = false
      }
    },
    async checkUsername () {
      this.loading = true
      try{
        const resp = await this.$axios.post('/app/user/checkusername',{username: this.newusername.username})
        // console.log(resp.data)
        if(!resp.data.error){
          this.newusername.step = true
        }
        this.loading = false
      }
      catch(e){
        console.log(e)
        this.loading = false
      }
    },
    async changeUsername () {
      this.loading = true
      try{
        const resp = await this.$axios.post('/app/user/changeusername',{username: this.newusername.username,password: this.newusername.password})
        // console.log(resp.data)
        if(!resp.data.error){
          this.change2 = false
          this.newusername = {
            step: false,
            email: '',
            password: '',
            done: false
          }
        }
        this.loading = false
      }
      catch(e){
        console.log(e)
        this.loading = false
      }
    },
    newuser () {
      localStorage.removeItem('new_user');
      window.location.href = '/dashboard'
    },
    toggleNeon () {
      // this.$store.commit('TOGGLE_NEON')
      // // const cookie = useCookie()
      // this.$auth.$storage.setUniversal('neon', true)
      // console.log(this.neon)
      localStorage.setItem("neon", this.neon.toString());
      const bodyElement = document.querySelector('body')
      bodyElement.setAttribute("neon",this.neon ? "true": "false")
      // this.neon ? bodyElement.classList.add('neon') : bodyElement.classList.remove('neon');
    },
    toggleDark () {
      this.dark = !this.$vuetify.theme.dark
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      // console.log(this.$vuetify.theme.dark)
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  }
}
</script>
