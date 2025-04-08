<template>
  <div>
    <v-row v-if="found" class="my-4c">
      <v-col cols="12">
        <v-card>
          <div style="background-color: black;">
            <v-img height="250px" class="program-bg" :src="details.background ? details.background : '/program.jpg'">


          <v-card-title class="white--text mt-10">
            <div class="d-flex flex-column ml-3">
              <h2 class="mb-0" style="font-size: 3rem; font-weight: normal;opacity: 1;">{{details.title}}</h2>
              <!-- <v-card-subtitle class="pl-0">@{{details.posted_by.username}}</v-card-subtitle> -->
              <v-card-subtitle class="pl-0">#{{details.type}}</v-card-subtitle>
              <v-row no-gutters>
              <v-col sm="4">
              <v-chip v-if="details.managed" small class="d-inline-block" style="margin-top: 5px; text-align: center; width: 200px;">Managed By Cyber3ra</v-chip>
              </v-col>
              <v-col sm="4">
              <v-chip v-if="details.external" small class="d-inline-block" style="margin-top: 5px; text-align: center; width: 450px;">Managed By External</v-chip>
            </v-col>
          </v-row>
            </div>
          </v-card-title>
        </v-img></div>

        <v-card-text>
          <v-row>
            <v-col cols="12" sm="9" class="d-flex flex-column">
              <v-card-title class="white--textc mt-8c">
                <v-avatar size="100" :color="$vuetify.theme.dark ? 'black' : 'white'" >
                  <img v-if="details.posted_by.photo" :alt="details.posted_by.name" :src="details.posted_by.photo">
                  <v-icon v-else size="100" class="rounded-circle"> mdi-account-circle </v-icon> 
                </v-avatar>
                <div class="d-flex flex-column ml-3">
                  <h3 class="mb-0 font-weight-medium ">{{details.posted_by.name}}</h3>
                  <v-card-subtitle class="pl-0 pt-1">{{details.posted_by.bio}}</v-card-subtitle>
                </div>
              </v-card-title>
              <div>
                <v-list-item style="width: 300px;">
                  <v-list-item-content align="center">
                    <v-list-item-title>45</v-list-item-title>
                    <v-list-item-subtitle>Reports</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-divider vertical></v-divider>
                  <v-list-item-content align="center">
                    <v-list-item-title>12</v-list-item-title>
                    <v-list-item-subtitle>Resolved</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-divider vertical></v-divider>
                  <v-list-item-content align="center">
                    <v-list-item-title>{{details.scopes.length}}</v-list-item-title>
                    <v-list-item-subtitle>Assets</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-col>
            <v-col cols="12" sm="3">
              <div class="d-flex flex-column justify-space-between align-end " style="height: 100%;">
                <fav v-if="$auth.loggedIn" :perm="details.perm" :prog="details.title" :dperm="details.dperm" />
                <div>
                  <!-- <v-btn v-if="name=='cyber3ra'">Submit Report</v-btn> -->
                  <v-btn
                  v-if="$auth.loggedIn && !$auth.user.is_company && !$auth.user.is_staff && is_external_link" :color="is_external_link ? 'secondary' : 'primary'" @click="openExternalLink(is_external_link)">
                    {{ is_external_link ? 'External Link' : 'Submit Report' }}</v-btn>
                    <v-btn
                      v-if="$auth.loggedIn && !$auth.user.is_company && !$auth.user.is_staff && !is_external_link"
                      :color="is_external_link ? 'secondary' : 'primary'"
                      @click="submit = !submit"
                    >
                      {{ is_external_link==null || is_external_link=="False" ? 'Submit Report':'External Link' }}
                    </v-btn>
                  <!-- <v-btn v-else>External Link</v-btn> -->
                </div>
              </div>
              
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pb-0">
          <v-tabs v-model="tab">
            <v-tab :key="'policy'">Policy</v-tab>
            <!-- <v-tab :key="'report'">Reports</v-tab> -->
            <v-tab :key="'thanks'">Thanks</v-tab>
            <!-- <v-tab :key="'staff'">Staff</v-tab> -->
          </v-tabs>
        </v-card-actions>


      </v-card>
      </v-col>
      <v-col v-if="submit" cols="12">
        <add-report :company="details.posted_by.name" :scs="details.scopes" :program="details.title"></add-report>
      </v-col>
      <v-col v-else cols="12">
        <v-card>
          <v-tabs-items v-model="tab">

            <v-tab-item :key="'policy'">
              <v-card-title>Rewards</v-card-title>
              <v-card-text>
                <v-card outlined>
                <v-row no-gutters>
                  <v-col cols="3">
                    <v-card-text class="d-flex align-center"> <span class="rounded-circle success mr-1" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"> Low</span></v-card-text>
                  </v-col>
                  <v-col cols="3">
                    <v-card-text class="d-flex align-center"> <span class="rounded-circle warning mr-1" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"> Medium</span></v-card-text>
                  </v-col>
                  <v-col cols="3">
                    <v-card-text class="d-flex align-center"> <span class="rounded-circle error mr-1" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"> High</span></v-card-text>
                  </v-col>
                  <v-col cols="3">
                    <v-card-text class="d-flex align-center"> <span class="rounded-circle red darken-4 mr-1" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"> Critical</span></v-card-text>
                  </v-col>
                </v-row>
                <v-divider />
                <v-row no-gutters>
                  <v-col cols="3">
                    <v-card-text >{{ details.lowreward ? details.lowreward : '-' }}</v-card-text>
                  </v-col>
                  <v-col cols="3">
                    <v-card-text >{{ details.midreward ? details.midreward : '-' }}</v-card-text>
                  </v-col>
                  <v-col cols="3">
                    <v-card-text >{{ details.highreward ? details.highreward : '-' }}</v-card-text>
                  </v-col>
                  <v-col cols="3">
                    <v-card-text >{{ details.criticreward ? details.criticreward : '-' }}</v-card-text>
                  </v-col>
                </v-row>
                </v-card>
              </v-card-text>
              <v-divider />
              <v-card-title>Description</v-card-title>
              <v-card-text>
                <!-- <v-divider /> -->
                <div class="py-3">
                  <UniversalMarkdown :text="details.policy" />
                </div>
                <v-divider />
              </v-card-text>
              <v-card-title >Scopes</v-card-title>
              <v-card-text>
                <v-list-item v-for="scope in details.scopes" :key="scope.id">
                  
                </v-list-item>
              </v-card-text>
            </v-tab-item>
            
            <!-- <v-tab-item :key="'report'">
              <v-card-title>Reports</v-card-title>
              <v-card-text>
                <div class="py-3">
                </div>
                <v-divider />
              </v-card-text>
            </v-tab-item> -->
            
            <v-tab-item :key="'thanks'">
              <v-card-title>Thanks</v-card-title>
              <v-card-text>
                <!-- <v-divider /> -->
                <div class="py-3">
                  <!-- <UniversalMarkdown :text="details.policy" /> -->
                  
                </div>
                <v-divider />
              </v-card-text>
              <!-- <v-card-title >Scopes</v-card-title>
              <v-card-text>
                <v-list-item v-for="scope in details.scopes" :key="scope.id">
                  
                </v-list-item>
              </v-card-text> -->
            </v-tab-item>
            
            <v-tab-item :key="'staff'">
              <v-card-title>Staff</v-card-title>
              <v-card-text>
                <!-- <v-divider /> -->
                <div class="py-3">
                  <!-- <UniversalMarkdown :text="details.policy" /> -->
                </div>
                <v-divider />
              </v-card-text>
              <!-- <v-card-title >Scopes</v-card-title>
              <v-card-text>
                <v-list-item v-for="scope in details.scopes" :key="scope.id">
                  
                </v-list-item>
              </v-card-text> -->
            </v-tab-item>

          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <p>{{message}}</p>
    </v-row>
  </div>
  
