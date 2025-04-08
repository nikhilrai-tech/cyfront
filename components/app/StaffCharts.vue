<template>
    
    <v-row>
      
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card>
          <v-card-text>
              <!-- <v-list-item-subtitle class="mb-2">Overview</v-list-item-subtitle> -->
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Overview</v-list-item-title>
          </v-card-text>
          <v-card-text class="d-flexc justify-centerc">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Programs Posted</v-list-item-subtitle>
                <v-list-item-title style="font-size: 40px;" class="info--text">{{count.programs}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-subtitle>Assets In-Scope</v-list-item-subtitle>
                <v-list-item-title style="font-size: 40px;" class="warning--text">{{count.inscope}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-subtitle>Assets Out of Scope</v-list-item-subtitle>
                <v-list-item-title style="font-size: 40px;" class="error--text">{{count.outscope}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="my-5">
              <v-list-item-content>
                <v-list-item-subtitle>Resolved Reports</v-list-item-subtitle>
                <!-- <v-list-item-title>98</v-list-item-title> -->
                <h3 style="font-size: 50px;" class="success--text">{{count.resolved}}</h3>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-subtitle>Bounties Paid</v-list-item-subtitle>
                <h3 style="font-size: 50px;" class="success--text">₹{{count.bounty}}</h3>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Reports Received</v-list-item-subtitle>
                <v-list-item-title style="font-size: 40px;" class="info--text">{{count.reports}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-subtitle>Closed</v-list-item-subtitle>
                <v-list-item-title style="font-size: 40px;" class="warning--text">{{count.closed}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-subtitle>Pending</v-list-item-subtitle>
                <v-list-item-title style="font-size: 40px;" class="error--text">{{count.pending}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>









      <v-col class="text-centerc" cols="12" sm="6">
        <v-card>
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Programs Overview</v-list-item-subtitle>
              <!-- <v-list-item-title style="font-size: 22px;" class="mb-4c">Reports</v-list-item-title> -->
          </v-card-text>
          <v-card-text class="d-flex justify-center py-0">
            <!-- <v-sparkline :line-width="0.6" :padding="13" :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]" auto-draw >
            </v-sparkline> -->
            <div class="small px-6c" style="width: 100%;" > 
              <!-- <button @click="fillData()">Randomize</button> -->
              <line-chart :chartdata="datacollection"></line-chart>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flexc">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Recent Logs</v-list-item-subtitle>
              <!-- <v-list-item-title style="font-size: 22px;" class="mb-4c">Logs</v-list-item-title> -->
          </v-card-text>
          <v-card-text class="px-0 py-4">
            <div class="small px-6c" style="width: 100%;" > 
              <!-- <button @click="fillData()">Randomize</button> -->
              <bar-chart :chartdata="datacollection2"></bar-chart>
            </div>
            <!-- <v-list-item v-for="(log,index) in logs" :key="index">
              <v-list-item-avatar>
                <v-avatar size="75">
                    <img v-if="log.user.profile" :src="log.user.profile" :alt="log.user.name" >
                    <v-icon v-else dark large> mdi-account-circle </v-icon>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title> <nuxt-link :to="`/u/?`+log.user.username"> {{log.user.name}}</nuxt-link></v-list-item-title>
                <v-list-item-subtitle>{{log.desc}} <nuxt-link :to="log.link">{{log.name}}</nuxt-link></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text >{{log.time}} ago</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item> -->
          </v-card-text>
        </v-card>
      </v-col>














      
      <v-col class="text-centerc" cols="12" sm="4">
        <v-card >
          <v-card-text>
              <!-- <v-list-item-subtitle class="mb-2">Recent</v-list-item-subtitle> -->
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Programs</v-list-item-title>
          </v-card-text>

          <v-card-text>
            <v-list-item v-for="(program,index) in programs" :key="index">
              <v-list-item-avatar>
                  <v-icon color="accent"> mdi-note-outline </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{program.title}}</v-list-item-title>
                <v-list-item-subtitle>#{{program.type}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar>
                  <a target="_blank" :href="'/p?'+program.title"><v-icon color="accent" small> mdi-open-in-new </v-icon></a>
              </v-list-item-avatar>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>











      
      <v-col class="text-centerc" cols="12" sm="4">
        <v-card  class="overview">
          <v-img height="220px" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" >
            <v-app-bar flat color="rgba(0, 0, 0, 0)" >
              <v-toolbar-title class="text-h6c white--text pl-0">Profile Overview</v-toolbar-title>
              <v-spacer />
            </v-app-bar>

            <v-card-title class="white--text mt-12">
              <v-avatar size="60">
                    <img v-if="$auth.user.profile" :src="$auth.user.profile" :alt="$auth.user.name" >
                    <v-icon v-else dark> mdi-account-circle </v-icon>
              </v-avatar>
              <p class="ml-3 mb-0">{{$auth.user.name}}</p>
            </v-card-title>
          </v-img>

          <v-card-text class="mt-3">
            <div class="font-weight-bold ml-4 mb-0">Company Account </div>
            <v-card-subtitle class="pb-0">{{$auth.user.email}}</v-card-subtitle>
            <v-card-subtitle v-if="($auth.user.is_staff && $auth.user.refuser)" class="pb-0">Attached to {{$auth.user.refuser.username}}</v-card-subtitle>
            <v-card-subtitle v-if="(!$auth.user.is_staff && $auth.user.refuser)" class="pb-0">Referred {{$auth.user.refuser.username}}</v-card-subtitle>
            <v-card-subtitle class="pb-0">Programs: {{count.programs}}</v-card-subtitle>
          </v-card-text>
          <v-app-bar flat color="transparent" class="pt-0">
            <v-spacer />
            <v-btn text small color="warning" to="/profile">Go to Profile</v-btn>
          </v-app-bar>
        </v-card>
      </v-col>









      <v-col class="text-centerc" cols="12" sm="4">
        <v-card class="d-flexc">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Recent</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Staff</v-list-item-title>
          </v-card-text>
          <v-card-text class="px-0 py-4">
            <v-list-item v-for="(user,index) in staff" :key="index">
              <v-list-item-avatar>
                <v-avatar size="75">
                    <img v-if="user.profile" :src="user.profile" :alt="user.name" >
                    <v-icon v-else dark large> mdi-account-circle </v-icon>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title> <nuxt-link :to="`/u/?`+user.username"> {{user.name}}</nuxt-link></v-list-item-title>
                <v-list-item-subtitle>@{{user.username}} </v-list-item-subtitle>
              </v-list-item-content>
              <!-- <v-list-item-content> style="flex-grow: 4;"
                <v-btn :to="`/u/?`+user.username" outlined color="error" small>View</v-btn>
              </v-list-item-content> -->
              <v-list-item-action>
                <v-list-item-action-text >{{user.joined}}</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>


      
    </v-row>
</template>


<script>
import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'

export default {
    name: 'CompanyCharts',
    components: {
      LineChart,
      BarChart
    },
    props: {
        count: { type: Object, default() {return { referred: 0, visits: 0, reports: 0, programs: 0, inscope: 0, outscope: 0, resolved: 0, bounty: 5000, closed: 0, pending: 0 }} },
        overview: { type: Object, default() {return { programs: [], reports: [], }} },
        staff: { type: Array, default() {return []} },
        programs: { type: Array, default() {return []} },
    },
    data () {
      return {
        datacollection: {
          labels: this.overview.programs.map(x => this.getMonthName(x)),
          datasets: [
            {
              label: 'Programs',
              backgroundColor: '#0040b932',
              borderColor: '#0040b9',
              data: this.overview.programs.map(x => x.y)
            }
          ],
          max: Math.max.apply(Math, this.overview.programs.map(x => x.y))+3
        },
        datacollection2: {
          labels: this.overview.reports.map(x => this.getMonthName(x)),
          datasets: [
            {
              label: 'Reports',
              backgroundColor: '#BA1366',
              borderColor: '#BA1366',
              data: this.overview.reports.map(x => x.y)
            }
          ],
          max: Math.max.apply(Math, this.overview.reports.map(x => x.y))+3
        }
      }
    },
    // mounted () {
    //   console.log(this.overview)
    // },
    methods: {
      // fillData () {
      //   this.datacollection = {
      //     labels: [this.getRandomInt(), this.getRandomInt()],
      //     datasets: [
      //       {
      //         label: 'Data One',
      //         backgroundColor: '#f87979',
      //         data: [7, 23,27]
      //       }, {
      //         label: 'Data Two',
      //         backgroundColor: '#a743f2',
      //         data: [6,25,4]
      //       }
      //     ]
      //   }
      // },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      getMonthName(num){
        // console.log(moment.monthsShort()[num.date-1])
        // console.log(num.date)
        // console.log(this.$moment(num.date).format("MMM YY"))
        return this.$moment(num.date).format("MMM YY")
      }
    }
}
</script>