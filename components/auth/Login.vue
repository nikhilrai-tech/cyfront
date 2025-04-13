<template>
    <div>
      <v-dialog v-model="dialog" width="400" persistent>
        <form @submit.prevent="login">
          <v-card :loading="loading">
            <v-card-title></v-card-title>
            <v-card-actions>
              <v-row class="px-0 mx-0">
                <v-col cols="12" class="text-center d-flex justify-center py-0 px-0">
                  <img src="/logo.svg" class="align-self-center" width="50" height="50" />
                </v-col>
                <v-col cols="12" class="text-center py-0 px-0">
                  <p class="text-caption" style="font-family: Monospace !important;">$ logname </p>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-text>
              <v-text-field
                v-model="username"
                placeholder="Username"
                class="py-0"
                prepend-inner-icon="mdi-account-circle"
                outlined
              />
              <v-text-field
                v-model="password"
                placeholder="Password"
                :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showpass ? 'text' : 'password'"
                class="py-0"
                prepend-inner-icon="mdi-lock"
                outlined
                hide-details
                @click:append="showpass = !showpass"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" :disabled="loading" type="submit">Login</v-btn>
              <v-spacer />
            </v-card-actions>
            <v-card-actions>
              <p class="text-caption"><NuxtLink class="ml-1 text-inherit" to="/register">Register</NuxtLink></p>
              <v-spacer />
              <p class="text-caption"><NuxtLink class="ml-1 text-inherit" to="/forgot-password">Forgot Password</NuxtLink></p>
            </v-card-actions>
          </v-card>
        </form>
      </v-dialog>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginAuth',
    data() {
      return {
        loading: false,
        username: '',
        password: '',
        showpass: false,
        dialog: true,
      };
    },
    methods: {
      async login() {
        if (this.username.length < 1 || this.password.length < 1) {
          this.$store.commit('showSnack', { message: 'Please fill in all fields', type: 'warning', timeout: 5000 });
          return;
        }
        this.loading = true;
        const post = {
          username: this.username,
          password: this.password,
        };
        try {
          const response = await this.$axios.post('/app/accounts/login', post);
          if (!response.data.error) {
            // Store the tokens
            localStorage.setItem('token', response.data.access_token); // Store the access token
            this.$auth.setUser(response.data.details); // Set user details
            await this.$auth.setUserToken(response.data.access_token, response.data.refresh_token); // Set tokens
            this.$router.push('/'); // Redirect to the home page or dashboard
          }
        } catch (err) {
          console.error(err);
          this.$store.commit('showSnack', { message: 'Login failed. Please check your credentials.', type: 'error', timeout: 5000 });
        }
        this.loading = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .ctf-container {
    min-height: 100vh;
    padding-bottom: 2rem;
  }
  </style>