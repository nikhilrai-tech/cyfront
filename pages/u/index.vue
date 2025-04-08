<template>
  <div>
    <v-row v-if="found" class="my-4c">
      
      <v-col cols="12" sm="4" md="3">
        <v-card >
          <v-card-title class="headlinec">
              Overview
          </v-card-title>
          <v-card-text align="center">
            <v-list-item-content align="center">
              <!-- <v-avatar size="150" class="d-inline-block avatar-company py-5"> -->
                <div :class="`avatar avatar-${details.atype} py-5`">
                  <img v-if="details.photo" :src="details.photo" :alt="details.name" width="100" height="100" class="rounded-circle" >
                  <v-icon v-else size="100" class="rounded-circle"> mdi-account-circle </v-icon>
                </div>
              <!-- </v-avatar> -->
            </v-list-item-content>
            <v-list-item-content align="center">
              <v-list-item-title v-if="details.name">{{details.name}}</v-list-item-title>
              <v-list-item-title v-else><em>Name Not Added</em></v-list-item-title>
              <v-list-item-subtitle>@{{username}}</v-list-item-subtitle>
            </v-list-item-content>
            </v-card-text>
            
          <!-- <v-list-item>
            <v-list-item-avatar style="width: 100px; height: 100px;">
              <v-avatar size="100">
                <img v-if="details.profile" :src="details.profile" :alt="details.name" >
                <v-icon v-else size="100"> mdi-account-circle </v-icon>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Vivek Billa</v-list-item-title>
              <v-list-item-subtitle>@vivekbilla</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> -->
          <v-card-text v-if="details.bio" align="center">
            {{details.bio}}
          </v-card-text>
          <v-card-text v-else align="center">
            <em>Bio Not Added</em>
          </v-card-text>
          <v-card-text align="center" justify="center" class="justify-center">
              <a v-if="details.website" target="_blank" class="mx-1" :href="details.website"> <v-icon color="grey"> mdi-web </v-icon></a>
              <a v-if="details.github" target="_blank" class="mx-1" :href="details.github"> <v-icon > mdi-github </v-icon></a>
              <a v-if="details.instagram" target="_blank" class="mx-1" :href="details.instagram"> <v-icon color="#F06292"> mdi-instagram </v-icon></a>
              <a v-if="details.twitter" target="_blank" class="mx-1" :href="details.twitter"> <v-icon color="primary"> mdi-twitter </v-icon></a>
              <a v-if="details.facebook" target="_blank" class="mx-1" :href="details.facebook"> <v-icon color="blue"> mdi-facebook </v-icon></a>
              <a v-if="details.linkedin" target="_blank" class="mx-1" :href="details.linkedin"> <v-icon color="#0077b5 "> mdi-linkedin </v-icon></a>
          </v-card-text>
          <v-list-item>
            <v-list-item-content align="center">
              <v-list-item-title>{{details.likes}}</v-list-item-title>
              <v-list-item-subtitle>Likes</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content align="center">
              <v-list-item-title>{{details.reports}}</v-list-item-title>
              <v-list-item-subtitle>Reports</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content align="center">
              <v-list-item-title>{{details.visits}}</v-list-item-title>
              <v-list-item-subtitle>Visits</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="py-5">
              <v-spacer />
              <!-- <v-btn outlined  color="secondary">Message</v-btn> -->
              <v-btn v-if="!$auth.user.is_staff && !$auth.user.is_company" :outlined="!details.liked" :disabled="details.liked" color="primary" @click="likeUser">{{details.liked ? 'Liked': 'Like'}}</v-btn>
              <v-btn color="error" @click="reportmodal = true">Report</v-btn>
              <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>


      <v-col cols="12" sm="8" md="9">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-card class="d-flex">
              <v-card-text>
                  <v-list-item-subtitle class="mb-2">Referred</v-list-item-subtitle>
                  <v-list-item-title style="font-size: 22px;" class="mb-4c">Users</v-list-item-title>
              </v-card-text>
              <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{details.refreputation}}</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="d-flex">
              <v-card-text>
                  <v-list-item-subtitle class="mb-2">Total</v-list-item-subtitle>
                  <v-list-item-title style="font-size: 22px;" class="mb-4c">Reputation</v-list-item-title>
              </v-card-text>
              <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{details.totalreputation}}</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="d-flex">
              <v-card-text>
                  <v-list-item-subtitle class="mb-2">Upvote</v-list-item-subtitle>
                  <v-list-item-title style="font-size: 22px;" class="mb-4c">Reputation</v-list-item-title>
              </v-card-text>
              <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{details.upvotereputation}}</v-card-subtitle>
            </v-card>
          </v-col>



          <!-- <v-col cols="12" sm="6" md="8">
            <v-card >
              <v-card-title class="headlinec">
                  Hacktivity
              </v-card-title>

              <v-list-item v-if="details.hactivity.length < 1">
                <v-list-item-avatar>
                    <v-icon color="success"> mdi-bug </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>No Reports Found </v-list-item-title>
                  <v-list-item-subtitle>vivekbilla hasn't added any reports yet</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <div v-else>
                <v-list-item>
                  <v-list-item-avatar>
                      <v-icon color="info"> mdi-arrow-up </v-icon>1
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Bug Bounty Program</v-list-item-title>
                    <v-list-item-subtitle><a target="_blank" style="color: inherit;" href="https://github.com/vivekkumarbilla">@redis</a></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar>
                      <a target="_blank" href="https://github.com/vivekkumarbilla"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                  </v-list-item-avatar>
                </v-list-item>
              </div>
              

              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>




          <v-col cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Thanks
              </v-card-title>


              <v-list-item v-if="details.thanks.length < 1">
                <v-list-item-avatar>
                    <v-icon color="success"> mdi-bug </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>No Thanks Found </v-list-item-title>
                  <v-list-item-subtitle>vivekbilla hasn't received any thanks yet</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>


              <v-list-item v-else>
                <v-list-item-avatar>
                  <img v-if="details.profile" :src="details.profile" :alt="details.name" >
                  <v-icon v-else large> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Amazon AWS</v-list-item-title>
                  <v-list-item-subtitle>A Small description of thanks here</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                  5
                </v-list-item-avatar>
              </v-list-item>


              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col> -->




          <!-- <v-col cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Linked
              </v-card-title>

              <v-list-item>
                <v-list-item-avatar>
                    <v-icon color="blue"> mdi-facebook </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Facebook</v-list-item-title>
                  <v-list-item-subtitle v-if="details.facebook">
                    <a target="_blank" style="color: inherit;" :href="details.facebook">{{details.facebook}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar v-if="details.facebook">
                    <a target="_blank" :href="details.facebook"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar>
                    <v-icon > mdi-github </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Github</v-list-item-title>
                  <v-list-item-subtitle v-if="details.github">
                    <a target="_blank" style="color: inherit;" :href="details.github">{{details.github}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar v-if="details.github">
                    <a target="_blank" :href="details.github"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar>
                    <v-icon color="primary"> mdi-twitter </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Twitter</v-list-item-title>
                  <v-list-item-subtitle v-if="details.twitter">
                    <a target="_blank" style="color: inherit;" :href="details.twitter">{{details.twitter}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar v-if="details.twitter">
                    <a target="_blank" :href="details.twitter"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar>
                    <v-icon color="#F06292"> mdi-instagram </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Instagram</v-list-item-title>
                  <v-list-item-subtitle v-if="details.instagram">
                    <a target="_blank" style="color: inherit;" :href="details.instagram">{{details.instagram}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar v-if="details.instagram">
                    <a target="_blank" :href="details.instagram"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar>
                    <v-icon color="grey"> mdi-web </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Website</v-list-item-title>
                  <v-list-item-subtitle v-if="details.website">
                    <a target="_blank" style="color: inherit;" :href="details.website">{{details.website}}</a>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle v-else>
                    <em>Not added</em>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar v-if="details.website">
                    <a target="_blank" :href="details.website"><v-icon color="grey" small> mdi-open-in-new </v-icon></a>
                </v-list-item-avatar>
              </v-list-item>
              

              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col> -->
          


          


          <v-col cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Awards
              </v-card-title>

              <v-list-item>
                <v-list-item-avatar>
                    <v-icon > mdi-trophy </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Techgeek II</v-list-item-title>
                  <v-list-item-subtitle>Being a Techgeek</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>



              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col>


          


          <!-- <v-col cols="12" sm="6" md="4">
            <v-card >
              <v-card-title class="headlinec">
                  Reputations
              </v-card-title>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Upvote Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.upvotereputation}}</p>
                </v-list-item-avatar>
              </v-list-item>



              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Verification Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.verificationreputation}}</p>
                </v-list-item-avatar>
              </v-list-item>
              

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Likes Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.likesreputation}}</p>
                </v-list-item-avatar>
              </v-list-item>
              

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Other Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.otherreputation}}</p>
                </v-list-item-avatar>
              </v-list-item>
              

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-5">Referral Reputation</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <p style="font-size: 25px;margin-bottom: 0px;">{{details.refreputation}}</p>
                </v-list-item-avatar>
              </v-list-item>
              

              

              <v-card-actions class="py-5c">
              </v-card-actions>
            </v-card>
          </v-col> -->


        </v-row>
      </v-col>
    </v-row>

    <v-row v-else>
      <p>{{message}}</p>
    </v-row>
    <v-dialog v-model="reportmodal" width="300">
        <v-card :loading="loading">
              <v-card-title class="d-flex justify-space-between">
                  Report
                  <v-btn icon @click="reportmodal = false"><v-icon>mdi-close</v-icon></v-btn>
              </v-card-title>
            <v-card-text>
              Report Account {{details.name}}?
            </v-card-text>
            <v-card-text>
                <v-select 
                  v-model="report.name" outlined label="Report As"
                  :items="['Spam','Inappropriate','He should\'nt be here','That\'s me','Phishing']"
                   ></v-select>
              <v-text-field v-model="report.reason" label="Reason" multiline outlined />
              <v-switch v-model="report.anon" :label="'Report Anonymous'" ></v-switch>
            </v-card-text>
            <v-card-actions>
              <v-btn :disabled="loading" @click="reportmodal = false">Cancel</v-btn>
              <v-btn :disabled="loading" color="error" @click="reportUser">Report</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
  
