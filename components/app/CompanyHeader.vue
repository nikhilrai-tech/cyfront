<template>
    
    <v-row>
      
      
      
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flex">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Attached</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Staff</v-list-item-title>
          </v-card-text>
          <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{count.referred}}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flex">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Company</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Visits</v-list-item-title>
          </v-card-text>
          <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{count.visits}}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flex">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Total</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Programs</v-list-item-title>
          </v-card-text>
          <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{count.programs}}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="text-centerc" cols="12" sm="3">
        <v-card class="d-flex">
          <v-card-text>
              <v-list-item-subtitle class="mb-2">Total</v-list-item-subtitle>
              <v-list-item-title style="font-size: 22px;" class="mb-4c">Reports</v-list-item-title>
          </v-card-text>
          <v-card-subtitle class="d-flex align-center" style="font-size: 35px;">{{count.reports}}</v-card-subtitle>
        </v-card>
      </v-col>



      <!-- <v-col class="text-centerc" cols="12" sm="3">
        <v-row>

          <v-col class="text-centerc" cols="12">
            <v-card >
              <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="mb-2">New Award Earned 
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
                  <v-progress-linear :value="awards.earned*10" color="success"></v-progress-linear>
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
                  <v-progress-linear :value="awards.completion" color="#FFD54F"></v-progress-linear>
                </v-list-item-content>
                <v-list-item-icon ><v-icon color="#FFD54F" large>mdi-account-circle</v-icon></v-list-item-icon>
              </v-list-item>
              <v-divider />
              <v-card-actions>
                <v-btn rounded text small color="#FFD54F" router to="/profile">Complete</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-col>

      <v-col class="text-centerc" cols="12" sm="3">
        <div class="overflow-hidden">
        <v-card color="#6A1B9A" class="shine">
              <v-list-item three-line>
                <v-list-item-avatar>
                  <img v-if="$auth.user.profile" :src="$auth.user.profile" alt="John" >
                  <v-icon v-else dark> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="mb-4c">{{$auth.user.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-4c">Gear Head I</v-list-item-title>
                  <v-list-item-subtitle>Big Award</v-list-item-subtitle>
                  <v-list-item-subtitle>"Login to Cyber3ra 5 times"</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-spacer />
                <v-btn rounded icon style="z-index: 20;" ><v-icon>mdi-share-variant</v-icon></v-btn>
              </v-card-actions>
        </v-card>
        </div>
      </v-col>
      
      <v-col class="text-centerc" cols="12" sm="3">
        <div class="overflow-hidden">
        <v-card color="#0097A7" class="shine delay-1">
              <v-list-item three-line>
                <v-list-item-avatar>
                  <img v-if="$auth.user.profile" :src="$auth.user.profile" alt="John" >
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
                  <img v-if="$auth.user.profile" :src="$auth.user.profile" alt="John" >
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
      </v-col>
 -->
      
    </v-row>
</template>


<script>
export default {
    name: 'CompanyHeader',
    props: {
        count: { type: Object, default() {return { referred: 0, visits: 0, reports: 0, programs: 0 }} },
        awards: { type: Object, default() {return { completion: 0, earned: 0, }} },
    }
}
</script>

