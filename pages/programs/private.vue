<template>
  <div>
    <v-tabs v-model="atab" background-color="transparent" class="mb-3">
      <!-- <v-tab key="/programs"  to="/programs" @click="atab = '/programs'">Public</v-tab> -->
      <!-- <v-tab key="/programs/private" to="/programs/private" @click="atab = '/programs/private'">Private</v-tab>
      <v-tab v-if="!$auth.user.is_staff" key="/programs/starred" to="/programs/starred" @click="atab = '/programs/starred'" > Starred</v-tab> -->
      <!-- <v-flex grow ></v-flex> -->
      <v-btn small color="primary" :outlined="!$route.path === '/programs'" :class="$route.path" to="/programs">Public</v-btn>
      <v-btn v-if="!$auth.user.is_staff" small color="success" class="ml-2" to="/programs/starred">Starred</v-btn>
      <v-btn small color="warning" class="ml-2" to="/programs/private">Private</v-btn>
    </v-tabs>
    
    <h4 class="headline mb-3 mt-0">Private</h4>
    <v-row v-if="($auth.user.is_staff)">
        <v-col cols="12" align="right">
            <v-btn outlined color="success" to="/programs/create"><v-icon small class="mr-2">mdi-account-plus</v-icon> Add Program</v-btn>
            </v-col>
        
    </v-row>
    <v-row>
      
      
     <!-- 
      <v-col v-if="(!$auth.user.is_staff)" class="text-centerc" cols="12" sm="2">
        <v-card-title class="mb-3c justify-space-between" ><p class="mb-0">Filters</p> <v-btn outlined color="warning" class="align-self-end" @click="filter">Set</v-btn></v-card-title>
        <v-row>
          <v-col class="text-centerc px-7" cols="12" >
             <v-text-field v-model="location" outlined placeholder="Location"></v-text-field> 
             <v-autocomplete v-model="location" dense :items="locations" outlined chips label="Location" multiple></v-autocomplete> 
          </v-col>
           <v-col class="text-centerc px-7" cols="12" >
            <v-checkbox v-model="fulltime" label="Full Time" class="hover-trans"></v-checkbox>
            <v-checkbox v-model="contract" label="Contract" class="hover-trans"></v-checkbox>
          </v-col> 
        </v-row>
      </v-col>-->
      <v-col class="text-centerc" cols="12" :sm="$auth.user.is_staff ? '12': '10'">
        <v-row>
          <v-col v-for="(program,i) in programs" :key="i" class="text-centerc" cols="12" :sm="$auth.user.is_staff ? '3' : '4'" >
            <v-card elevation="2" >
              
              <v-list-item three-line>
                  <v-list-item-avatar size="45">
                      <img v-if="program.posted_by.photo" :src="program.posted_by.photo" :alt="program.posted_by.name" >
                      <v-icon v-else x-large dark> mdi-account-circle </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                      <v-list-item-title class="mb-4c">{{program.posted_by.name ? program.posted_by.name : program.posted_by.username}}</v-list-item-title>
                      <v-list-item-subtitle class="mb-4c">@{{program.posted_by.username}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <!--<v-list-item-avatar size="45">
                      <Fav :perm="program.perm" :prog="program.title" />
                  </v-list-item-avatar>-->
              </v-list-item>

              <v-card-title>
                <a :href="`/p/?${program.title}`">{{program.title}}</a>
                <!-- <nuxt-link :to="`/p/?${program.title}`">{{program.title}}</nuxt-link> -->
                </v-card-title>
              <v-card-subtitle>#{{program.type}}</v-card-subtitle>
              <v-card-subtitle>₹ {{program.lowreward}} - ₹ {{program.criticreward}} {{program.managed ? ' | Managed by Cyber3ra': null}}</v-card-subtitle>
              <!-- <v-card-text>Small Description here</v-card-text> -->
              <v-card-text>
                <v-chip v-if="program.updated" color="secondary">Updated</v-chip>
                <v-chip v-if="program.splitting" color="secondary">Bounty Splitting</v-chip>
                <v-chip v-if="program.managed" color="secondary">Managed by Cyber3ra</v-chip>
                <v-chip v-if="program.active" color="secondary">Active</v-chip>
              </v-card-text>
              <v-card-text>
                <v-chip v-for="(scope,ind) in program.scopes" :key="ind" small>{{scope.type}} | {{scope.severity}}</v-chip>
              </v-card-text>
              <v-card-actions><v-spacer />
              <a :href="`/p/?${program.title}`"><v-btn text color="primary">View</v-btn></a>
              </v-card-actions>
            </v-card> 
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
// import Fav from "../../components/universal/Fav.vue"
export default {
  name: 'ProgramPage',
  // components: {Fav},
  async asyncData({ store, $axios, app, $nuxt }) {
    // console.log(app.$auth.strategy.token.get())
    try{
      const resp = await $axios.get('/app/main/fprograms/private',)
    //  console.log(resp.data)
      return {
        programs: resp.data.programs
      }
    }
    catch(e){
      console.log(e)
      return { programs : [],}
    }
  },
  data() {
    return {
      programs: this.programs,
      locations: this.locations,
      fulltime: false,
      contract: false,
      location: '',
      atab: '/programs/private',
    }
  },
  head() {
    return {
      title: 'Programs',
    }
  },
  methods: {
      // async filter() {
      //   let type = 0
      //   // console.log(this.location.join(','))
      //   const loc = this.location.length > 0 ? this.location.join(',') : ''
      //   if(!(this.fulltime && this.contract)){
      //     if(this.fulltime && !this.contract){
      //       type = 1
      //     }
      //     else if(!this.fulltime && this.contract){
      //       type = 2
      //     }
      //     else{
      //       type = 0
      //     }
      //   }
      //     try{
      //       const resp = await this.$axios.get('/app/main/programs/'+type+'/'+loc, 
      //         { headers: {"Authorization" : this.$auth.strategy.token.get()} }
      //         )
      //     //  console.log(resp.data)
      //       this.programs= resp.data.programs
      //     }
      //     catch(e){
      //       console.log(e)
      //     }
      // }
  }
  // middleware: 'router-auth'
}
</script>
