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
        <EditProgram :data="details" />
      </v-col>

    </v-row>



  </div>
  
</template>

<script>
import EditProgram from "../../components/app/EditProgram.vue"

export default {
  name: 'ProgramEditPage',
  components: {
    EditProgram
  },
    async asyncData({ params, $axios, redirect, app, query }) {
      console.log(query)
        try {
          const resp = await $axios.get('/app/main/program/'+query.program)
        //  console.log(resp.data)
          if(resp.data.error){
            return {found: false, message: 'Program not Found'}
          }
          else{
            return {found: true,details: resp.data}
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
          type: 'BBP'
          }
    }
  },
    head(){
      return {
        title: this.details.title ? this.details.title : this.details.type,
      }
    },
  methods: {
  }
}
</script>
