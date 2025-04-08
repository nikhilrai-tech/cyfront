<template>
  <v-row justify="center" align="center" class="my-4">
    <v-col cols="12" sm="6" md="3">
      <v-dialog v-model="dialog" width="400" persistent>
            <v-card >
                <v-card-title></v-card-title>
                <v-card-actions>
                    <v-row class="px-0c mx-0">
                        <v-col cols="12" class="text-center d-flex justify-center py-0 px-0c">
                            <!-- <p class="text-caption">or</p> -->
                            <img src="/logo.svg" class="align-self-center" width="50" height="50" />
                        </v-col>
                        <v-col cols="12" class="text-center py-0 px-0c">
                            <p class="text-caption" style="font-family: Monospace !important;">$ passwd </p>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-text v-if="!submitted">
                    <form @submit.prevent="forgot" >
                        <v-col cols="12" class="text-center pb-0 px-0c">
                            <v-text-field v-model="username" placeholder="Username/Email" class="py-0" prepend-inner-icon="mdi-account-circle" outlined />
                        </v-col>
                        <v-col cols="12" class="text-center py-0 px-0c">
                            <v-btn type="submit" class="align-self-center" :disabled="loading" color="primary">Submit</v-btn>
                        </v-col>
                    </form>
                </v-card-text>
                <v-card-text v-else>
                    <p class="text-body1">An Email has been sent to registered Email with Password reset link.</p>
                </v-card-text>
                <v-card-actions>
                    <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/login">Login</NuxtLink></p>
                    <v-spacer />
                    <p class="text-caption"><a class="ml-1 text-inherit" href="/forgot-password">Forgot Password</a></p>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
// import Register from "../../components/auth/Register.vue" 
export default {
    name: 'ForgotPasswordPage',
    layout: 'auth',
    data() {
        return {
            loading: false,
            submitted: false,
            username: '',
            dialog: true,
        }
    },
    head() {
        return {
        title: 'Reset Password',
        }
    },
    methods: {
        async forgot() {
            if(this.username.length < 1) {
                this.$store.commit('showSnack', { message: 'Please add Username or Email', type: 'warning', timeout: 5000 })
                return 0;
            }
            this.loading = true;
            try {
                const resp = await this.$axios.get('/app/accounts/forgotsend/'+this.username);
                // console.log(resp.data);
                if(resp.data.error){
                    this.loading = false;
                }
                else{
                    this.submitted = true;
                    this.loading = false;
                }
            }
            catch (e) {
                // console.log('Error : ',e);
            }
            this.loading = false;
        },
    },
}
</script>
