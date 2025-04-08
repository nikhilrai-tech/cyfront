<template>
  <div>
    <!-- {{$auth.user.is_staff}}, {{$auth.user.is_company}} -->
    <h2>Contact Admin</h2>
    <v-row>
      <v-col cols="12" sm="4">
      <Contact />
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
import Contact from "../components/universal/Contact.vue";
export default {
  name: 'ContactPage',
  components: {
    Contact
  },
  // data() {
  //   return {
  //     count: { referred: 0, visits: 39, reputation: 12, likes: 45 },
  //     awards: { completion: 35, earned: 6, }
  //   }
  // },
  head() {
    return {
      title: 'Contact Admin',
    }
  },
  // middleware: 'router-auth'
}
</script>
