<template>
  <div>
    <v-tabs v-if="$auth.loggedIn ? !$auth.user.is_staff : false" v-model="atab" background-color="transparent" class="mb-3">
    </v-tabs>
    <!-- <h4 class="headline mb-3 mt-0">Public</h4> -->
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
            <v-select
              v-model="filters.options"
              outlined
              multiple
              placeholder="Additional Filters"
              :disabled="loading"
              :items="[
                { name: 'Managed By SecuriumX', value: 'managed' },
                { name: 'Bounty Splitting Eligible', value: 'splitting' }
              ]"
              item-text="name"
              item-value="value"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="text-centerc" cols="12" :sm="$auth.loggedIn ? $auth.user.is_staff ? '12': '10' : '10'">
        <p v-if="programs.length == 0">No Programs Found</p>
        <v-row>
          <v-col v-for="(program,i) in programs" :key="i" class="text-centerc" cols="12" :sm="$auth.loggedIn ? $auth.user.is_staff ? '3' : '4' : '4'" >
            <a :href="`/p/?${program.title}`" style="text-decoration: none;">
              <v-card elevation="2">
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
                    <Fav :perm="program.perm" :prog="program.title" />
                  </v-list-item-avatar>
                </v-list-item>
                <v-card-title>{{program.title}}</v-card-title>
                <v-card-subtitle>#{{program.type}}</v-card-subtitle>
                <v-card-subtitle>₹ {{program.lowreward}} - ₹ {{program.criticreward}} {{program.managed ? ' | Managed by Cyber3ra': null}} {{program.external_link ? ' | Managed by External': null}}</v-card-subtitle>
                <v-card-text>
                  <v-chip v-if="program.updated" color="secondary">Updated</v-chip>
                  <v-chip v-if="program.active" color="secondary">Active</v-chip>
                </v-card-text>
                <v-card-actions><v-spacer /></v-card-actions>
              </v-card> 
            </a>
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
      external: this.external,
      locations: this.locations,
      fulltime: false,
      contract: false,
      loading: false,
      filters: {
        type: null,
        options: [],
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
      if (this.filters.type) {
        string += `type=${this.filters.type}&`
      }
      if (this.filters.options.includes('managed')) {
        string += `managed=true&`
      }
      if (this.filters.options.includes('splitting')) {
        string += `splitting=true&`
      }
      return string
    },
    clearfilter () {
      this.filters = {
        type: null,
        options: [],
      }
    }
  }
}
</script>