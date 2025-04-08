<template>
  <div>


      
    <v-row>
      

      <!-- <v-col v-for="(user, i) in users.total.slice(0,3)" :key="i" class="text-centerc" cols="12" sm="3">
        <v-card style="border-left: 5px solid #6A1B9A">
            <v-card-title class="pb-0">#{{i+1}}</v-card-title>
            <v-list-item three-line>
                <v-list-item-avatar size="45">
                    <img v-if="user.photo" :src="$axios.defaults.baseURL+user.photo" alt="user.photo" >
                    <v-icon v-else x-large dark> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="mb-4c">{{user.name ? user.name : user.username}}</v-list-item-title>
                    <v-list-item-subtitle class="mb-4c">@{{user.username}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon class="d-flex align-center" style="font-size: 25px;">{{user.totalreputation}}</v-list-item-icon>
            </v-list-item>
            <v-divider />
            <v-list-item three-line class="py-2">
                <v-spacer />
                <v-chip color="primary" >Master</v-chip>
            </v-list-item>
        </v-card>
      </v-col> -->
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card  style="border: 1px solid #4c98ef">
            <v-card-title style="color: #4c98ef;" class="pb-0">#2</v-card-title>
            <v-list-item three-line>
                <v-list-item-avatar size="45">
                    <img v-if="users.total[1].photo" :src="$axios.defaults.baseURL+users.total[1].photo" :alt="users.total[1].name" >
                    <v-icon v-else color="#4c98ef" x-large dark> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title style="color: #4c98ef;" class="mb-4c">{{users.total[1].name ? users.total[1].name : users.total[1].username}}</v-list-item-title>
                    <v-list-item-subtitle style="color: #4c98ef;" class="mb-4c">@{{users.total[1].username}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon class="d-flex align-center" style="font-size: 25px; color: #4c98ef;">{{users.total[1].totalreputation}}</v-list-item-icon>
            </v-list-item>
            <v-divider />
            <v-list-item three-line class="py-2">
                <v-spacer />
                <v-chip color="#4c98ef" >Elite</v-chip>
            </v-list-item>
        </v-card>
      </v-col>
      <v-col class="text-centerc" cols="12" sm="3"> <!-- // 66BB6A -->
        <v-card :color="$vuetify.theme.dark ? '#4c98ef' : 'rgb(192 221 255)'" :style="`border: 2px solid ${$vuetify.theme.dark ? '#4c98ef' : 'rgb(151 188 231'}`">
            <v-card-title class="pb-0">#1</v-card-title>
            <v-list-item three-line>
                <v-list-item-avatar size="45">
                    <img v-if="users.total[0].photo" :src="$axios.defaults.baseURL+users.total[0].photo" :alt="users.total[0].name" >
                    <v-icon v-else x-large dark> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="mb-4c">{{users.total[0].name ? users.total[0].name : users.total[0].username}}</v-list-item-title>
                    <v-list-item-subtitle class="mb-4c">@{{users.total[0].username}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon class="d-flex align-center" style="font-size: 25px;">{{users.total[0].totalreputation}}</v-list-item-icon>
            </v-list-item>
            <v-divider />
            <v-list-item three-line class="py-2">
                <v-spacer />
                <v-chip outlined color="white" >Master</v-chip>
            </v-list-item>
        </v-card>
      </v-col>
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card style="border: 1px solid #8361da">
            <v-card-title class="pb-0" style="color: #8361da;">#3</v-card-title>
            <v-list-item three-line>
                <v-list-item-avatar size="45">
                    <img v-if="users.total[2].photo" :src="$axios.defaults.baseURL+users.total[2].photo" :alt="users.total[2].name" >
                    <v-icon v-else color="#8361da" x-large dark> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title style="color: #8361da;" class="mb-4c">{{users.total[2].name ? users.total[2].name : users.total[2].username}}</v-list-item-title>
                    <v-list-item-subtitle style="color: #8361da;" class="mb-4c">@{{users.total[2].username}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon class="d-flex align-center" style="font-size: 25px;color: #8361da;">{{users.total[2].totalreputation}}</v-list-item-icon>
            </v-list-item>
            <v-divider />
            <v-list-item three-line class="py-2">
                <v-spacer />
                <v-chip color="#8361da" >Master</v-chip>
            </v-list-item>
        </v-card>
      </v-col>
      <v-col class="text-right" cols="12" sm="3">
        <v-card flat class="pb-4">
            <v-card-subtitle class="pb-1">Total Competitors</v-card-subtitle>
            <v-card-title class="mb-3c justify-end" style="font-size: 55px;">{{users.comps}}</v-card-title>
            <v-card-text><small style="color: red;">You can only compete in leaderboards if you verified your email</small></v-card-text>
        </v-card>
      </v-col>
      
      <v-col class="text-centerc" cols="12" sm="6">
        <v-card>
             <!-- color="#0097A7c" -->
                <v-card-title class="mb-3c justify-space-between" ><p class="mb-0">Highest Reputation</p> <v-btn text class="align-self-end">View All</v-btn></v-card-title>
                <v-simple-table class="hovertrans">
                <thead>
                    <tr>
                        <th class="text-left">Rank</th>
                        <th class="text-left">User</th>
                        <th class="text-left">Reputation</th>
                        <th class="text-left">Profile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, i) in users.total" :key="user.username">
                        <td>{{i+1}}</td>
                        <td>
                            <User :user="user" >
                              <div>
                                  <nuxt-link :to="`/u/?${user.username}`" style="color: inherit;">
                                  <div class="d-inline-flex align-center point hover-trans">
                                      <v-avatar size="25" class="mr-2 mt-n2c">
                                          <img v-if="user.photo" :alt="user.name" :src="$axios.defaults.baseURL+user.photo" >
                                          <v-icon v-else > mdi-account-circle </v-icon>
                                      </v-avatar>
                                      <v-list-item-content class="d-inline-block">
                                          <!-- <v-list-item-title class="d-inline-block mt-2c" v-text="user.name ? user.name : user.username">

                                          </v-list-item-title> -->
                                          {{user.name ? user.name : user.username}}
                                      </v-list-item-content>
                                  </div>
                                  </nuxt-link>
                              </div>
                            </User>
                        </td>
                        <td>{{ user.totalreputation }}</td>
                        <td>
                            <v-btn small text color="secondary" router :to="`/u/?${user.username}`">View</v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card>
      </v-col>



      <v-col class="text-centerc" cols="12" sm="3">
        <v-row>

          <v-col class="text-centerc" cols="12">
            <v-card >
              <v-list-item three-line>
                <v-list-item-content class="pb-5">
                  <v-list-item-title class="mb-4">Your Rank</v-list-item-title>
                  <v-progress-linear :value="((users.comps-users.rank+1)/users.comps)*100" color="primary"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-icon >{{users.rank}}</v-list-item-icon>
              </v-list-item>
              <v-divider />
              <v-card-actions>
                <v-btn rounded text small color="primary" router to="/jobs">View Inbox</v-btn>
                  <v-spacer />
                <v-btn rounded text small color="primary" router to="/jobs">View Programs</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col class="text-centerc" cols="12">
            <v-card >
              <v-list-item three-line>
                <v-list-item-content class="pb-5">
                    <v-list-item-title class="mb-4">Your Reputation</v-list-item-title>
                  <v-progress-linear :value="awards.earned*10" color="warning"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-icon >{{users.reputation}}</v-list-item-icon>
              </v-list-item>
            </v-card>
          </v-col>
          
          <v-col class="text-centerc" cols="12">
            <v-card >
              <v-list-item three-line>
                <v-list-item-content class="pb-5">
                    <v-list-item-subtitle class="mb-2">Current Badge</v-list-item-subtitle>
                    <v-list-item-title class="mb-5">Novice</v-list-item-title>
                  <v-progress-linear :value="awards.earned*10" color="info"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-icon ><v-icon x-large>mdi-seal-variant</v-icon></v-list-item-icon>
              </v-list-item>
            </v-card>
          </v-col>
          
          <v-col class="text-centerc" cols="12">
            <v-card >
              <v-list-item three-line>
                <v-list-item-content class="pb-5">
                    <v-list-item-subtitle class="mb-2">Overview</v-list-item-subtitle>
                    <v-list-item-title class="mb-5">Novice</v-list-item-title>
                  <!-- <v-progress-linear :value="awards.earned*10" color="info"></v-progress-linear> -->
                </v-list-item-content>
                <!-- <v-list-item-icon ><v-icon x-large>mdi-seal-variant</v-icon></v-list-item-icon> -->
              </v-list-item>
                <v-sparkline :line-width="0.6" :padding="13" :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]" auto-draw >
            </v-sparkline>
            </v-card>
          </v-col>

        </v-row>
      </v-col>
      
      
      
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flexc">
                <v-card-title class="mb-3c justify-space-between" ><p class="mb-0">Top Programs</p> <v-btn text class="align-self-end">View All</v-btn></v-card-title>
                <v-simple-table class="hovertrans">
                <thead>
                    <tr>
                        <th class="text-left">Company</th>
                        <th class="text-left">Type</th>
                        <th class="text-left">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="prog in users.programs" :key="prog.title">
                        <td>
                            <User :user="prog.posted_by" >
                              <div>
                                  <nuxt-link :to="`/u/?${prog.posted_by.username}`" style="color: inherit;">
                                  <div class="d-inline-flex align-center point hover-trans">
                                      <v-avatar size="25" class="mr-2 mt-n2c">
                                          <img v-if="prog.posted_by.photo" :alt="prog.posted_by.name" :src="$axios.defaults.baseURL+prog.posted_by.photo" >
                                          <v-icon v-else > mdi-account-circle </v-icon>
                                      </v-avatar>
                                      <v-list-item-content class="d-inline-block">
                                          <!-- <v-list-item-title class="d-inline-block mt-2c" v-text="user.name ? user.name : user.username">

                                          </v-list-item-title> -->
                                          {{prog.posted_by.name ? prog.posted_by.name : prog.posted_by.username}}
                                      </v-list-item-content>
                                  </div>
                                  </nuxt-link>
                              </div>
                            </User>

                            <!-- <v-avatar size="25" class="mr-2 mt-n2c">
                                <img v-if="prog.posted_by.photo" :alt="prog.posted_by.name" :src="$axios.defaults.baseURL+prog.posted_by.photo" >
                                <v-icon v-else > mdi-account-circle </v-icon>
                            </v-avatar>
                            {{ prog.posted_by.name ? prog.posted_by.name : prog.posted_by.username }} -->
                        </td>
                        <td>{{ prog.type }}</td>
                        <td>
                            <v-btn small depressed color="primary" :to="'/p/?'+prog.title">View</v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card>
      </v-col>
      
      
      
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flexc">
                <v-card-title class="mb-3c justify-space-between" ><p class="mb-0">Referral Based</p> <v-btn text class="align-self-end">View All</v-btn></v-card-title>
                <v-simple-table class="hovertrans">
                <thead>
                    <tr>
                        <th class="text-left">Rank</th>
                        <th class="text-left">User</th>
                        <th class="text-left">Referred</th>
                        <!-- <th class="text-left">Details</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user,i) in users.referral" :key="user.username">
                        <td>{{i+1}}</td>
                        <td>
                            <v-avatar size="25" class="mr-2">
                                <img v-if="user.photo" :alt="user.name" :src="$axios.defaults.baseURL+user.photo" >
                                <v-icon v-else > mdi-account-circle </v-icon>
                            </v-avatar>
                            {{ user.name ? user.name : user.username }}
                        </td>
                        <td>{{ user.refreputation }}</td>
                        <!-- <td>
                            <v-btn small depressed color="primary">Details</v-btn>
                        </td> -->
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card>
      </v-col>
      
      
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flexc">
                <v-card-title class="mb-3c justify-space-between" ><p class="mb-0">Upvotes</p> <v-btn text class="align-self-end">View All</v-btn></v-card-title>
                <v-simple-table class="hovertrans">
                <thead>
                    <tr>
                        <th class="text-left">Rank</th>
                        <th class="text-left">User</th>
                        <th class="text-left">Upvotes</th>
                        <!-- <th class="text-left">Details</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user,i) in users.upvotes" :key="user.username">
                        <td>{{i+1}}</td>
                        <td>
                            <v-avatar size="25" class="mr-2">
                                <img v-if="user.photo" :alt="user.name" :src="$axios.defaults.baseURL+user.photo" >
                                <v-icon v-else > mdi-account-circle </v-icon>
                            </v-avatar>
                            {{ user.name ? user.name : user.username }}
                        </td>
                        <td>{{ user.upvotereputation }}</td>
                        <!-- <td>
                            <v-btn small depressed color="primary">Details</v-btn>
                        </td> -->
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card>
      </v-col>


      <!-- <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flex">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Profile</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Visits</v-list-item-title>
          </v-card-text>
          <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{count.visits}}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flex">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Realtime</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Reputation Count</v-list-item-title>
          </v-card-text>
          <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{count.reputation}}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flex">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Profile</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Likes</v-list-item-title>
          </v-card-text>
          <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{count.likes}}</v-card-subtitle>
        </v-card>
      </v-col> -->



      
    </v-row>


  </div>
  
