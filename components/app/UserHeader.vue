<template>
    
    <v-row>
      
      
      
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flex">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Referred  </v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Users</v-list-item-title>
          </v-card-text>
          <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{count.referred}}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="text-centerc" cols="12" sm="3">
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
      </v-col>



      <v-col class="text-centerc" cols="12" sm="3">
        <v-row>

          <v-col class="text-centerc" cols="12">
            <v-card >
              <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="mb-2">Awards Earned ({{awards.earned}}/20)
                        <v-menu open-on-hover :close-on-content-click="false" :nudge-width="200" offset-x >
                            <template #activator="{ on, attrs }">
                                <v-icon small v-bind="attrs" v-on="on">mdi-help-circle</v-icon> 
                            </template>

                            <v-card width="300">
                                <v-card-text>About Cyber3ra Awards</v-card-text>
                                <v-divider />
                                <v-card-text>Cyber3ra Awards will be provided accordingly based on how much you have completed your Profile, 
                                    how much you have earned your reputation and how many reports you have submitted, etc.
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer />
                                    <v-btn color="primary" text router to="/awards" small > Learn More </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-menu>
                      
                    </v-list-item-title>
                  <v-progress-linear :value="get_award_perc()" color="success"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-icon ><v-icon color="success" large>mdi-trophy</v-icon></v-list-item-icon>
              </v-list-item>
            </v-card>
          </v-col>

          <v-col class="text-centerc" cols="12">
            <v-card >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-2">Profile Completion</v-list-item-title>
                  <v-progress-linear :value="get_percentage()" color="#FFD54F"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-icon ><v-icon color="#FFD54F" large>mdi-account-circle</v-icon></v-list-item-icon>
              </v-list-item>
              <v-divider />
              <v-card-actions>
                <v-btn rounded text small color="#FFD54F" router to="/profile">Go to Profile</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-col>

          <v-col class="text-centerc" sm="9" cols="12">
      <awards :type="'D'" :awards="awards.indexes" />
          </v-col>
      
      <!-- <v-col class="text-centerc" cols="12" sm="3">
        <div class="overflow-hidden">
        <v-card color="#0097A7" class="shine delay-1">
              <v-list-item three-line>
                <v-list-item-avatar>
                  <img v-if="$auth.user.profile" :src="$auth.user.profile" :alt="$auth.user.name" >
                  <v-icon v-else dark> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="mb-4c">{{$auth.user.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-4c">Technocrat IV</v-list-item-title>
                  <v-list-item-subtitle>Some text</v-list-item-subtitle>
                  <v-list-item-subtitle>"Add Report 4 times"</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-spacer />
                <v-btn rounded icon style="z-index: 20;"  ><v-icon>mdi-share-variant</v-icon></v-btn>
              </v-card-actions>
        </v-card>
        </div>
      </v-col>
      
      <v-col class="text-centerc" cols="12" sm="3">
        <div class="overflow-hidden">
        <v-card color="#AD1457" class="shine delay-2">
              <v-list-item three-line>
                <v-list-item-avatar>
                  <img v-if="$auth.user.profile" :src="$auth.user.profile"  :alt="$auth.user.name" >
                  <v-icon v-else dark> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="mb-4c">{{$auth.user.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-4c">Technocrat V</v-list-item-title>
                  <v-list-item-subtitle>Completed</v-list-item-subtitle>
                  <v-list-item-subtitle>"Add a Report mentioning your friend"</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-spacer />
                <v-btn rounded icon style="z-index: 20;"  ><v-icon>mdi-share-variant</v-icon></v-btn>
              </v-card-actions>
        </v-card>
        </div>
      </v-col> -->

      
    </v-row>
</template>


<script>
import Awards from '../universal/Awards.vue'
export default {
    name: 'UserHeader',
    components: { Awards },
    props: {
        count: { type: Object, default() {return { referred: 0, visits: 0, reputation: 0, likes: 0 }} },
        awards: { type: Object, default() {return { completion: 0, earned: 0,indexes: [] }} },
    },
    data() {
      return {
      }
    },
    methods: {
      get_percentage () {
        let perc = 50
        if (this.$auth.user.name){
          if(this.$auth.user.name.length > 1){
            perc+=30
          }
        }
        if (this.$auth.user.profile){
          if(this.$auth.user.profile.length > 1){
            perc+=20
          }
        }
        return perc
      },
      get_award_perc (){
        // const max = Math.max(...this.awards.indexes)
        // console.log(this.awards.earned)
        return ((this.awards.earned)/20)*100
      }
    },
}
</script>