</template>

<script>

export default {
  name: 'UserProfilePage',
    async asyncData({ $axios, redirect, $auth, query, store}) { // { params, $axios, redirect, app, $route }
        // await console.log('parms',Object.keys(query))
        const queries = Object.keys(query)
        if(queries.length !== 1){
          store.commit('showSnack', { message: 'URL Not Found', type: 'error', timeout: 5000 })
          redirect('/dashboard')
        }
        if($auth.$state.user){
          if ($auth.$state.user.username === queries[0]){ 
            redirect('/profile')
            return {found: false,message: ''}
          }
        }
        try {
          const resp = await $axios.get('/app/accounts/profiling/'+queries[0])
        //  console.log(resp.data)
          if(resp.data.error){
            return {found: false, message: 'User not Found'}
          }
          else{
            return {found: true,details: resp.data, username: queries[0]}
          }
        }
        catch(e){
          console.log(e)
            return {found: false, message: 'Something went wrong'}
        }
        
    },
  data() {
    return {
        found: this.found,
        message: this.message || ' ',
        details: {
          type: 'Company'
          // name:''
        },
        username: '',
        reportmodal: false,
        report: {
          reason: '',
          name: 'Spam',
          anon: true
        },
        loading: false
    }
  },
    head(){
      return {
        title: this.details.name ? this.details.name : this.details.username,
      }
    },
  methods: {
      async likeUser(){
        // await console.log(this.$route)
        const queries = Object.keys(this.$route.query)
        if(queries.length !== 1){
          this.$store.commit('showSnack', { message: 'URL Not Found', type: 'error', timeout: 5000 })
          this.$router.push('/dashboard')
        }
        try{
          const resp = await this.$axios.get('/app/accounts/like/'+queries[0])
        //  console.log(resp.data)
          this.details = resp.data
        }
        catch(e){
          console.log(e)
        }
      },
      async reportUser(){
        // await console.log(this.$route)
        const queries = Object.keys(this.$route.query)
        if(queries.length !== 1){
          this.$store.commit('showSnack', { message: 'URL Not Found', type: 'error', timeout: 5000 })
          this.$router.push('/dashboard')
        }
        try{
          const resp = await this.$axios.post('/app/accounts/report/'+queries[0], this.report)
        //  console.log(resp.data)
          // this.details = resp.data
          if(!resp.data.error){
            // this.$store.commit('showSnack', { message: 'Account successfully Reported', type: 'warning', timeout: 5000 })
            this.$router.push('/dashboard')
          }
        }
        catch(e){
          console.log(e)
        }
      }
  }
}
</script>
