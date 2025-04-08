<template>
    <div>

      <v-hover v-slot="{ hover }">
        <v-list-item :disabled="loading">
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
            <v-btn icon color="info" @click="editscopemodal = true"><v-icon>mdi-pencil</v-icon></v-btn>
            <v-btn icon color="info" @click="deletescope"><v-icon>mdi-delete</v-icon></v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-hover>
      
      <v-dialog v-model="editscopemodal" width="400">
        <form @submit.prevent="editscope">
          <v-card :loading="mainscope.loading">
            <v-card-title class="d-flex justify-space-between">
              Edit Scope
              <v-btn icon @click="editscopemodal = false"><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
              <v-row class="mt-2">
                <v-col cols="12">
                  <v-select v-model="mainscope.type" :items="scopetypes" item-text="name" item-value="name" outlined placeholder="Scope Type" hide-details required></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="mainscope.domain" outlined placeholder="Domain/Environment" hide-details required />
                </v-col>
                <v-col cols="6">
                  <v-checkbox v-model="mainscope.bounty" label="Bounty Eligible" hide-details class="mt-0"></v-checkbox>
                </v-col>
                <v-col cols="6">
                  <v-checkbox v-model="mainscope.out" label="Out of Scope" hide-details class="mt-0"></v-checkbox>
                </v-col>
                <v-col cols="12">
                  <v-select v-model="mainscope.severity" :items="severities" item-text="name" item-value="val" outlined placeholder="Severity" hide-details required></v-select>
                </v-col>

                <v-col cols="12">
                    <v-combobox v-model="mainscope.tags" :filter="filter" :hide-no-data="!search" :items="existingtags" :search-input.sync="search" hide-selected label="Add Tags" multiple small-chips outlined >
                      
                      <template #no-data>
                        <v-list-item><small class="mr-2">Create</small><v-chip color="info" label outlined small > {{ search }} </v-chip></v-list-item>
                      </template>

                      <template #selection="{ attrs, item, parent, selected }">
                        <v-chip v-if="!item.label" v-bind="attrs" :color="`${item.color} lighten-3`" :input-value="selected" label small >
                          <span class="pr-2"> {{ item }} </span><v-icon small @click="parent.selectItem(item)" >$delete</v-icon>
                        </v-chip>
                      </template>

                      <template #item="{ index, item }">

                        <v-chip :key="index" :color="`${item.color} lighten-3`" dark label small > {{ item }} </v-chip>
                        <v-spacer></v-spacer>

                      </template>

                    </v-combobox>

                </v-col>

              </v-row>
            </v-card-text>
            <v-card-actions class="justify-center pb-4">
              <v-btn outlined color="secondary" type="submit" :disabled="mainscope.loading">Save</v-btn> 
            </v-card-actions>
          </v-card>
        </form>
      </v-dialog>

    </div>
</template>

<script>
export default {
    name: 'EditScopeComponent',
    props: {
      close: {type: Function, default: ()=> console.log('')},
      update: {type: Function, default: ()=> console.log('')},
      scope: {type: Object, default: ()=> ({
              tags: [],
              type: '',
              severity: '',
              bounty: false,
              out: false,
              domain: '',
            })},
      
    },
    data() {
        return {
            loading: false,
            mainscope: this.scope,
            post: {},
            scopetypes: [
              {val: '1', name: 'CIDR'},
              {val: '2', name: 'Domain'},
              {val: '3', name: 'iOS: App Store'},
              {val: '4', name: 'iOS: Testflight'},
              {val: '5', name: 'iOS: .ipa'},
              {val: '6', name: 'Android: Play Store'},
              {val: '7', name: 'Android: .apk'},
              {val: '8', name: 'Windows: Microsoft Store'},
              {val: '9', name: 'Source Code'},
              {val: '10', name: 'Executable'},
              {val: '11', name: 'Hardware/IoT'},
              {val: '12', name: 'Other'},
            ],
            severities: [
              { val: 'C', name: 'Critical'},
              { val: 'H', name: 'High'},
              { val: 'M', name: 'Medium'},
              { val: 'L', name: 'Low'},
              { val: 'N', name: 'None'},
            ],
            existingtags: [ 
              // 'Python', 'Java', 
            ],
            search: null,
            editscopemodal: false
        }
    },
    methods: {
      async editscope () {
        this.loading = true;
        this.post = this.mainscope
        for(let i=0;i<this.scopetypes.length;i++){
          if(this.mainscope.type === this.scopetypes[i].name){
            // console.log(this.scopetypes[i].name)
            this.post.type = this.scopetypes[i].val
          }
        }
        try {
          const resp = await this.$axios.post('/app/main/scope/'+this.mainscope.id, this.post)
          if(!resp.data.error){
            this.$nuxt.$emit('refresh')
            this.mainscope = resp.data.scope;
            this.editscopemodal = false
            this.loading = false
          }
        } catch (e) {
          console.log(e)
          this.loading = false
        }
      },
      async deletescope () {
        this.loading = true;
        try {
          const resp = await this.$axios.get('/app/main/scope/'+this.mainscope.id)
          if(!resp.data.error){
            this.$nuxt.$emit('refresh')
            // this.mainscope = resp.data.scope;
            // this.loading = false
          }
        } catch (e) {
          console.log(e)
          this.loading = false
        }
      },
      filter (item, queryText, itemText) {
        // console.log('entered ',itemText,queryText)
        if (item.label) return false
        const q = queryText.toString().toLowerCase()
        const i = itemText.toString().toLowerCase()
        // console.log(i,q,i.includes(q))
        return i.includes(q)
      },
    }
}
</script>




<style scoped>
</style>