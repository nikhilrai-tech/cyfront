<template>
    <div>
        <v-dialog v-model="dialog" width="400" persistent>
            <form @submit.prevent="signup">
            <v-card :loading="loading">
                <!-- <v-card-title v-if="!submitted" class="headlinec">
                    Signup to Cyber3ra
                </v-card-title>
                <v-card-title v-else>
                    Signup Successful
                </v-card-title> -->
                <v-card-title></v-card-title>
                <v-card-actions v-if="!submitted">
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
                <v-card-text v-if="!submitted">
                    <v-text-field v-model="username" placeholder="Username" class="py-0" prepend-inner-icon="mdi-account-circle" outlined />
                    <v-text-field v-model="email" placeholder="Email" class="py-0" prepend-inner-icon="mdi-email" outlined />
                    <v-text-field v-model="name" placeholder="Full Name" class="py-0" prepend-inner-icon="mdi-account" outlined />
                    <v-text-field v-model="password" placeholder="Password" type="password" class="py-0" prepend-inner-icon="mdi-lock" outlined hide-details />
                    <v-checkbox v-model="referred" :label="'Have a Ref Code?'" ></v-checkbox>
                    <v-text-field v-if="referred" v-model="refcode" placeholder="Reference Code" type="password" class="py-0" prepend-inner-icon="mdi-key" outlined hide-details />
                </v-card-text>
                <v-card-text v-else>
                <p class="text-body1">Account Signup Successful. An Email for activation has been sent to your registered Email. Follow the steps provided there.</p>
                </v-card-text>
                <v-card-actions v-if="!submitted">
                <v-spacer />
                <v-btn color="primary" :disabled="loading" type="submit"> Signup </v-btn>
                <v-spacer />
                </v-card-actions>
                <v-card-actions v-if="submitted">
                <v-spacer />
                <v-btn color="primary" to="/login"> Login </v-btn>
                <v-spacer />
                </v-card-actions>
                <v-card-actions v-if="!submitted">
                    <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/login">Login</NuxtLink></p>
                    <v-spacer />
                    <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/forgot-password">Forgot Password</NuxtLink></p>
                </v-card-actions>
            </v-card>
            </form>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'SignupAuth',
    data() {
        return {
            loading: false,
            submitted: false,
            username: '',
            name: '',
            email: '',
            password: '',
            dialog: true,
            referred: false,
            refcode: ''
        }
    },
    methods: {
        async signup() {
            if(this.username.length < 1 || this.email.length < 1 || this.name.length < 1 || this.password.length < 1) {
                this.$store.commit('showSnack', { message: 'Please add everything peoperly', type: 'warning', timeout: 5000 })
                return 0;
            }
            this.loading = true;
            const post = {
                username: this.username,
                name: this.name,
                email: this.email,
                password: this.password,
            }
            if(this.referred) {
                post.refcode = this.refcode
            }
            try {
                const resp = await this.$axios.post('/app/accounts/signup',post);
              //  console.log(resp.data);
                if(resp.data.error){
                    this.loading = false;
                }
                else{
                    this.submitted = true;
                    this.loading = false;
                }
            }
            catch (e) {
                console.log('Error : ',e);
            }
            this.loading = false;
        },
    },
}
</script>