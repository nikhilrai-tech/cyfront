<template>
  <v-theme-provider>
  <v-app dark class="background">


    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    

    <Snackbar />

    <v-footer :absolute="false" >
      <v-spacer />
      <span>Cyber3ra &copy; {{ new Date().getFullYear() }} </span>
    </v-footer>

  </v-app>
  </v-theme-provider>
</template>

<script>
// import vuetify from 'vuetify';
import Snackbar from "../components/universal/Snackbar.vue"
export default {
  name: 'LoginLayout',
  components: {
    Snackbar
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      title: 'Cyber3ra',
      snackbar: {
          message: 'An Error Occured',
          type: 'error',
          timeout: 6000,
          open: false,
      },
    }
  },
  computed: {
    console: () => console,
    window: () => window,
  },
  // created() {
  //   this.$nuxt.$on('snack', (message,type) => {
  //           this.snackbar.open = true;
  //           this.snackbar.message = message;
  //           this.snackbar.type = type
  //       })
  //   },
}
</script>

<style lang="scss" scoped>
    .background {
        background-image: url('/hack.jpg') ;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        background-attachment: fixed;
    }
        
    @mixin rings($duration, $delay) {
        opacity: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        left: 0px;
        content: '';
        height: 100%;
        width: 100%;
        border: 8px solid rgba(255, 255, 255, 0.753);
        border-radius: 100%;
        animation-name: ripple;
        animation-duration: $duration;
        animation-delay: $delay;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(.65,0,.34,1);
        z-index: -1;
    }

    .logo-wrap {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;  
        // height: 50px;
        // width: 50px;
        border-radius: 100%;
        background: #FFFFFF;
        box-shadow: 0 0 20px 0 rgba(34, 34, 34, 0.603);
        
        &::after {
            @include rings(3s, 0s);
        }
        
        &::before {
            @include rings(3s, 0.5s);
        }
    }


    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale3d(0.75,0.75,1);
        }
        
        to {
            opacity: 0;
            transform: scale3d(1.5,1.5,1);
        }
    }
</style>