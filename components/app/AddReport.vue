<template>
    <div>
    <form @submit.prevent="addreport">
        <v-card-title>Submit Report</v-card-title>
        <v-card>
          <v-card-text>
            You're about to submit a report to {{company}}. Try to provide as much information as possible.
          </v-card-text>
        </v-card>
        <v-timeline dense :dark="$vuetify.theme.dark">
        <v-slide-x-reverse-transition group hide-on-leave >
          <v-timeline-item key="1" color="info" small >
            <v-card>
              <v-card-title>Select Asset</v-card-title>
              <v-card-text class="d-flex justify-end">
                <v-select v-model="asset" outlined class="d-inline-block w-auto" style="max-width: 200px;" :items="assets" placeholder="Filter Assets" @change="change"></v-select>
              </v-card-text>
              <v-card-text>
                <v-autocomplete v-model="report.scope" label="Asset Type" outlined item-value="id" item-text="type" :items="scopes" >
                  <template #selection="data">
                      <v-chip v-bind="data.attrs" :input-value="data.selected" close @click="data.select" @click:close="remove(data.item)" >
                        <v-avatar left>
                                <v-icon :class="severities[data.item.severity]" >{{data.item.severity}}</v-icon>
                        </v-avatar>
                        {{data.item.type}} | {{data.item.domain}}
                      </v-chip>
                  </template>
                    <template #item="data">
                        <!-- <v-list-item :key="data.item.id"> -->
                            <v-list-item-avatar size="20">
                                <v-icon :class="severities[data.item.severity]" >{{data.item.severity}}</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{data.item.type}}</v-list-item-title>
                                <v-list-item-subtitle>{{data.item.domain}}</v-list-item-subtitle>
                            </v-list-item-content>
                        <!-- </v-list-item> -->
                    </template>
                </v-autocomplete>

              </v-card-text>
            </v-card>
            <!-- <v-alert :value="true" color="info" icon="mdi-information" class="white--text" >
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-alert> -->
          </v-timeline-item>
          <v-timeline-item key="2" color="warning" small >
            <v-card>
              <v-card-title>Select Weakness</v-card-title>
              <v-card-text class="d-flex justify-end">
                <v-select v-model="cluster" item-text="name" item-value="id" outlined class="d-inline-block w-auto" style="max-width: 200px;" :items="clusters" placeholder="Filter Weaknesses" @change="change2"></v-select>
              </v-card-text>
              <v-card-text>
                <v-autocomplete v-model="report.weakness" label="Select Weakness" outlined item-value="id" item-text="name" :items="weaknesses" >
                  <template #selection="data">
                      <v-chip v-bind="data.attrs" :input-value="data.selected" close @click="data.select" @click:close="remove2(data.item)" >
                        {{data.item.name}} | {{data.item.external_id}}
                      </v-chip>
                  </template>
                    <template #item="data">
                            <v-list-item-content>
                                <v-list-item-title>{{data.item.name}}</v-list-item-title>
                                <v-list-item-subtitle>{{data.item.external_id}}</v-list-item-subtitle>
                            </v-list-item-content>
                    </template>
                </v-autocomplete>

              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item key="3" color="error" small >
            <v-card>
              <v-card-title>Select Severity</v-card-title>
              <v-card-text>
                  <v-btn-toggle v-model="report.severity" small color="info" background-color="transparent">
                    <v-btn value="N" outlined color="info">None</v-btn>
                    <v-btn value="L" outlined color="success">Low</v-btn>
                    <v-btn value="M" outlined color="warning">Medium</v-btn>
                    <v-btn value="H" outlined color="error">High</v-btn>
                    <v-btn value="C" outlined color="red darken-4">Critical</v-btn>
                </v-btn-toggle>
              </v-card-text>
              <v-card-text>
                  Selected: 
                <span v-if="report.severity === 'N'" class="d-flex align-center"> <span class="rounded-circle info mr-1" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"> None</span></span>
                <span v-if="report.severity === 'L'" class="d-flex align-center"> <span class="rounded-circle success mr-1" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"> Low</span></span>
                <span v-if="report.severity === 'M'" class="d-flex align-center"> <span class="rounded-circle warning mr-1" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"> Medium</span></span>
                <span v-if="report.severity === 'H'" class="d-flex align-center"> <span class="rounded-circle error mr-1" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"> High</span></span>
                <span v-if="report.severity === 'C'" class="d-flex align-center"> <span class="rounded-circle red darken-4 mr-1" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"> Critical</span></span>
              </v-card-text>
              
            </v-card>
          </v-timeline-item>
          <v-timeline-item key="4" color="success" small >
            <v-card>
              <v-card-title>Proof of Concept</v-card-title>
              <v-card-text>
                <v-col cols="12" sm="12">
                    <v-text-field v-model="report.title" label="Title*" placeholder="Title*" outlined required  />
                </v-col>
                <v-col cols="12" sm="12">
                    <v-btn text @click="descprev=true">Preview</v-btn>
                    <v-textarea v-model="report.description" label="Description/Summary*" placeholder="Description/Summary*" auto-grow outlined hint="Cyber3ra Markdown" required ></v-textarea>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-btn text @click="impactprev=true">Preview</v-btn>
                    <v-textarea v-model="report.impact" label="Impact*" placeholder="Enter Impact*" auto-grow outlined hint="Cyber3ra Markdown" required ></v-textarea>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-btn color="secondary" @click="$refs.images.click()" >Attach Images</v-btn>
                    <input id="images" ref="images" type="file" name="images" accept="image/*" hidden multiple maxlength="3" @change="inputChange" >
                    <v-card-text v-if="report.images.length > 0">
                      Attached: 
                      <span v-for="(image, index) in report.images" :key="index">
                        {{image.name}}
                      </span>
                    </v-card-text>
                </v-col>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-slide-x-reverse-transition>
      </v-timeline>
        <v-dialog v-model="impactprev" width="300">
            <v-card>
                <v-card-title class="d-flex justify-space-between">Preview<v-btn icon @click="impactprev = false"><v-icon>mdi-close</v-icon></v-btn></v-card-title>
                <v-card-text><Markdown :text="report.impact" /></v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog v-model="descprev" width="300">
            <v-card>
                <v-card-title class="d-flex justify-space-between">Preview<v-btn icon @click="descprev = false"><v-icon>mdi-close</v-icon></v-btn></v-card-title>
                <v-card-text><Markdown :text="report.description" /></v-card-text>
            </v-card>
        </v-dialog>

        <v-card>
        <v-card-title>Submit Your Report</v-card-title>
          <v-card-text>
            By Clicking 'Submit', you agree to our Terms and Conditions and acknowledge that you have read our Privacy Policy.
          </v-card-text>
          <v-card-text class="d-flex justify-end"><v-btn color="info" type="submit" outlined>Submit</v-btn></v-card-text>
        </v-card>
    </form>
    </div>
