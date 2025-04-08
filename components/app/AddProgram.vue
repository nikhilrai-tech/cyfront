<template>
    <div class="add-program">
      <v-stepper v-model="e1" color="transparent" style="background: transparent !important;">
      <v-stepper-items>
        <v-stepper-content step="1" class="pt-2">
        <form @submit.prevent="addprogram">
          <v-card>
            <v-card-title>
              Add Program
            </v-card-title>
            <v-card-text>
              
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field v-model="program.title" placeholder="Program Title" outlined />
              </v-col>
              <v-col cols="12" sm="4">
                <v-select 
                  v-model="program.type" outlined item-text="name" item-value="val" placeholder="Program Type"
                  :items="[{name: 'Vulnerability Disclosure Program', val: 'VDP'},{name: 'Bug Bounty Program', val: 'BBP'},{name: 'Private Program', val: 'PRI'}]"
                   ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
              <v-autocomplete
            v-model="program.scopes"
            :items="scs"
            item-text="type"
            item-value="id"
            outlined
            chips
            small-chips
            placeholder="Scopes"
            multiple
          ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="12">
                  <v-btn text @click="markdown=true">Preview</v-btn>
                <v-textarea v-model="program.description" placeholder="Enter Markdown" auto-grow outlined hint="Cyber3ra Markdown"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-card-subtitle class="px-0">Rewards</v-card-subtitle>
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <!-- <v-card-subtitle class="px-0">Low</v-card-subtitle> -->
                <v-text-field 
                v-model.number="program.low" placeholder="Low Reward" type="number" label="Low" outlined
                append-outer-icon="mdi-plus" prepend-icon="mdi-minus" 
                @click:append-outer="program.low += 100" @click:prepend="program.low -= 100" 
                >
                  <template #append-outer="{ on, attrs }" >
                      <v-btn v-bind="attrs" icon @click="program.low += 100" v-on="on" ><v-icon>mdi-plus</v-icon></v-btn>
                  </template>
                  <template #prepend="{ on, attrs }" >
                      <v-btn v-bind="attrs" :disabled="program.low <= 100" icon @click="program.low -= 100" v-on="on" ><v-icon>mdi-minus</v-icon></v-btn>
                  </template>
                </v-text-field>
                <!-- <v-slider v-model.number="lowRev"  step="100" min="100" class="mt-n4" ticks ></v-slider> -->
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field 
                v-model="program.mid" placeholder="Mid Reward" type="number" label="Mid" outlined append-outer-icon="mdi-plus" prepend-icon="mdi-minus" 
                @click:append-outer="program.mid += 100" @click:prepend="program.mid -= 100" >
                  <template #append-outer="{ on, attrs }" >
                      <v-btn v-bind="attrs" icon @click="program.mid += 100" v-on="on" ><v-icon>mdi-plus</v-icon></v-btn>
                  </template>
                  <template #prepend="{ on, attrs }" >
                      <v-btn v-bind="attrs" :disabled="program.mid <= 500" icon @click="program.mid -= 100" v-on="on" ><v-icon>mdi-minus</v-icon></v-btn>
                  </template>
                </v-text-field>
                <!-- <v-slider v-model="program.mid"  step="100" min="500" ticks ></v-slider> -->
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field 
                v-model="program.high" placeholder="High Reward" type="number" label="High" outlined append-outer-icon="mdi-plus" prepend-icon="mdi-minus" :disabled:prepend="program.high <= 1000"
                @click:append-outer="program.high += 100" @click:prepend="program.high -= 100" >
                  <template #append-outer="{ on, attrs }" >
                      <v-btn v-bind="attrs" icon @click="program.high += 100" v-on="on" ><v-icon>mdi-plus</v-icon></v-btn>
                  </template>
                  <template #prepend="{ on, attrs }" >
                      <v-btn v-bind="attrs" :disabled="program.high <= 1000" icon @click="program.high -= 100" v-on="on" ><v-icon>mdi-minus</v-icon></v-btn>
                  </template>
                </v-text-field>
                <!-- <v-slider v-model="program.high"  step="100" min="1000" ticks ></v-slider> -->
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field 
                v-model="program.critic" placeholder="Critical Reward" type="number" label="Critical" outlined append-outer-icon="mdi-plus" prepend-icon="mdi-minus" 
                @click:append-outer="program.critic += 100" @click:prepend="program.critic -= 100" >
                  <template #append-outer="{ on, attrs }" >
                      <v-btn v-bind="attrs" icon @click="program.critic += 100" v-on="on" ><v-icon>mdi-plus</v-icon></v-btn>
                  </template>
                  <template #prepend="{ on, attrs }" >
                      <v-btn v-bind="attrs" :disabled="program.critic <= 2000" icon @click="program.critic -= 100" v-on="on" ><v-icon>mdi-minus</v-icon></v-btn>
                  </template>
                </v-text-field>
                <!-- <v-slider v-model="program.critic"  step="100" min="2000" ticks ></v-slider> -->
              </v-col>
              <v-col cols="12" sm="3">
                <v-switch v-model="program.managed" label="Managed By Cyber3ra" style="display: inline-block;"></v-switch>
              </v-col>
              <v-col cols="12" sm="3">
                <v-switch v-model="program.splitting" label="Bounty Splitting Eligible" style="display: inline-block;"></v-switch>
              </v-col>
              <v-col cols="12" sm="3">
                <v-switch v-model="program.present" label="External Link" style="display: inline-block;"></v-switch>
              </v-col>
              <v-col v-if="program.type=='PRI'" cols="12" class="text-center">
                <!-- <v-combobox
                  v-model="program.users"
                  :items="users"
                  hide-selected
                  placeholder="Invite Users"
                  multiple
                  item-text="name"
                  item-value="username"
                  outlined
                  hint="Press Enter to Add Username"
                  small-chips clearable
                >
                  <template #no-data>
                    <v-list-item>
                  :search-input.sync="search"
                      <v-list-item-content>
                        <v-list-item-title >
                          Add User "<strong>{{ search }}</strong>"
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template> 
                </v-combobox>-->
              <v-autocomplete
            v-model="program.users"
            :items="users"
            item-text="name"
            item-value="username"
            outlined
            chips
            small-chips
            placeholder="Users"
            multiple
          ></v-autocomplete>
              </v-col>
              <v-col v-if="program.present" cols="12" sm="12">
                <v-col cols="12" sm="12">
                    <v-btn text @click="markdown=true">External Link</v-btn>
                    <v-textarea v-model="program.external" placeholder="Enter External Link" auto-grow outlined hint="Cyber3ra Markdown" height="30px"></v-textarea>
                </v-col>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn color="primary" type="submit">Add</v-btn>
              </v-col>
            </v-row>
            </v-card-text>
          </v-card>
          <v-dialog v-model="markdown" width="300">
              <v-card>
                    <v-card-title class="d-flex justify-space-between">
                        Preview
                        <v-btn icon @click="markdown = false"><v-icon>mdi-close</v-icon></v-btn>
                    </v-card-title>
                  <v-card-text>
                            <Markdown :text="program.description" />
                  </v-card-text>
              </v-card>
          </v-dialog>
        </form>
        </v-stepper-content>

        <v-stepper-content step="2" class="pt-2">
        <form @submit.prevent="addbg">
          <v-card>
            <v-card-title>
              Add Background
            </v-card-title>
            <v-card-text>
              
            <v-row>
              <v-col v-if="bg.url" cols="12" class="d-flex justify-center">
                <v-spacer />
                <v-img :src="bg.url ? bg.url : ''" height="200" width="200"></v-img>
                <v-spacer />
              </v-col>
              <v-col v-else cols="12" class="d-flex justify-center">
                <v-sheet width="200" height="200" color="grey"></v-sheet>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn color="secondary" @click="$refs.bg.click()"><v-icon small class="mr-2">mdi-camera</v-icon> {{bg.url ? 'Change' : 'Select'}}</v-btn>
                <input id="bg" ref="bg" type="file" name="bg" hidden required @change="inputChange" >
              </v-col>
              <v-col v-if="bg.url" cols="12" class="text-center">
                <v-btn color="primary" outlined type="submit">Submit</v-btn>
              </v-col>
            </v-row>
            </v-card-text>
          </v-card>
          <v-dialog v-model="markdown" width="300">
              <v-card>
                    <v-card-title class="d-flex justify-space-between">
                        Preview
                        <v-btn icon @click="markdown = false"><v-icon>mdi-close</v-icon></v-btn>
                    </v-card-title>
                  <v-card-text>
                            <Markdown :text="program.description" />
                  </v-card-text>
              </v-card>
          </v-dialog>
        </form>
        </v-stepper-content>
      </v-stepper-items>
      </v-stepper>
    </div>
