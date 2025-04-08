<template>
  <div>
    <!-- <v-row>
        <v-col cols="12" align="right">
            <v-btn outlined color="success" to="/staff?add" @click="add = true"><v-icon small class="mr-2">mdi-account-plus</v-icon> Add Staff</v-btn>
            </v-col>
    </v-row> -->

    <v-row justify="center">
    
      <v-col v-if="selected ? false : true" class="text-centerc" cols="12" sm="6">
          <v-card-title>
            <!-- <v-btn v-if="selected" icon to="/inbox" ><v-icon>mdi-arrow-left</v-icon></v-btn> -->
            Public Reports
            </v-card-title>

            <!-- <v-list three-line style="max-height: 600px; overflow-y: scroll;" class="p-0"> -->
              <template v-for="(report, index) in reports">
                <p-rep :key="report.id" :report="report" :index="index" />
              </template>
            <!-- </v-list> -->
      </v-col>
      <v-col v-if="selected" class="text-centerc" cols="12" sm="8">
        <!-- <div id="repo"> -->
            <report :title="selected"></report>
        <!-- </div> -->
      </v-col>
      <!-- <v-col v-else class="text-centerc" cols="12" sm="8">
        <v-card>
          <v-card-title>Report</v-card-title>
          <v-card-text>
            No Report Selected
          </v-card-text>
        </v-card>
      </v-col> -->
    </v-row>
  </div>
  
</template>

<script>
import PRep from '~/components/universal/PRep.vue'
import Report from '~/components/universal/PReport.vue'
export default {
  name: 'UsersPage',
  components: { Report, PRep },
  async asyncData({ store, $axios, app, $nuxt }) {
    // console.log(app.$auth.strategy.token.get())
    try{
      
      if(store.state.auth.loggedIn){
        const resp = await $axios.get('/app/main/publicreports', 
        // { headers: {"Authorization" : app.$auth.strategy.token.get()} }
        )
        return {
          reports: resp.data
        }
      }
      else{
        const resp = await $axios.get('/app/main/apublicreports')
        return {
          reports: resp.data
        }
      }

    //   const resp = await $axios.get('/app/main/publicreports', 
    //     // { headers: {"Authorization" : app.$auth.strategy.token.get()} }
    //     )
    // //  console.log(resp.data)
    //   return {
    //     reports: resp.data
    //   }
    }
    catch(e){
      console.log(e)
      return { reports : [],}
    }
  },
  data() {
    return {
      reports: this.reports,
      title: '',
      loading: false,
      selected: this.$route.query.report,
      comment: {
        desc: ''
      },
      // && this.$route.query.add === true
    }
  },
  head() {
    return {
      title: 'Hacktivity',
      // script: [
      //   {
      //   hid: "rzpay",
      //   src:
      //     "https://checkout.razorpay.com/v1/checkout.js",
      //   defer: true
      // }
      // ]
    }
  },
  watch: {
    // add(to, from) {
    //   if(from){
    //     this.$router.push('/staff')
    //   }
    // },
    $route(to, from) {
      this.selected = this.$route.query.report
    },
    // selected(to, from) {
      // this.scrollToEnd()
    // }
  } ,
  mounted () {
      // this.scrollToEnd()
  },
  methods: {
        // scrollToEnd() {
        //     const container = this.$el.querySelector("#repo");
        //     container.scrollTop = container.scrollHeight;
        // },
  },
  // methods: {
  // }
  // middleware: 'router-auth'
}
</script>
<style scoped>
.v-btn::before {
  background-color: transparent !important;
}
</style>