</template>

<script>
import Markdown from "../universal/Markdown.vue"
export default {
    name: 'AddReportComponent',
    components: {
        Markdown
    },
    props: {
        scs: {type: Array, default() { return [] } },
        company: {type: String, default(){ return ''}},
        assets: {type: Array, default(){ return this.scs.map(sc=> sc.type)}},
        program: {type: String, default(){ return ''}},
    },
    data() {
        return {
            loading: false,
            severities: {
              L: 'success',
              M: 'warning',
              H: 'error',
              C: 'red darken-4'
            },
            scopes: this.scs,
            report: {
                impact: ``,
                title: '',
                description: ``,
                severity: 'N',
                weakness: {},
                scope: {},
                images: []
            },
            asset: '',
            cluster: '',
            impactprev: false,
            descprev: false,
            // weakness: [
            //   {id: 0, type: 'Access Control'}
            // ],
            // weaktypes: ['Access Control','Cryptographic Issues', 'Insecure Interaction Between Components', 'Memory Corruption', 'Porous Defenses','Risky Resource Management', 
            // 'Secure Design','Tainted Input']
            weakness: require("./objs").weaknesses,
            weaknesses: require("./objs").weaknesses,
            clusters: require("./objs").clusters
        }
    },
    // mounted() {
    // console.log(this.scs)
    // },
    methods: {
        async addreport () {
            const formdata = new FormData();
            this.loading = true;
            // const ims = []
            await console.log(this.report)
            for(let i=0;i<this.report.images.length;i++){
              // ims.append()
              formdata.append('photo'+i.toString(), this.report.images[i].file, this.report.images[i].name);
            }
            formdata.append('impact', this.report.impact)
            formdata.append('title', this.report.title)
            formdata.append('description', this.report.description)
            formdata.append('severity', this.report.severity)
            formdata.append('weakness', this.report.weakness)
            formdata.append('scope', this.report.scope)
            try {
                const resp = await this.$axios.post('/app/main/reports/'+this.program, formdata,
                { headers: {'Content-type': 'multipart/form-data',} } )
                console.warn(resp.data)
                if(!resp.data.error){
                    // this.program = {
                    //     type: '',
                    //     title: '',
                    //     description: ``,
                    //     low: 100,
                    //     mid: 500,
                    //     high: 1000,
                    //     critic: 2000,
                    //     splitting: false,
                    //     managed: false,
                    // };
                    // this.report= {
                    //     impact: ``,
                    //     title: '',
                    //     description: ``,
                    //     severity: 0,
                    //     weakness: {},
                    //     scope: {},
                    //     images: []
                    // },
                    this.$router.push('/inbox')
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        },
        remove() {
          this.report.scope = {}
        },
        remove2() {
          this.report.weakness = {}
        },
        change(val) {
          // console.log(val)
          if(val){
            // eslint-disable-next-line array-callback-return
            this.scopes = this.scs.map(sc => { 
              if(sc.type === val){ 
                return sc
              }
            })
          }
        },
        change2(val) {
          // console.log(val)
          if(val){
            // eslint-disable-next-line array-callback-return
            this.weaknesses = this.weakness.map(weak => { 
              if(val in weak.cluster_ids){ 
                return weak
              }
            })
          }
        },
        inputChange(e) {
          if(e.target.files.length > 3){
            this.$store.commit('showSnack', { message: 'Max Images Upto 3', type: 'warning', timeout: 5000 })
            return 0;
          }
            const ims = []
            for(let i=0;i<e.target.files.length;i++){
                ims.push({ name : e.target.files[0].name,file : e.target.files[0], url: URL.createObjectURL(e.target.files[0])})
            }
          this.report.images = ims
        },
    }
}
</script>