</template>

<script>
import Markdown from "../universal/Markdown.vue"
export default {
    name: 'AddProgramComponent',
    components: {
        Markdown
    },
    props: {
        scs: {type: Array, default() { return [] } },
        users: {type: Array, default() { return [] } },
    },
    data() {
        return {
            loading: false,
            program: {
                type: '',
                title: '',
                description: ``,
                low: 100,
                mid: 500,
                high: 1000,
                critic: 2000,
                splitting: false,
                managed: false,
                scopes: [],
                users: [],
                present : false,
                external : null,
                
            },
            bg: {name: '',file: null,url: null},
            markdown: false,
            e1: 1,
            // search: ''
        }
    },
    methods: {
        async addprogram () {
            this.loading = true;
            // await console.log(this.program.users)
            // await console.log(this.program.type, this.program.users.length)
            await console.log(this.program)
            if(this.program.scopes.length < 1){
              this.$store.commit('showSnack', { message: 'Please add atleast one Scope', type: 'error', timeout: 6000 })
              return 0;
            }
            if(this.program.type === 'PRI'){
              if(this.program.users.length < 1){
                this.$store.commit('showSnack', { message: 'Please invite atleast one User', type: 'error', timeout: 6000 })
                return 0;
              }
            }
            try {
                const resp = await this.$axios.post('/app/main/programs', this.program
                )
                if(!resp.data.error){
                    this.e1 = 2
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        },
        inputChange(e) {
          this.bg = { name : e.target.files[0].name,file : e.target.files[0], url: URL.createObjectURL(e.target.files[0])}
        },
        async addbg () {
            this.loading = true;
            // await console.log(this.program.scopes)
            const formdata = new FormData();
            // formdata.append('photo', e.target.files);
            formdata.append('photo', this.bg.file, this.bg.name);
            try {
                const resp = await this.$axios.post('/app/main/setbackground/'+this.program.title, formdata
                )
                if(!resp.data.error){
                    // this.$router.push({path: this.localePath('search'), query: {q: this.q}});
                    this.$router.push('/p/?'+this.program.title);
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        },
    }
}
</script>