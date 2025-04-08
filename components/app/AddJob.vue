<template>
    <div>
        <form @submit.prevent="addjob">
          <v-card>
            <v-card-title>
              Add Job
            </v-card-title>
            <v-card-text>
              
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field v-model="job.title" placeholder="Job Title/Designation" outlined />
              </v-col>
              <v-col cols="12" sm="4">
                <v-select 
                  v-model="job.type" outlined item-text="name" item-value="val" placeholder="Job Type"
                  :items="[{name: 'Contract', val: 'C'},{name: 'Full Time', val: 'F'}]"
                   ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field v-model="job.link" placeholder="Job Link" outlined />
              </v-col>
              <v-col cols="12" sm="12">
                  <v-btn text @click="markdown=true">Preview</v-btn>
                <v-textarea v-model="job.description" placeholder="Job Description" auto-grow outlined hint="Cyber3ra Markdown"></v-textarea>
              </v-col>
              
              <v-col cols="12" sm="4">
                <v-switch v-model="job.remote" label="Remote Friendly"></v-switch>
              </v-col>
              <v-col cols="12" sm="4">
                <v-switch v-model="job.out" label="Out of Scope"></v-switch>
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
                            <Markdown :text="job.description" />
                  </v-card-text>
              </v-card>
          </v-dialog>
        </form>
    </div>
</template>

<script>
import Markdown from "../universal/Markdown.vue"
export default {
    name: 'AddJobComponent',
    components: {
        Markdown
    },
    props: {
        scs: {type: Array, default() { return [] } }
    },
    data() {
        return {
          loading: false,
          job: {
              type: '',
              title: '',
              description: ``,
              link: '',
              out: false,
              remote: false,
          },
          markdown: false,
        }
    },
    methods: {
        async addjob () {
            this.loading = true;
            // await console.log(this.job.scopes)
            try {
                const resp = await this.$axios.post('/app/main/jobs', this.job
                )
                if(!resp.data.error){
                    this.job = {
                      type: '',
                      title: '',
                      description: ``,
                      link: '',
                      out: false,
                      remote: false,
                    };
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        },
    }
}
</script>