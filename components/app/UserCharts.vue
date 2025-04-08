<template>
    
    <v-row>
      
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="overview">
          <v-img 
          height="180px" :src="`https://source.unsplash.com/random/440x200/?dark,scenery
          `" style="background-color: #000;" >
          <!-- https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg -->
            <v-app-bar flat color="rgba(0, 0, 0, 0)" >
              <v-toolbar-title class="text-h6c white--text pl-0">Profile Overview</v-toolbar-title>
              <v-spacer />
            </v-app-bar>

            <v-card-title class="white--text mt-4">
              <v-avatar size="60">
                    <img v-if="$auth.user.profile" :src="$auth.user.profile" :alt="$auth.user.name" >
                    <v-icon v-else dark> mdi-account-circle </v-icon>
              </v-avatar>
              <p class="ml-3 mb-0">{{$auth.user.name}}</p>
            </v-card-title>
          </v-img>

          <v-card-text>
            <div class="font-weight-bold ml-4 mb-0">Hacker Account </div>
            <v-card-subtitle class="pb-0">{{$auth.user.email}}</v-card-subtitle>
            <v-card-subtitle v-if="($auth.user.is_staff && $auth.user.refuser)" class="pb-0">Attached to {{$auth.user.refuser.username}}</v-card-subtitle>
            <v-card-subtitle v-if="(!$auth.user.is_staff && $auth.user.refuser)" class="pb-0">Referred {{$auth.user.refuser.username}}</v-card-subtitle>
            <v-card-subtitle v-if="!$auth.user.is_staff" class="pb-0">Reputation: {{$auth.user.totalreputation}}</v-card-subtitle>
            <v-card-subtitle v-if="!$auth.user.is_staff" class="pb-0">Bounties Earned: ₹{{count.bounties}}</v-card-subtitle>
          </v-card-text>
          <v-app-bar flat color="transparent" class="pt-0">
            <v-spacer />
            <v-btn text small color="warning" to="/profile">Go to Profile</v-btn>
          </v-app-bar>
        </v-card>
      </v-col>

      <v-col class="text-centerc" cols="12" sm="6">
        <v-card>
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Overview</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Reports</v-list-item-title>
          </v-card-text>
          <v-card-text class="d-flex justify-center">
            <!-- <v-sparkline :line-width="0.6" :padding="13" :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]" auto-draw >
            </v-sparkline> -->
            <div class="small px-6c" style="width: 100%;"> 
              <!-- <button @click="fillData()">Randomize</button> -->
              <line-chart :chartdata="datacollection"></line-chart>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flexc">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Overview</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Awards</v-list-item-title>
          </v-card-text>
          <v-card-text>
            <awards :awards="awards.indexes" :type="'T'" />
          </v-card-text>
        </v-card>
      </v-col>


      
    </v-row>
</template>


<script>
import Awards from '../universal/Awards.vue'
import LineChart from './LineChart.vue'

export default {
    name: 'UserCharts',
    components: {
      LineChart,
        Awards
    },
    props: {
        count: { type: Object, default() {return { referred: 0, visits: 0, reputation: 0, likes: 0}} },
        awards: { type: Object, default() {return { completion: 0, earned: 0, indexes: [] }} },
        overview: { type: Array, default() {return []} },
    },
    data () {
      return {
        datacollection: {
          labels: this.overview.map(x => this.getMonthName(x)),
          datasets: [
            {
              label: 'Reports',
              backgroundColor: '#0040b932',
              borderColor: '#0040b9',
              data: this.overview.map(x => x.y)
            }
          ],
          max: Math.max.apply(Math, this.overview.map(x => x.y))+3
        }
      }
    },
    // mounted () {
    //   console.log(this.count)
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
      // getRandomInt () {
      //   return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      // },
      getMonthName(num){
        // console.log(moment.monthsShort()[num.date-1])
        // console.log(num.date)
        // console.log(this.$moment(num.date).format("MMM YY"))
        return this.$moment(num.date).format("MMM YY")
      }
    }
}
</script>