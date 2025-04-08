<template>
  <v-row justify="center" align="center" class="my-4">
    <v-col cols="12" sm="6" md="3">
      <Register :route="true" />
    </v-col>
  </v-row>
</template>

<script>
import Register from "../../components/auth/Register.vue" 
export default { 
  name: 'HackerSignupPage',
  components: {
    Register
  },
  layout: 'auth',
  head() {
    return {
      title: 'Sign Up',
    }
  },
}
</script>
