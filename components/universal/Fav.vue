<template>
<div>
    <div v-if="!$auth.user.is_staff">
        <v-progress-circular v-if="loading" size="20" :width="2" indeterminate></v-progress-circular>
        <div v-else>
            <v-btn v-if="permm" icon small @click="favo('2')"><v-icon>mdi-star</v-icon></v-btn>
            <v-btn v-else icon small @click="favo('1')"><v-icon>mdi-star-outline</v-icon></v-btn>
        </div>
    </div>
    <div v-else>
        <span v-if="perm">
            <v-btn icon :to="`/p/edit?program=${prog}`" small><v-icon>mdi-pencil</v-icon></v-btn>
        </span>
        <span v-else>
            <span></span>
        </span>
        <span v-if="dperm">
            <v-btn icon small @click="deletemodal = true"><v-icon>mdi-trash-can</v-icon></v-btn>
        </span>
        <span v-else>
            <span></span>
        </span>
    </div>
    
    <v-dialog v-model="deletemodal" width="400">
        <form @submit.prevent="deleteprogram">
      <v-card>
        <v-card-title class="d-flex justify-space-between">
          Delete Program
          <v-btn icon @click="deletemodal = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
            Are you Sure to delete the Program?
        </v-card-text>
        <v-card-actions class="d-flex justify-between">
          <v-btn outlined color="info" @click="deletemodal = false">No</v-btn>
          <v-btn color="error" type="submit">Yes</v-btn>
        </v-card-actions>
      </v-card>
      </form>
    </v-dialog>

</div>
</template>


<script>
export default {
    name: 'FavouriteComponent',
    props: {
        prog: { type: String, default() {return null} },
        perm: { type: Boolean, default() {return false} },
        dperm: { type: Boolean, default() {return false} },
    },
    data () {
        return {
            loading: false,
            deletemodal: false,
            permm: this.perm
        }
    },
    // created () {
    //     this.fetchData()
    // },
    methods: {
        async favo(type){
            this.loading = true
            // console.log(this.perm,type)
            try{
                // eslint-disable-next-line no-unused-vars
                const resp = await this.$axios.get('/app/main/favorite/'+this.prog+'/'+type)
            //    console.log(resp.data)
              // if(type === '1'){}
              this.permm = type === '1'
              this.loading = false
              this.$nuxt.$emit('refresh')
            }
            catch(e){
                console.log(e)
                this.loading = false
            }
        },
        async deleteprogram(){
            this.loading = true
            try{
                // eslint-disable-next-line no-unused-vars
                const resp = await this.$axios.get('/app/main/dprogram/'+this.prog)
                console.log(resp.data)
                this.$router.push(`/programs`)
                // this.$nuxt.$emit('refresh')
                this.loading = false
            }
            catch(e){
                console.log(e)
                this.loading = false
            }
        }
    }
}
</script>