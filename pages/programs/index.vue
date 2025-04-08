<template>
  <div>
    <v-tabs v-if="$auth.loggedIn ? !$auth.user.is_staff : false" v-model="atab" background-color="transparent" class="mb-3">
      <!-- <v-tab key="/programs"  to="/programs" @click="atab = '/programs'">Public</v-tab> -->
      <!-- <v-tab key="/programs/private" to="/programs/private" @click="atab = '/programs/private'">Private</v-tab>
      <v-tab v-if="!$auth.user.is_staff" key="/programs/starred" to="/programs/starred" @click="atab = '/programs/starred'" > Starred</v-tab> -->
      <!-- <v-flex grow ></v-flex> -->
      <v-btn small color="primary" :outlined="!$route.path === '/programs'" :class="$route.path" to="/programs">Public</v-btn>
      <v-btn v-if="$auth.loggedIn ? !$auth.user.is_staff : false" small color="success" class="ml-2" to="/programs/starred">Starred</v-btn>
      <v-btn small color="warning" class="ml-2" to="/programs/private">Private</v-btn>
    </v-tabs>
    <h4 class="headline mb-3 mt-0">Public</h4>
    <v-row v-if="$auth.loggedIn ? ($auth.user.is_staff) : false">
        <v-col cols="12" align="right">
            <v-btn outlined color="success" to="/programs/create"><v-icon small class="mr-2">mdi-account-plus</v-icon> Add Program</v-btn>
            </v-col>
        
    </v-row>
    <v-row>
      
      
      
      <v-col v-if="$auth.loggedIn ? (!$auth.user.is_staff) : false" class="text-centerc" cols="12" sm="2">
        <div><v-btn color="error" small @click="clearfilter">Clear</v-btn></div>
        <v-card-title class="mb-3c justify-space-between" ><p class="mb-0">Filters</p> 
          <v-btn outlined color="warning" class="align-self-end" :disabled="loading" @click="filter">Set</v-btn></v-card-title>
        <v-row>
          <v-col class="text-centerc px-7" cols="12" >
            <v-select 
              v-model="filters.type" outlined item-text="name" item-value="val" placeholder="Program Type" :disabled="loading"
              :items="[{name: 'Vulnerability Disclosure Program', val: 'VDP'},{name: 'Bug Bounty Program', val: 'BBP'},{name: 'Private Program', val: 'PRI'}]"
                ></v-select>
              <v-switch v-model="filters.managed" label="Managed By Cyber3ra" style="display: inline-block;" :disabled="loading"></v-switch>
              <v-switch v-model="filters.splitting" label="Bounty Splitting Eligible" style="display: inline-block;" :disabled="loading"></v-switch>
            <!-- <v-text-field v-model="location" outlined placeholder="Location"></v-text-field> -->
            <!-- <v-autocomplete v-model="location" dense :items="locations" outlined chips label="Location" multiple></v-autocomplete> -->
          </v-col>
          <!-- <v-col class="text-centerc px-7" cols="12" >
            <v-checkbox v-model="fulltime" label="Full Time" class="hover-trans"></v-checkbox>
            <v-checkbox v-model="contract" label="Contract" class="hover-trans"></v-checkbox>
          </v-col> -->
        </v-row>
      </v-col>
      <v-col class="text-centerc" cols="12" :sm="$auth.loggedIn ? $auth.user.is_staff ? '12': '10' : '10'">
        <p v-if="programs.length == 0">No Programs Found</p>
        <v-row>
          <v-col v-for="(program,i) in programs" :key="i" class="text-centerc" cols="12" :sm="$auth.loggedIn ? $auth.user.is_staff ? '3' : '4' : '4'" >
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
                  <v-list-item-avatar v-if="$auth.loggedIn" size="45">
                      <!-- <v-icon>mdi-star-outline</v-icon> -->
                      <Fav :perm="program.perm" :prog="program.title" />
                  </v-list-item-avatar>
              </v-list-item>

              <v-card-title>
                <a :href="`/p/?${program.title}`">{{program.title}}</a>
                <!-- <nuxt-link :to="`/p/?${program.title}`">{{program.title}}</nuxt-link> -->
                </v-card-title>
              <v-card-subtitle>#{{program.type}}</v-card-subtitle>
              <v-card-subtitle>₹ {{program.lowreward}} - ₹ {{program.criticreward}} {{program.managed ? ' | Managed by Cyber3ra': null}} {{program.external_link ? ' | Managed by External': null}}</v-card-subtitle>
              <!-- <v-card-text>Small Description here</v-card-text> -->
              <v-card-text >
                <v-chip v-if="program.updated" color="secondary">Updated</v-chip>
                <v-chip v-if="program.splitting" color="secondary" style="margin-top: 10px;">Bounty Splitting</v-chip>
                <v-chip v-if="program.managed" color="secondary" style="margin-top: 10px;">Managed by Cyber3ra</v-chip>
                <v-chip v-if="program.external" color="secondary" style="margin-top: 10px;">Managed by External</v-chip>
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
    <div class="text-center mt-7">
    <v-pagination
      v-model="page"
      circle :disabled="loading"
      :length="num_pages" @input="nextpage"
    ></v-pagination>
  </div>
  </div>
  
