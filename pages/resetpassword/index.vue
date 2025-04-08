<template>
  <v-row justify="center" align="center" class="my-4">
    <v-col cols="12" sm="6" md="3">
      <v-dialog v-model="dialog" width="400" persistent>
      <form @submit.prevent="resetpass">
      <v-card :loading="loading">
        <v-card-title class="headlinec">
            Reset Password
        </v-card-title>
        <!-- <div v-if="error">
          <v-card-text class="py-0">
            <p class="text-subtitle2">Link Expired. Please try again.</p>
          </v-card-text>
        </div>
        <div v-else> -->
          <v-card-text v-if="reset" class="py-0">
            <p class="text-subtitle2">Password Reset Successfull, You may Login now</p>
          </v-card-text>
          <v-card-text v-else class="pb-0">
            <v-text-field v-model="password" type="password" placeholder="New Password" outlined required />
            <v-text-field v-model="password2" type="password" placeholder="Re-enter New Password" outlined required />
          </v-card-text>
        <!-- </div> -->
        <v-card-actions v-if="reset">
          <v-spacer />
          <v-btn color="primary" to="/login"> Login </v-btn>
          <v-spacer />
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer />
          <v-btn color="primary" type="submit"> Set </v-btn>
          <v-spacer />
        </v-card-actions>
        <v-card-actions>
          
        </v-card-actions>
      </v-card>
      </form>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'VerifyPage',
  layout: 'auth',
    // async asyncData({ $axios, query }) {
    //   // await console.log(query)
    //     const post = await {
    //         cdsjfnbdsjfg: query.token, // actually user
    //         hunaushdyuafr: query.user, // actually token
    //         password: ''
    //     }
    //     // const resp = await $axios.post('/app/accounts/verify',post)
    //     // // console.log(resp.data)
    //     // if(resp.data.error){
    //     //   return {verified: false,loading: false}
    //     // }
    //     // else{
    //       return {data: post}
    // },
  data() {
    return {
      reset: false,
      loading: false,
      dialog: true,
      message: '',
      password: '',
      password2: '',
    }
  },
  methods: {
    async resetpass() {
      if(this.password !== this.password2){
        this.$store.commit('showSnack', { message: "Passwords do not match", type: 'error', timeout: 5000 })
        return 0;
      }
      this.loading = true;
      const post = {
          cdsjfnbdsjfg: this.$route.query.token,
          hunaushdyuafr: this.$route.query.user,
          password: this.password
      }
      console.log(this.$route)
      try{
        const resp = await this.$axios.post('/app/accounts/forgotpassword',post)
        // console.log(resp.data)
        if(resp.data.error){
          this.$store.commit('showSnack', { message: resp.data.message, type: 'error', timeout: 5000 })
          this.loading = false
        }
        else{
          this.$store.commit('showSnack', { message: "Password reset successful", type: 'success', timeout: 5000 })
          this.loading = false
          this.reset = true
        }
      }
      catch(e){
        console.log(e)
      }
    }
  }
}
</script>
