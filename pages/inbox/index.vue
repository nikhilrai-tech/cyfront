<template>
  <div>
    <!-- <v-row>
        <v-col cols="12" align="right">
            <v-btn outlined color="success" to="/staff?add" @click="add = true"><v-icon small class="mr-2">mdi-account-plus</v-icon> Add Staff</v-btn>
            </v-col>
    </v-row> -->

    <v-row>
    
      <v-col v-if="selected ? $vuetify.breakpoint.width > 561 : true" class="text-centerc" cols="12" sm="4">
        <v-card>
          <v-card-title>
            <!-- <v-btn v-if="selected" icon to="/inbox" ><v-icon>mdi-arrow-left</v-icon></v-btn> -->
            Inbox
            </v-card-title>
          <v-card-text class="reports-list p-0">
            <v-list three-line style="max-height: 600px; overflow-y: scroll;" class="p-0">
              <template v-for="(report, index) in reports">


                <v-list-item :key="report.id" :to="'/inbox?report='+report.id" :active="selected == report.id" :class="`severity2 s2-${report.severity}`" @click="title = report.title" >
                  <v-list-item-avatar>
                    <v-img v-if="report.photo" :src="$axios.defaults.baseURL+report.photo"></v-img>
                  <v-icon v-else size="50" class="rounded-circle"> mdi-account-circle </v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >{{report.user.name}}</v-list-item-title>
                    <v-list-item-subtitle >{{report.title}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text >{{report.posted}} ago</v-list-item-action-text>
                    <!-- <v-list-item-action-text > -->
                    <!-- </v-list-item-action-text> -->
                    <!-- <v-card-text class="d-flex align-center"></v-card-text> -->
                  </v-list-item-action>
                </v-list-item>
                <v-divider :key="index" :inset="true" ></v-divider>
                
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="selected" class="text-centerc" cols="12" sm="8">
        <!-- <div id="repo"> -->
            <report :title="selected"></report>
        <!-- </div> -->
      </v-col>
      <v-col v-else class="text-centerc" cols="12" sm="8">
        <v-card>
          <v-card-title>Report</v-card-title>
          <v-card-text>
            No Report Selected
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
import Report from '~/components/universal/Report.vue'
export default {
  name: 'UsersPage',
  components: { Report },
  async asyncData({ store, $axios, app, $nuxt }) {
    // console.log(app.$auth.strategy.token.get())
    try{
      const resp = await $axios.get('/app/main/getreports', 
        // { headers: {"Authorization" : app.$auth.strategy.token.get()} }
        )
    //  console.log(resp.data)
      return {
        reports: resp.data.reports
      }
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
      }
      // && this.$route.query.add === true
    }
  },
  head() {
    return {
      title: 'Inbox',
      script: [
        {
        hid: "rzpay",
        src:
          "https://checkout.razorpay.com/v1/checkout.js",
        defer: true
      }
      ]
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
