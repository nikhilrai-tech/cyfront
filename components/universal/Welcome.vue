<template>
  <div v-if="display" class="welcome-new">
    <v-dialog v-model="show" width="100%" persistent content-class="welcome-diag" hide-overlay>
      <v-card dark>
        <v-card-title>
          <!-- Welcome  -->
        </v-card-title>
        <v-card-text :class="`focus-${step < 3 ? 'true' : focused ? 'true' : 'false'}`">
          <div style="min-height: 500px;">
            <span id="text" class="welcome-text " :class="{'typing': step==0}">
              <span class="order">{{'>>> '}}</span>
            </span>
            <br>
            <br>
            <span id="text2" class="welcome-text" :class="{'typing': step==1,'d-none': step==0,}">
              <span class="order">{{'>>> '}}</span>
            </span>
            <br>
            <br>
            <span id="text3" class="welcome-text" :class="{'typing': step==2,'d-none': step<2,}">
              <span class="order">{{'>>> '}}</span>
            </span>
            <br>
            <br>
            <span id="text4" class="welcome-text" :class="{'typing': step==3,'d-none': step<3,}">
              <span class="order">{{'>>> '}} {{value}}</span>
              <input ref="ghost" v-model="value" type="text" class="ghost-input d-nonecs" @keyup.enter="onEnter" @focus="focused = true" @blur="focused = false" >
            </span>
            <br>
            <br>
            <span id="text4" class="welcome-text" :class="{'typing': step==4,'d-none': step<4,}">
              <span class="order">{{'>>> '}}</span>
              <span id="text5" class="order progress-wrap">[<span v-for="ind in i" :key="`prog-${ind}`" class="progress-bar"></span> 
              </span>
            </span>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-overlay :value="step2 < 6" :class="`wel-overlay overlay-step-${properties[step2].class}`"></v-overlay>




    <v-dialog v-model="ins" width="250" persistent :content-class="`${properties[step2].class}-dialog`" hide-overlay>
      <v-card>
        <v-card-title>
          {{properties[step2].title}}
        </v-card-title>
        <v-card-text>
          {{properties[step2].desc}}
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="step2==1" text @click="ins = false">Cancel</v-btn>
          <v-btn v-else-if="step2==5" @click="step2 = 6;ins=false">No, Got it</v-btn>
          <v-btn v-else text @click="step2 -= 1">Previous</v-btn>
          <v-spacer></v-spacer>
          <a v-if="step2==5" target="_blank" href="/usermanual.pdf"><v-btn color="primary">Download</v-btn></a>
          <v-btn v-else-if="step2==4" color="primary" text @click="step2+=1">OK</v-btn>
          <v-btn v-else color="primary" text @click="step2+=1" >Next</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
    name: 'WelcomeComponent',
    props: {
        display: { type: Boolean, default() {return false} },
        done: { type: Function, default(){ return ()=> console.log('no function [rpvided')}}
    },
  data () {
    return {
      show: true,
      focused: false,
      value: '',
      step: 0,
      step2: 0,
      string: `Hello ${this.$auth.user ? this.$auth.user.name : 'User'}, Welcome to Cyber3ra. We are here to explore Cyber3ra's New App`,
      string2: `Let's get to the new era, Are you ready to begin?`,
      string3: `Press E to Begin; 0 to Exit;`,
      i: 0,
      timings: [50,400, 500, 50, 30, 50, 200, 400, 300, 400, 50],
      ins: false,
      properties: [
        {title: 'None', desc: 'This is Test', class: 'none'},
        {title: 'Navbar', desc: 'This is Navbar, where all the main links will be visible.', class: 'navbar'},
        {title: 'Notifications', desc: 'All your Notifications can be accessed through the icon right here', class: 'notifications'},
        {title: 'User Details', desc: 'The Icon is a Menu with several Profile related Options', class: 'profile'},
        {title: 'Search', desc: 'This is Searchbar, you can search whatever you want from here', class: 'search'},
        {title: 'Stuck Somewhere?', desc: 'You can download the User Manual for more precise description of the app.', class: 'stuck'},
        {title: 'Done', desc: 'Tour Completed.', class: 'done'},
      ]
    }
  },
  watch: {
    ins(to, from) {
      console.log('new : ', to, 'old : ',from)
      if(!to){
        console.log('yeah new ',this.step2,to)
        if(this.step2 === 6){
          console.log('setting/....')
          localStorage.setItem("new_user", "true");
          this.ins = false
        }
        else{
          this.ins = true
        }
      }
      else{
        this.ins = true
      }
    }
  },
  mounted() {
    // console.log(this.display)
    if(this.display){
        this.type()
    }
  },
  methods: {
    type() {
      if (this.i < this.string.length) {
        document.getElementById("text").innerHTML += this.string.charAt(this.i);
        this.i++;
        setTimeout(this.type, 50);
      }
      else{
        setTimeout(()=>{this.i = 0;this.step += 1;this.type2()}, 1000);
      }
    },
    type2() {
      if (this.i < this.string2.length) {
        document.getElementById("text2").innerHTML += this.string2.charAt(this.i);
        this.i++;
        setTimeout(this.type2, 50);
      }
      else{
        setTimeout(()=>{this.i = 0;this.step += 1;this.type3()}, 500);
      }
    },
    type3() {
      if (this.i < this.string3.length) {
        document.getElementById("text3").innerHTML += this.string3.charAt(this.i);
        this.i++;
        setTimeout(this.type3, 50);
      }
      else{
        setTimeout(()=>{this.i = 0;this.step += 1;this.$nextTick(() => {
        this.$refs.ghost.focus()
      })}, 200);
      }
    },
    onEnter(e) {
      // console.log('going in......')
      // this.show = false
      console.log(e.keyCode)
      if(this.value==='e' || this.value === 'E'){
        // console.log('entering')
        this.step += 1
        // console.log(this.step)
        this.type4()
        localStorage.setItem("new_user","true")
      }
      else if(this.value === '0') {
        // console.log('exiting')
        this.$router.push('/')
      }
      else{
        // console.log('err')
        this.$store.commit('showSnack', { message: 'Please enter valid input', type: 'error', timeout: 2000 })
      }
    },
    type4() {
      if (this.i < 20) {
        // document.getElementById("text4").innerHTML += this.string3.charAt(this.i);
        this.i++;
        setTimeout(this.type4, this.timings[Math.floor(Math.random()*this.timings.length)]);
      }
      else{
        
        document.getElementById("text5").innerHTML += ' ]';
      //   setTimeout(()=>{this.i = 0;this.step += 1;this.$nextTick(() => {
      //   this.$refs.ghost.focus()
      // })}, 200);
      setTimeout(() => {
        this.show = false;
        this.ins = true;
        this.step2 +=1
      }, 700);
      }
    },
  },
  // beforeMount() {
  //   const show = localStorage.getItem("done");
  //   if (show) {
  //       if (show === "true") {
  //         this.show = false
  //       }
  //   }
  // },
  // created () {
  //   this.$store.subscribe((mutation, state) => {
  //     if (mutation.type === 'showSnack') {
  //       //   console.log(state)
  //       this.message = state.message
  //       this.color = state.type
  //       this.show = state.show
  //       this.timeout = state.timeout
  //     }
  //   })
  // }
}
</script>