</template>

<script>
import Fav from "../../components/universal/Fav.vue"
export default {
  name: 'ProgramPage',
  components: {Fav},
  async asyncData({ store, $axios, app, $nuxt }) {
    // console.log(app.$auth.strategy.token.get())
    try{
      if(store.state.auth.loggedIn){
      const resp = await $axios.get('/app/main/programs',)
     console.log(resp.data)
      return {
        programs: resp.data.programs, num_pages: resp.data.pages
      }
      }
      else{
      const resp = await $axios.get('/app/main/aprograms',)
    //  console.log(resp.data)
      return {
        programs: resp.data.programs, num_pages: resp.data.pages
      }
      }
    }
    catch(e){
      console.log(e)
      return { programs : [],}
    }
  },
  data() {
    return {
      count: { referred: 0, visits: 0, reputation: 0, likes: 0 },
      awards: { completion: 35, earned: 6, },
      programs: this.programs,
      external:this.external,
      locations: this.locations,
      fulltime: false,
      contract: false,
      loading: false,
      filters: {
        type: null,
        managed: null,
        splitting: null,
      },
      page: 1,
      num_pages: 1,
      location: '',
      atab: '/programs'
    }
  },
  head() {
    return {
      title: 'Programs',
    }
  },
  methods: {
      async filter() {
        const string = this.get_filter_string()
        this.loading = true
          try{
            const resp = await this.$axios.get('/app/main/programs'+string, 
              { headers: {"Authorization" : this.$auth.strategy.token.get()} }
              )
          //  console.log(resp.data)
            this.programs= resp.data.programs
            this.num_pages = resp.data.pages
            this.loading = false
          }
          catch(e){
            console.log(e)
            this.loading = false
          }
      },
      async nextpage(pageno) {
        this.loading = true
          try{
            const resp = await this.$axios.get('/app/main/programs'+this.get_filter_string()+pageno, 
              { headers: {"Authorization" : this.$auth.strategy.token.get()} }
              )
          //  console.log(resp.data)
            this.programs= resp.data.programs
            this.num_pages = resp.data.pages
            this.loading = false
          }
          catch(e){
            console.log(e)
            this.loading = false
          }
      },
      get_filter_string () {
        let string = '?'
        for (const obj in this.filters) {
          if(this.filters[obj]){
            string+=obj+'='+this.filters[obj]+'&'
          }
        }
        return string
      },
      clearfilter () {
        this.filters = {
          type: null,
          managed: null,
          splitting: null,
        }
      }
  }
  // middleware: 'router-auth'
}
</script>
