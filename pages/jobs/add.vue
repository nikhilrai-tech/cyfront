<template>
  <div>
    <!-- <h2 class="mb-2">Add Program</h2> -->
    <!-- <v-row v-if="($auth.user.is_staff)">
        <v-col cols="12" align="right">
            <v-btn outlined color="success" @click="scopemodal = true" ><v-icon small class="mr-2">mdi-eye</v-icon>View Scopes</v-btn>
            </v-col>
        
    </v-row> -->
    <v-row>
      
      <v-col class="text-centerc" cols="12" sm="6">
        <AddJob :scs="scopes" />
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
          <v-hover v-slot="{ hover }">
            <v-list-item :disabled="false">
              <v-list-item-avatar>
                  <v-icon dark :color="scope.bounty ? 'success' : 'error'"> {{scope.bounty ? 'mdi-currency-usd' : 'mdi-currency-usd-off'}} </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{scope.type}}</v-list-item-title>
                <v-list-item-subtitle>{{scope.domain}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar :class="{ 'hide-btns': hover }">
                  {{scope.severity}}
              </v-list-item-avatar>
              <v-list-item-action :class="{ 'show-btns': hover }" style="display: none;">
                <v-btn icon color="info"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn icon color="info"><v-icon>mdi-delete</v-icon></v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-hover>
          </div>
        </v-list>
        <v-card-actions class="text-center">
          <v-btn outlined color="info" @click="addscopemodal = true">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog v-model="addscopemodal" width="400">
      <AddScope :close="closemodal" :update="updatescopes" />
    </v-dialog>

  </div>
  
</template>

<script>
import AddJob from "../../components/app/AddJob.vue"
export default {
  name: 'JobAddPage',
  components: {AddJob},
  // async asyncData({ $axios }) {
  //   try{
  //     const resp = await $axios.get('/app/main/scopes', )
  //   //  console.log(resp.data)
  //     return {
  //       scopes: resp.data.scopes
  //     }
  //   }
  //   catch(e){
  //     console.log(e)
  //     return { scopes : [],}
  //   }
  // },
  data() {
    return {
      tab: 'mark'
    }
  },
  head() {
    return {
      title: 'Add Job',
    }
  },
  // methods: {
  //   closemodal() {
  //     this.addscopemodal = false
  //   },
  //   updatescopes(scs) {
  //     this.scopes = scs
  //   }
  // }
}
</script>


<style scoped>
.show-btns {
  display: inline-block !important;
}
.hide-btns {
  display: none !important;
}
</style>