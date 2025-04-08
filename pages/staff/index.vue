<template>
  <div>
    <v-row>
        <v-col cols="12" align="right">
            <v-btn outlined color="success" to="/staff?add" @click="add = true"><v-icon small class="mr-2">mdi-account-plus</v-icon> Add Staff</v-btn>
            </v-col>
    </v-row>

    <v-dialog v-model="add" width="300">
      <form @submit.prevent="addstaff">
        <v-card :loading="loading">
          <v-card-title class="d-flex justify-space-between">
            Add Staff
            <v-btn icon @click="add = false"><v-icon>mdi-close</v-icon></v-btn>
          </v-card-title>
          <v-card-text>
            <v-row class="mt-2">
              <v-col cols="12">
                <v-text-field v-model="usering.email" outlined placeholder="Email" type="email" hide-details required />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="usering.username" outlined placeholder="Username" type="username" hide-details required />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="usering.name" outlined placeholder="Name" type="name" hide-details required />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="usering.password" outlined placeholder="Set Password" type="password" hide-details required />
              </v-col>

            </v-row>
          </v-card-text>
          <v-card-actions class="justify-center pb-4">
            <v-btn outlined color="secondary" type="submit" :disabled="loading">Add</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
    <v-row>
    
      <v-col class="text-centerc" cols="12" sm="12">
        <v-row>
          <v-col v-for="(user,i) in staff" :key="i" class="text-centerc" cols="12" sm="3" >
            <v-card elevation="2" >
              
              <v-list-item three-line :disabled="user.freezed">
                  <v-list-item-avatar size="60">
                      <img v-if="user.photo" :src="$axios.defaults.baseURL+user.photo" :alt="user.name" :style="user.freezed ? 'opacity: 0.5;': null" >
                      <v-icon v-else x-large dark> mdi-account-circle </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                      <v-list-item-title class="mb-4c">{{user.name ? user.name : user.username}} <v-icon v-if="user.verified" color="success" class="ml-1 mt-n1" small>mdi-check-all</v-icon></v-list-item-title>
                      <v-list-item-subtitle class="mb-4c">{{user.email}}</v-list-item-subtitle>
                      <v-list-item-subtitle class="mb-4c">@{{user.username}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <!-- <v-list-item-icon class="d-flex align-center"><v-icon>mdi-star-outline</v-icon></v-list-item-icon> -->
              </v-list-item>

              <v-card-actions v-if="user.verified"><v-spacer />
                <v-btn v-if="user.freezed" text color="success">Unfreeze</v-btn>
                <v-btn v-else text color="error">Freeze</v-btn>
              </v-card-actions>
              <v-card-actions v-else><v-spacer />
                <p class="mb-1 error--text">Not verified</p>
              </v-card-actions>
            </v-card> 
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
export default {
  name: 'UsersPage',
  async asyncData({ store, $axios, app, $nuxt }) {
    // console.log(app.$auth.strategy.token.get())
    try{
      const resp = await $axios.get('/app/accounts/staff', 
        // { headers: {"Authorization" : app.$auth.strategy.token.get()} }
        )
    //  console.log(resp.data)
      return {
        staff: resp.data
      }
    }
    catch(e){
      console.log(e)
      return { staff : [],}
    }
  },
  data() {
    return {
      staff: this.staff,
      locations: this.locations,
      fulltime: false,
      contract: false,
      location: '',
      loading: false,
      usering: {
        name: '',
        password: '',
        username: '',
        email: ''
      },
      add: 'add' in this.$route.query 
      // && this.$route.query.add === true
    }
  },
  head() {
    return {
      title: 'Staffs',
    }
  },
  methods: {
    async addstaff () {
      this.loading = true;
      try {
        const resp = await this.$axios.post('/app/accounts/staff', this.usering)
        if(!resp.data.error){
          this.usering = {
            name: '',
            password: '',
            username: '',
            email: ''
          };
          this.loading = false
          this.add = false
          this.$nuxt.refresh();
        }
      } catch (e) {
        console.log(e)
        this.loading = false
      }
    },
  }
  // watch: {
  //   add(to, from) {
  //     if(from){
  //       this.$router.push('/staff')
  //     }
  //   },
  //   $route(to, from) {
  //     this.add = 'add' in this.$route.query
  //   },
  // }  
  // methods: {
  // }
  // middleware: 'router-auth'
}
</script>
