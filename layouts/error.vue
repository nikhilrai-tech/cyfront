<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <div>
      <v-btn to="/" @click="$store.commit('clearSnack')"> Home page </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'errorl',
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
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