<style scoped>
body {
  overflow: hidden !important;
}
.profile-icon {
  position: absolute;
  padding: 3px;
  background-color: white;
  border-radius: 50rem;
  z-index: 5200;
  right: 17px;
  top: 14px; 
}
.progress-bar {
  width: 30px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #149414;
  height: 50px;
  padding: 0px 8px;
}
@media (max-width: 576px) {
  .progress-bar {
    width: 10px;
    margin-left: 4px;
    margin-right: 4px;
    padding: 0px 4px;
  }
}
.ghost-input::-moz-selection { /* Code for Firefox */
  color: #0f1725;
  background: #0f1724;
}

.ghost-input::selection {
  color: #0f1725;
  background: #0f1724;
}
.ghost-input {
  caret-color: transparent;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
  color: #149414;
  color: transparent;
  outline: 0;
  border: none;
  background: transparent;
  width: 100%;
  position: absolute;
  left: 0;
  height: 100%;
  top: 0;
}
.default .v-overlay--active .v-overlay__scrim, .welcome-diag .v-overlay--active .v-overlay__scrim {
  opacity: 0.95 !important;
  background-color: rgb(10, 10, 10) !important;
}
.default .v-overlay--active {
  z-index: 7 !important;
}
.welcome-text {
  font-family: monospace !important;
  font-size: 25px;
  user-select: none;
}
.focus-true .typing {
  border-right: 5px solid #149414;
  padding-right: 5px;
  animation: type 500ms infinite;
}
.order {
  color: #149414;
  text-shadow: 2px 2px 5px #149414;
  font-family: monospace !important;
  margin-right: 5px;
}
@keyframes type {
  0% {
    border-right: 5px solid #149414;
  }
  50%{
    border-right: 5px solid transparent;
  }
  100% {
    border-right: 5px solid #149414;
  }
}
</style>