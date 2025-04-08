<template>
  <v-row justify="center" align="center" class="my-4">
    <v-col cols="12" sm="6" md="3">
      
      <v-dialog v-model="dialog" width="400" persistent>
        <form @submit.prevent="newcontact">
          <v-card :loading="loading">
            <v-card-title></v-card-title>
              <v-card-actions>
                  <v-row class="px-0c mx-0">
                      <v-col cols="12" class="text-center d-flex justify-center py-0 px-0c">
                          <!-- <p class="text-caption">or</p> -->
                          <img src="/logo.svg" class="align-self-center" width="50" height="50" />
                      </v-col>
                      <v-col cols="12" class="text-center py-0 px-0c">
                          <p class="text-caption" style="font-family: Monospace !important;">$ whoami </p>
                      </v-col>
                  </v-row>
              </v-card-actions>
            <v-stepper v-if="!submitted" v-model="e1" color="transparent" style="background: transparent !important;">
              <!-- <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">Details</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="e1 > 2" step="2">Type</v-stepper-step>
              </v-stepper-header> -->

              <v-stepper-items>
                <v-stepper-content step="1" class="pt-2">
                  <v-card class="mb-12 pt-2" color="transparent" flat>
                    <v-text-field v-model="name" required outlined placeholder="Company Name" class="pb-0" />
                    <v-text-field v-model="email" required outlined placeholder="Official Email" class="pb-0" />
                    <v-text-field v-model="username" required outlined placeholder="Preferred Username" class="pb-0" />
                    <v-text-field v-model="password" type="password" required outlined placeholder="Set Password" hide-details class="pb-0" @keyup.enter="handleEnter" />
                  </v-card>

                  <v-btn color="primary" @click="next">Continue</v-btn>
                </v-stepper-content>

                <v-stepper-content step="2" class="pt-2">
                  <v-card class="mb-12 pt-2" color="transparent" flat>
                    <v-card-subtitle class="pl-0">Choose Plan
                        <v-menu open-on-hover :close-on-content-click="false" :nudge-width="200" offset-x >
                            <template #activator="{ on, attrs }">
                                <v-icon small v-bind="attrs" v-on="on">mdi-help-circle</v-icon>
                            </template>

                            <v-card width="300">
                                <v-card-text>About Cyber3ra Plans</v-card-text>
                                <v-divider />
                                <v-card-text>
                                  <strong>Startup</strong> This is the basic Startup plan with benefits etc.
                                </v-card-text>
                                <v-card-text>
                                  <strong>Enterprise</strong> This is the Enterprise level.
                                </v-card-text>
                                <v-card-text>
                                  <strong>Managed</strong> It would be signed up and managed.
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer />
                                    <v-btn color="primary" text router to="/awards" small > Learn More </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-menu>
                    </v-card-subtitle>
                    <v-select v-model="type" item-text="label" item-value="value" :items="types" outlined ></v-select>
                    <v-text-field v-model="contact" required outlined placeholder="Contact Number" class="pb-0" />
                    <!-- <v-select v-model="reason" item-text="label" required item-value="value" :items="reasons" outlined ></v-select> -->
                  </v-card>

                  <v-btn color="primary" type="submit">Send</v-btn>

                  <v-btn text @click="e1 = 1">Go Back</v-btn>
                </v-stepper-content>

              </v-stepper-items>
            </v-stepper>
            <v-card v-if="submitted">
              <v-card-title>Successful</v-card-title>
              <v-card-subtitle>An Email has been sent to you. Please follow the instructions accordingly.</v-card-subtitle>
            </v-card>
          </v-card>
        </form>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
// import Register from "../../components/auth/Register.vue" 
export default { 
  name: 'CompanySignupPage',
  layout: 'auth',
  data () {
    return {
      e1: 1,
      dialog: true,
      name: '',
      email: '',
      username: '',
      password: '',
      contact: '',
      loading: false,
      submitted: false,
      type: { label: 'Startup', value: 'S' },
      types: [
        { label: 'Startup', value: 'S' },
        { label: 'Enterprise', value: 'E' },
        { label: 'Managed', value: 'M' },
      ],
      reason: '-',
      reasons: [
        '-',
        'I would like to talk to sales',
        'I would like a product demo',
        'I would like to partner with Cyber3ra',
        'I just want to Signup'
      ],
    }
  },
  head() {
    return {
      title: 'Sign Up',
    }
  },
  methods: {
    handleEnter (e) {
      e.preventDefault()
      console.log(e.keyCode)
      if(e.keyCode===13){
        this.next()
      }
    },
    next () {
      const re = /\S+@\S+\.\S+/;
      if(this.name.length < 1 || this.email.length < 1 || this.username.length < 1){
        this.$store.commit('showSnack', { message: 'Please add everything peoperly', type: 'warning', timeout: 5000 })
        // console.log(this)
        return 0;
      }
      if (re.test(this.email)) {
          // console.log('valid')
      } else {
          this.$store.commit('showSnack', { message: 'Please enter a valid Email', type: 'warning', timeout: 5000 })
          return 0;
      }
      this.e1 = 2
    },
    async newcontact () {
      // if(this.reason === '-'){
      //   return 0;
      // }
      this.loading = true;
      const post = {
          username: this.username,
          name: this.name,
          email: this.email,
          password: this.password,
          reason: this.reason,
          type: this.type,
          contact: this.contact
      }
      if(this.referred) {
          post.refcode = this.refcode
      }
      try {
          const resp = await this.$axios.post('/app/accounts/companysignup',post);
        //  console.log(resp.data);
          if(!resp.data.error){
            this.submitted = true;
          }
      }
      catch (e) {
          console.log('Error : ',e);
      }
      this.loading = false;
    }
  }
}
</script>
