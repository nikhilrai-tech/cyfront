<template>
  <div>
    <v-row v-if="$auth.loggedIn ? ($auth.user.is_staff) : false">
        <v-col cols="12" align="right">
            <v-btn outlined color="success" to="/jobs/add"><v-icon small class="mr-2">mdi-account-plus</v-icon> Add Job</v-btn>
            </v-col>
        
    </v-row>
    <v-row>
      
      
      
      <v-col  v-if="$auth.loggedIn ? (!$auth.user.is_staff) : false" class="text-centerc" cols="12" sm="3">
        <v-card-title class="mb-3c justify-space-between" ><p class="mb-0">Filters</p> <v-btn outlined color="warning" class="align-self-end" @click="filter">Set</v-btn></v-card-title>
        <v-row>
          <v-col class="text-centerc px-7" cols="12" >
            <!-- <v-text-field v-model="location" outlined placeholder="Location"></v-text-field> -->
            <v-autocomplete v-model="location" dense :items="locations" outlined chips label="Location" multiple></v-autocomplete>
          </v-col>
          <v-col class="text-centerc px-7" cols="12" >
            <v-checkbox v-model="fulltime" label="Full Time" class="hover-trans"></v-checkbox>
            <v-checkbox v-model="contract" label="Contract" class="hover-trans"></v-checkbox>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="text-centerc" cols="12" :sm="$auth.loggedIn ? $auth.user.is_staff ? '12': '9' : '12'">
        <v-row>
          <v-col v-for="(job,i) in jobs" :key="i" class="text-centerc" cols="12" :sm="$auth.loggedIn ? $auth.user.is_staff ? '4': '6' : '4'" >
            <v-card elevation="2" >
              <v-card-title>{{job.designation}}</v-card-title>
              <v-card-subtitle>{{job.type}} | {{job.location}} {{job.lastedited!==job.published ? ' | Edited': null}}</v-card-subtitle>
              <!-- <v-card-text>Small Description here</v-card-text> -->
              <v-card-text>
                <v-chip v-if="job.remote">Remote Friendly</v-chip>
              </v-card-text>
              <v-card-actions v-if="$auth.loggedIn ? (!$auth.user.is_staff) : false"><v-spacer />
              <!-- <v-btn text color="secondary">View</v-btn> -->
              <a :href="getlink(job.link)" target="_blank"><v-btn v-if="job.link" outlined color="primary">Apply</v-btn></a>
              </v-card-actions>
            </v-card> 
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
export default {
  name: 'JobPage',
  async asyncData({ store, $axios, app }) {
    // console.log(app.$auth.strategy.token.get())
    try{
        if(store.state.auth.loggedIn){
          const resp = await $axios.get('/app/main/jobs')
    //  console.log(resp.data)
          return {
            jobs: resp.data.jobs, locations: resp.data.locations
          }
        }
        else{
          const resp = await $axios.get('/app/main/ajobs')
    //  console.log(resp.data)
          return {
            jobs: resp.data.jobs, locations: resp.data.locations
          }
          }
    }
    catch(e){
      console.log(e)
      return { jobs : [], locations: []}
    }
  },
  data() {
    return {
      count: { referred: 0, visits: 39, reputation: 12, likes: 45 },
      awards: { completion: 35, earned: 6, },
      jobs: this.jobs,
      locations: this.locations,
      fulltime: false,
      contract: false,
      location: ''
    }
  },
  head() {
    return {
      title: 'Jobs',
    }
  },
  methods: {
      async filter() {
        let type = 0
        // console.log(this.location.join(','))
        const loc = this.location.length > 0 ? this.location.join(',') : ''
        if(!(this.fulltime && this.contract)){
          if(this.fulltime && !this.contract){
            type = 1
          }
          else if(!this.fulltime && this.contract){
            type = 2
          }
          else{
            type = 0
          }
        }
          try{
            const resp = await this.$axios.get('/app/main/jobs/'+type+'/'+loc, 
              { headers: {"Authorization" : this.$auth.strategy.token.get()} }
              )
          //  console.log(resp.data)
            this.jobs= resp.data.jobs
          }
          catch(e){
            console.log(e)
          }
      },
      getlink(link) {
        if(link.startsWith("http")){
          return link
        }
        else{
          return "https://"+link
        }
      }
  }
  // middleware: 'router-auth'
}
</script>
