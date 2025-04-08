<template>
  <div>
    <!-- <h2 class="mb-2">Add Program</h2> -->
    <v-row>
        <v-col cols="12" align="right">
            <v-btn outlined color="success" @click="scopemodal = true" ><v-icon small class="mr-2">mdi-eye</v-icon>View Scopes</v-btn>
            </v-col>
        
    </v-row>
    <v-row>
      
      <v-col class="text-centerc" cols="12" sm="12">
        <AddProgram :scs="scopes" :users="users" />
      </v-col>

    </v-row>










    <v-dialog v-model="scopemodal" width="400">
      <v-card>
        <v-card-title class="d-flex justify-space-between">
          Your Scopes
          <v-btn icon @click="scopemodal = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-list>
          <div v-for="(scope,i) in scopes" :key="i">
            <Scope :scope="scope" />
          </div>
        </v-list>
        <v-card-actions class="text-center">
          <v-btn outlined color="info" @click="addscopemodal = true">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog v-model="addscopemodal" width="400">
      <AddScope :close="closeaddmodal" :update="updatescopes" />
    </v-dialog>
  </div>
  
</template>

<script>
import AddProgram from "../../components/app/AddProgram.vue"
import AddScope from "../../components/app/AddScope.vue"
import Scope from "../../components/app/Scope.vue"
export default {
  name: 'ProgramAddPage',
  components: {AddProgram, AddScope,Scope},
  async asyncData({ $axios }) {
    try{
      const resp = await $axios.get('/app/main/scopes', )
    //  console.log(resp.data)
      return {
        scopes: resp.data.scopes, users: resp.data.users
      }
    }
    catch(e){
      console.log(e)
      return { scopes : [],users: []}
    }
  },
  data() {
    return {
      scopes: this.scopes,
      scopemodal: false,
      addscopemodal: false,
      loading: false,
      editscopemodal: false,
      mainscope: {},
      users: this.users
    }
  },
  head() {
    return {
      title: 'Add Program',
      // bodyAttrs: {
      //     class: 'add-program'
      //   }
    }
  },
  methods: {
    closeaddmodal() {
      this.addscopemodal = false
    },
    closeeditmodal() {
      this.editscopemodal = false
    },
    updatescopes(scs) {
      this.scopes = scs
    },
  }
}
</script>
