<template>
  <v-row justify="center" align="center" class="my-4">
    <v-col cols="12" sm="6" md="3">
      <v-dialog v-model="dialog" width="400" persistent>
      <v-card :loading="loading">
        <v-card-title class="headlinec">
            Account Activation
        </v-card-title>
        <v-card-text v-if="verified" class="py-0">
          <p class="text-subtitle2">{{message}}</p>
        </v-card-text>
        <v-card-text v-else class="py-0">
          <p class="text-subtitle2">{{message}}</p>
        </v-card-text>
        <v-card-actions v-if="verified">
          <v-spacer />
          <v-btn color="primary" to="/login"> Login </v-btn>
          <v-spacer />
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer />
          <v-btn color="primary" @click="resend"> Resend </v-btn>
          <v-btn color="primary" text to="/login"> Login </v-btn>
          <v-spacer />
        </v-card-actions>
        <v-card-actions>
          
        </v-card-actions>
      </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'VerifyPage',
  layout: 'auth',
    // async asyncData({ $axios, query={} }) {
    //   await console.log(query)
    //     const post = {
    //         cdsjfnbdsjfg: query.token, // actually user
    //         hunaushdyuafr: query.user // actually token
    //     }
    //     const resp = await $axios.post('/app/accounts/verify',post)
    //     console.log(resp.data)
    //     if(resp.data.status !=='200'){
    //       return {verified: false,loading: false, message: resp.data.message}
    //     }
    //     else{
    //       return {verified:true,loading: false, message: resp.data.message}
    //     }
    // },
  //   asyncData ({ query } = {}) {
  //   return { value: query.value };
  // },
  // beforeMount() {
  //   // for hydration
  //   if (this.value !== this.$route.query.value) {
  //     this.value = this.$route.query.value
  //   }
  // },
  data() {
    return {
      verified: false,
      loading: true,
      dialog: true,
      message: '',
      token: '',
      user: ''
    }
  },
  mounted() {
    this.verify()
  },
  methods: {
    async resend() {
      console.log(this.$route)
      const post = {
          cdsjfnbdsjfg: this.$route.query.user,
      }
      const resp = await this.$axios.post('/app/accounts/sendagain',post)
      // console.log(resp.data)
      if(resp.data.status !== '200'){
        // this.$store.commit('showSnack', { message: "Couldn't send Email, Please try again", type: 'error', timeout: 5000 })
        console.log('ne')
      }
      // else{
      //   this.$store.commit('showSnack', { message: "An Email has been successfully sent", type: 'success', timeout: 5000 })
      // }
    },
    async verify() {
      const resp = await this.$axios.post('/app/accounts/verify',{
          cdsjfnbdsjfg: this.$route.query.token, // actually user
          hunaushdyuafr: this.$route.query.user // actually token
      })
      // console.log(resp.data)
      this.loading = false
      this.message = resp.data.message
      if(resp.data.status !=='200'){
        this.verified = false
      }
      else{
        this.verified = true
      }
    },
  }
}
</script>
