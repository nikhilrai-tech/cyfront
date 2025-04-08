<template>
    <div>
        <v-dialog v-model="dialog" width="400" persistent>
      <form @submit.prevent="login">
      <v-card :loading="loading">
        <!-- <v-card-title class="headlinec">
            Login to Cyber3ra
        </v-card-title> -->
        <v-card-title></v-card-title>
        <v-card-actions>
            <v-row class="px-0c mx-0">
                <v-col cols="12" class="text-center d-flex justify-center py-0 px-0c">
                    <!-- <p class="text-caption">or</p> -->
                    <img src="/logo.svg" class="align-self-center" width="50" height="50" />
                </v-col>
                <v-col cols="12" class="text-center py-0 px-0c">
                    <p class="text-caption" style="font-family: Monospace !important;">$ logname </p>
                </v-col>
                <!-- <v-col cols="12" class="text-center pt-0 px-0c">
                    <v-btn color="red" :disabled="loading" @click="loginWithGoogle">  <v-icon left dark > mdi-google </v-icon> Plus </v-btn>
                    <v-btn color="light-blue" :disabled="loading" @click="loginWithFacebook">  <v-icon left dark > mdi-facebook </v-icon> Facebook </v-btn>
                    <v-btn color="black" :disabled="loading" @click="loginWithGithub" >  <v-icon left dark > mdi-github </v-icon> Github </v-btn>
                </v-col> -->
            </v-row>
        </v-card-actions>
        <v-card-text>
            <v-text-field v-model="username" placeholder="Username" class="py-0" prepend-inner-icon="mdi-account-circle" outlined />
            <v-text-field v-model="password" placeholder="Password" :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'" :type="showpass ? 'text' : 'password'" class="py-0" prepend-inner-icon="mdi-lock" outlined hide-details @click:append="showpass = !showpass" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" :disabled="loading" type="submit"> Login </v-btn>
          <v-spacer />
        </v-card-actions>
        <v-card-actions>
          <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/register">Register</NuxtLink></p>
          <v-spacer />
          <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/forgot-password">Forgot Password</NuxtLink></p>
        </v-card-actions>
      </v-card>
      </form>
        </v-dialog>
    </div>
</template>

<script>
// import image from ""
export default {
    name: 'LoginAuth',
    data() {
        return {
            loading: false,
            submitted: false,
            username: '',
            password: '',
            showpass: false,
            dialog: true
        }
    },
    methods: {
        async login() {
            if (this.username.length < 1 || this.password.length < 1) {
            this.$store.commit('showSnack', { message: 'Please add everything peoperly', type: 'warning', timeout: 5000 })
            return 0;}
            this.loading = true;
            // console.log('aha')
            const post = {
                username: this.username,
                password: this.password,
            }
            try {
                // const response = await this.$auth.loginWith('local', { data: post })
                
                const response = await this.$axios.post('/app/accounts/login', post)
                // console.log(response.data)
                if(!response.data.error){
                    // console.log('hi')
                    this.$auth.setUser(response.data.details)
                    // this.$store.commit('LOGIN',response.data.details)
                    await this.$auth.setUserToken(response.data.access_token, response.data.refresh_token)
                }
                
            } catch (err) {
                console.log(err)
            }
            this.loading = false;
        },
        // async loginWithGoogle() {
        //     // const response = await window.open('https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?protocol=oauth2&response_type=code&access_type&client_id=271137054231-afbtg791lqsr2r087qqu2vi75kajst5b.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3500%2Flogin&scope=openid%20profile%20email%20profile%20email&state=fquYUi9Cwm&code_challenge_method&prompt=select_account&flowName=GeneralOAuthFlow')
        //     const response = await this.$auth.loginWith("google", { params: { prompt: "select_account" } })
        //     // console.log(response)
        //   //  console.log(response)
        // },
        // async loginWithGithub() {
        //     const response = await this.$auth.loginWith("github")
        //     // console.log(response)
        //   //  console.log(response)
        // },
        // async loginWithFacebook() {
        //     const response = await this.$auth.loginWith("facebook")
        //   //  console.log(response)
        // },
    },
}
</script>