<template>
    <div>
      <form @submit.prevent="addscope">
        <v-card :loading="mainscope.loading">
          <v-card-title class="d-flex justify-space-between">
            Add Scope
            <v-btn icon @click="close"><v-icon>mdi-close</v-icon></v-btn>
          </v-card-title>
          <v-card-text>
            <v-row class="mt-2">
              <v-col cols="12">
                <v-select v-model="mainscope.type" :items="scopetypes" item-text="name" item-value="val" outlined placeholder="Scope Type" hide-details required></v-select>
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
            <v-btn outlined color="secondary" type="submit" :disabled="mainscope.loading">Add</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </div>
</template>

<script>
export default {
    name: 'AddScopeComponent',
    props: {
      close: {type: Function, default: ()=> console.log('')},
      update: {type: Function, default: ()=> console.log('')}
    },
    data() {
        return {
            loading: false,
            mainscope: {
              tags: [],
              type: '',
              severity: '',
              bounty: false,
              out: false,
              domain: '',
            },
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
        }
    },
    methods: {
      async addscope () {
        this.loading = true;
        try {
          const resp = await this.$axios.post('/app/main/scopes', this.mainscope)
          if(!resp.data.error){
            this.update(resp.data.scopes);
            this.mainscope = {
              tags: [],
              type: '',
              severity: '',
              bounty: false,
              out: false,
              domain: ''
            };
            this.close()
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