</template>

<script>
import User from "../../components/universal/User.vue"
export default {
  name: 'LeaderBoardsPage',
  components: {
      User
  },
  async asyncData({ store, $axios, app }) {
    // console.log(app.$auth.strategy.token.get())
    try{
      const resp = await $axios.get('/app/accounts/repusers', 
        { headers: {"Authorization" : app.$auth.strategy.token.get()} }
        )
      // console.log(resp.data)
      return {
        users: resp.data
      }
    }
    catch(e){
      console.log(e)
      return { users : []}
    }
  },
  data() {
    return {
      // extra: this.extra,
      awards: { completion: 35, earned: 6, },
      names: [
          {name: 'vivek',rep: '13'},
          {name: 'yash',rep: '12'},
          {name: 'vighnesh',rep: '9'},
          {name: 'ashish',rep: '6'},
          {name: 'adarsh',rep: '5'},
      ],
      users: this.users,
      // companies: [
      //     {username: 'realogy',name: 'Reology',title: 'Vulnerability Disclosure Program', photo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFXI6T1QMYb5w/company-logo_200_200/0/1594998610143?e=2159024400&v=beta&t=gPNiDc2GwHXTo8Qqp9N9vgCzVbFOqGWD4SRRHenjIbc'},
      //     {username: 'redis',name: 'Redis',title: 'Bug Bounty Program', photo: 'https://cdn.worldvectorlogo.com/logos/redis.svg'},
      //     {username: 'payoneer',name: 'Payoneer',title: 'Bug Bounty Program', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIr9jIRQ7CYqDqyIkX1je9YuCISewmKtwfxDuMCFxqrphP30PIeiER1-qJAWma7atk1fU&usqp=CAU'},
      //     {username: 'costco',name: 'Costco',title: 'Vulnerability Disclosure Program', photo: 'https://cdn.worldvectorlogo.com/logos/redis.svg'},
      //     {username: 'tenable',name: 'Tenable',title: 'Vulnerability Disclosure Program', photo: 'https://cyber3ra.com/logo.png'},
      //     {username: 'amazon',name: 'Amazon',title: 'Bug Bounty Program', photo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFXI6T1QMYb5w/company-logo_200_200/0/1594998610143?e=2159024400&v=beta&t=gPNiDc2GwHXTo8Qqp9N9vgCzVbFOqGWD4SRRHenjIbc'},
      //     {username: 'opensea',name: 'OpenSea',title: 'Vulnerability Disclosure Program', photo: 'https://cdn.worldvectorlogo.com/logos/redis.svg'},
      //     {username: 'cyber3ra',name: 'Cyber3ra',title: 'Bug Bounty Program', photo: 'https://cyber3ra.com/logo.png'},
      //     {username: 'krisp',name: 'Krisp',title: 'Bug Bounty Program', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIr9jIRQ7CYqDqyIkX1je9YuCISewmKtwfxDuMCFxqrphP30PIeiER1-qJAWma7atk1fU&usqp=CAU'},
      //     {username: 'horizen',name: 'Horizen',title: 'Vulnerability Disclosure Program', photo: 'https://cdn.worldvectorlogo.com/logos/redis.svg'},
      //   ]
    }
  },
  head() {
    return {
      title: 'Leaderboards',
    }
  },
//   mounted () {
//       console.log(this.users.referral[0])
//   }
  // middleware: 'router-auth'
}
</script>


<style lang="scss" scoped>
.hovertrans.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: transparent !important;
}
</style>