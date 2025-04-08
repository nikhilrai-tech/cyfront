<template>
  <v-snackbar v-model="show" :color="color" :timeout="timeout">
    {{ message }}
    <template #action="{ attrs }">
        <v-btn
          color="white"
          icon
          v-bind="attrs"
          @click="show = false"
        >
          <v-icon small>mdi-close</v-icon>
        </v-btn>
    </template>
    <!-- <v-btn icon @click="show = false"><v-icon>mdi-close</v-icon></v-btn> -->
  </v-snackbar>
</template>

<script>
export default {
    name: 'SnackbarComponent',
  data () {
    return {
      show: false,
      message: '',
      color: '',
      timeout: 7000
    }
  },
  mounted() {
      // console.log('h')
      // console.log(this.$store.state)
        this.message = this.$store.state.message
        this.color = this.$store.state.type
        this.show = this.$store.state.show
        this.timeout = this.$store.state.timeout
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'showSnack') {
        //   console.log(state)
        this.message = state.message
        this.color = state.type
        this.show = state.show
        this.timeout = state.timeout
      }
    })
  }
}
</script>