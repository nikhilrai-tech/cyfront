<template>
  <v-app dark>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
      <Snackbar></Snackbar>
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "../components/universal/Snackbar.vue"
export default {
  name: 'ErrorLayout',
  components: {
    Snackbar
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    let title = ''
    if(this.error){
       title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    }
    else{
       title = 'Something went wrong'
    }
    return {
      title,
    }
  },
  created() {
    this.$store.commit('clearSnack')
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
