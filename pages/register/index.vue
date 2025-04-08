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
                            <p class="text-caption" style="font-family: Monospace !important;">$ who </p>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-text >
                    <v-row class="px-0c mx-0">
                        <v-col cols="6" class="" >
                            <v-card router to="/register/hacker"> 
                                <v-card-title class="mb-2"><v-icon large>mdi-account-tie</v-icon></v-card-title>
                                <v-card-subtitle>I'm a Hacker</v-card-subtitle>
                            </v-card>
                        </v-col>
                        <v-col cols="6" class="" >
                            <v-card router to="/register/company">
                                <v-card-title class="mb-2"><v-icon large>mdi-domain</v-icon></v-card-title>
                                <v-card-subtitle>I'm a Company</v-card-subtitle>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/login">Login</NuxtLink></p>
                    <v-spacer />
                    <p class="text-caption"><NuxtLink class="ml-1 text-inherit" router to="/forgot-password">Forgot Password</NuxtLink></p>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
// import Register from "../../components/auth/Register.vue" 
export default {
  name: 'RegisterPage',
  layout: 'auth',
  data () {
      return {
          dialog: true,
      }
  },
  head() {
    return {
      title: 'Register',
    }
  },
}
</script>