</template>

<script>
import AddReport from '~/components/app/AddReport.vue'
import Fav from '~/components/universal/Fav.vue'

export default {
  name: 'ProgramPreviewPage',
  components: { Fav, AddReport },
    async asyncData({ $axios, redirect, query, store}) {
        // await console.log('parms',Object.keys(query))
        const queries = Object.keys(query)
        if(queries.length !== 1){
          store.commit('showSnack', { message: 'URL Not Found', type: 'error', timeout: 5000 })
          redirect('/dashboard')
        }
        try {
          if(store.state.auth.loggedIn){
              const resp = await $axios.get('/app/main/program/'+queries[0])
              // console.warn(resp)
              if(resp.data.error){
                return {found: false, message: 'Program not Found',external_link :resp.data.external}
              }
              else{
                return {found: true,details: resp.data,external_link :resp.data.external}
              }
          }
          else{
              const resp = await $axios.get('/app/main/aprogram/'+queries[0])
              if(resp.data.error){
                return {found: false, message: 'Program not Found'}
              }
              else{
                return {found: true,details: resp.data}
              }
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
        tab: 'policy',
        submit: false,
        details: {
          type: 'Company',
          // name:''
        is_external_link : this.external_link
        }
    }
  },
  head(){
      return {
        title: this.details.title ? this.details.title : this.details.type,
      }
  },
  created(){
    this.is_external_link = this.external_link
  },
    
  methods: {
    openExternalLink(url) {
    if (confirm(`This link will take you to an external website: ${url}. Are you sure you want to proceed?`)) {
        window.open( url);
    }
}
}
}
</script>
