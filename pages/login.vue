<template>
  <v-row justify="center" align="center" class="my-4">
    <v-col cols="12" sm="6" md="3">
      <Login />
    </v-col>
  </v-row>
</template>

<script>
import Login from "../components/auth/Login.vue" 
export default {
  name: 'LoginPage',
  components: {
    Login
  },
  layout: 'auth',
  head() {
    return {
      title: 'Login',
    }
  },
}
</script>
