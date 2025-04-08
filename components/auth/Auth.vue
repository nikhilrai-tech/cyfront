<template>
    <div>
        <v-dialog v-model="dsignup" width="400">
            <form @submit.prevent="signup">
            <v-card :loading="loading">
                <!-- <v-card-title v-if="!submitted" class="headlinec">
                    Signup to Cyber3ra
                </v-card-title>
                <v-card-title v-else>
                    Signup Successful
                </v-card-title> -->
                <v-card-title></v-card-title>
                <v-card-actions v-if="!signupvars.submitted">
                    <v-row class="px-0c mx-0">
                        <v-col cols="12" class="text-center d-flex justify-center py-0 px-0c">
                            <!-- <p class="text-caption">or</p> -->
                            <img src="/logo.svg" class="align-self-center" width="50" height="50" />
                        </v-col>
                        <v-col cols="12" class="text-center py-0 px-0c">
                            <p class="text-caption" style="font-family: Monospace !important;">$ whoami </p>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-text v-if="!signupvars.submitted">
                    <v-text-field v-model="signupvars.username" placeholder="Username" class="py-0" prepend-inner-icon="mdi-account-circle" outlined />
                    <v-text-field v-model="signupvars.email" placeholder="Email" class="py-0" prepend-inner-icon="mdi-email" outlined />
                    <v-text-field v-model="signupvars.name" placeholder="Full Name" class="py-0" prepend-inner-icon="mdi-account" outlined />
                    <v-text-field v-model="signupvars.password" placeholder="Password" type="password" class="py-0" prepend-inner-icon="mdi-lock" outlined hide-details />
                    <v-checkbox v-model="signupvars.referred" :label="'Have a Ref Code?'" ></v-checkbox>
                    <v-text-field v-if="signupvars.referred" v-model="signupvars.refcode" placeholder="Reference Code" type="password" class="py-0" prepend-inner-icon="mdi-key" outlined hide-details />
                </v-card-text>
                <v-card-text v-else>
                <p class="text-body1">Account Signup Successful. An Email for activation has been sent to your registered Email. Follow the steps provided there.</p>
                </v-card-text>
                <v-card-actions v-if="!signupvars.submitted">
                <v-spacer />
                <v-btn color="primary" :disabled="loading" type="submit"> Signup </v-btn>
                <v-spacer />
                </v-card-actions>
                <v-card-actions v-if="signupvars.submitted">
                <v-spacer />
                <v-btn color="primary" to="/login"> Login </v-btn>
                <v-spacer />
                </v-card-actions>
                <v-card-actions v-if="!signupvars.submitted">
                    <!-- <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/login">Login</NuxtLink></p> -->
                    <small class="ml-1 point" style="font-size: 0.75rem;color: #58a6ff;" @click="setlogin()">Login</small>
                    <v-spacer />
                    <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/forgot-password">Forgot Password</NuxtLink></p>
                </v-card-actions>
            </v-card>
            </form>
        </v-dialog>
        
        <v-dialog v-model="dlogin" width="400">
            <form @submit.prevent="login">
            <v-card :loading="loginvars.loading">
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
                    <v-text-field v-model="loginvars.username" placeholder="Username" class="py-0" prepend-inner-icon="mdi-account-circle" outlined />
                    <v-text-field v-model="loginvars.password" placeholder="Password" :append-icon="loginvars.showpass ? 'mdi-eye' : 'mdi-eye-off'" :type="loginvars.showpass ? 'text' : 'password'" class="py-0" prepend-inner-icon="mdi-lock" outlined hide-details @click:append="loginvars.showpass = !loginvars.showpass" />
                </v-card-text>
                <v-card-actions>
                <v-spacer />
                <v-btn color="primary" :disabled="loginvars.loading" type="submit"> Login </v-btn>
                <v-spacer />
                </v-card-actions>
                <v-card-actions>
                <small class="ml-1 point" style="font-size: 0.75rem;color: #58a6ff;" @click="setsignup()">Register</small>
                <v-spacer />
                <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/forgot-password">Forgot Password</NuxtLink></p>
                </v-card-actions>
            </v-card>
            </form>
        </v-dialog>

        
        <!-- <v-btn icon small class="mr-1" @click="setlogin()">
            <v-icon>mdi-power</v-icon>
        </v-btn> -->
        <!-- {{mode}}{{mode === 'signup'}}{{dsignup}} -->
    </div>
</template>

<script>
export default {
    name: 'MainAuth',
    props: {
        mode: { type: String, default: 'signup'},
        setlogin: { type: Function, default: ()=> console.log('no function provided') },
        setsignup: { type: Function, default: ()=> console.log('no function provided') },
        close: { type: Function, default: ()=> console.log('no function provided') },
    },
    data() {
        return {
            loading: false,
            dsignup: this.mode === 'signup',
            dlogin: this.mode === 'login',
            signupvars: {
                submitted: false,
                username: '',
                name: '',
                email: '',
                password: '',
                referred: false,
                refcode: ''
            },
            loginvars: {
                username: '',
                password: '',
                loading: false,
                showpass: false
            }
        }
    },
    watch: { 
        dsignup(newVal, oldVal) {
            if(!newVal){
                this.close()
            }
        },
        dlogin(newVal, oldVal) {
            if(!newVal){
                this.close()
            }
        },
      	mode (newVal, oldVal) { 
            this.dsignup = newVal === 'signup';
            this.dlogin = newVal === 'login';
        },
    },
    methods: {
        async signup() {
            if(this.signupvars.username.length < 1 || this.signupvars.email.length < 1 || this.signupvars.name.length < 1 || this.signupvars.password.length < 1) {
                this.$store.commit('showSnack', { message: 'Please add everything peoperly', type: 'warning', timeout: 5000 })
                return 0;
            }
            this.loading = true;
            const post = {
                username: this.signupvars.username,
                name: this.signupvars.name,
                email: this.signupvars.email,
                password: this.signupvars.password,
            }
            if(this.signupvars.referred) {
                post.refcode = this.signupvars.refcode
            }
            try {
                const resp = await this.$axios.post('/app/accounts/signup',post);
              //  console.log(resp.data);
                if(!resp.data.error){
                    this.signupvars.submitted = true;
                    // this.close()
                }
            }
            catch (e) {
                console.log('Error : ',e);
            }
            this.loading = false;
        },
        async login() {
            if (this.loginvars.username.length < 1 || this.loginvars.password.length < 1) {
                this.$store.commit('showSnack', { message: 'Please add everything peoperly', type: 'warning', timeout: 5000 })
                return 0;}
            this.loginvars.loading = true;
            // console.log('aha')
            const post = {
                username: this.loginvars.username,
                password: this.loginvars.password,
            }
            try {
                // const response = await this.$auth.loginWith('local', { data: post })
                
                const response = await this.$axios.post('/app/accounts/login', post)
                // console.log(response.data)
                if(!response.data.error){
                    this.$auth.setUser(response.data.details)
                    // this.$store.commit('LOGIN',response.data.details)
                    await this.$auth.setUserToken(response.data.access_token, response.data.refresh_token);
                    this.close()
                }
                
            } catch (err) {
                console.log(err)
            }
            this.loginvars.loading = false;
        },
    },
}
</script>