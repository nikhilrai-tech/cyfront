
<template>
  <div>
    <v-row justify="center" align="center" class="mainc">
      <v-col cols="12" sm="6" md="6" class="pl-6 py-2" align="center">
      <h1 class="titlemain">
          Pay a <span className='mobile-block'></span> Reward
      </h1>
      <h1 class="titlemain">
       Not a <span className='mobile-block'></span> Ransom</h1>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="pl-6 py-2" >
          <!-- <img src="/cyber3ra.svg" alt="Cyber3ra"> -->
          <!-- <logo :type="'auto'" /> -->

      </v-col>
    <v-row justify="center" align="center" class="mainc">
    </v-row>
      <v-col cols="12" sm="6" md="6" align="center" class="pl-6 py-4" >
        <v-btn v-if="!$auth.loggedIn" color="secondary" to="/?action=register">Get Started</v-btn>
        <!-- <v-card width="400">Countdown</v-card> -->
      </v-col>
      <v-col cols="12" sm="6" md="6" class="pl-6 py-2" >
        
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="my-9">
      <v-col cols="12" sm="8" md="10">
        <v-card class="px-5 py-5">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="5" md="5" align="center">
              <h3 class="text-display-2c glitch2" data-glitch2="Why Evaluate your Security with Cyber3ra?">Why Evaluate your Security with Cyber3ra?</h3>
            </v-col>
            <v-col cols="12" sm="7" md="7" class="px-14 py-9">
                <p class="text-justify mb-0">Cyber threats are increasing tremendously - together with your needs for agility. As a result, 
                  traditional approaches and tools no longer meet the challenges of digital transformation. Cyber3ra and its community of experts 
                  provide you with a disruptive solution: Bug Bounty, which bridges the gap between ethical hackers and companies to test and patch 
                  security vulnerabilities in real-time.</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row justify="center" align="center" class="my-9">
      <v-col cols="12" sm="8" md="10">
        <v-card class="px-5 py-5">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="9" md="9" align="center" class="px-14 py-9">
              <h3 class="text-display-2c glitch2" data-glitch2="Leaderboards">Leaderboards</h3>
              <p>
                Early invites: We are inviting Cyber Security professionals and Enthausits to sign up, and the top 3 enthusiasts will receive 
                exclusive merchandising and access to early programs. In addition, the top 100 will receive free training and access to private programs.

                Bug bounty programs permit free security analysts to report bugs to an association and get prizes or remuneration. These bugs are typically 
                security endeavours and weaknesses. However, they can likewise incorporate interaction issues, equipment imperfections, etc.
              </p>
            </v-col>
            <v-col cols="12" sm="3" md="3" class="px-14 py-9">
              <!-- <v-app-bar >
                <v-app-bar-title>Leaderbaord</v-app-bar-title>
              </v-app-bar> -->
              <v-simple-table fixed-header>
                <template #default>
                  <thead>
                    <tr ><th class="text-left ">Rank</th><th class="text-left ">Name</th><th class="text-left">Reputation</th></tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, i) in users" :key="user.username">
                      <td>{{ i+1 }}</td>
                      <td>{{ user.username }}</td>
                      <td>{{ user.totalreputation }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row justify="center" align="center" class="my-9">
      <v-col cols="12" sm="8" md="10">
        <v-card class="px-5 py-5">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="4" md="4" align="center">
              <h3 class="text-display-2c glitch2" data-glitch2="About Us"> About Us</h3>
            </v-col>
            <v-col cols="12" sm="8" md="8" class="px-14 py-9">
                <p class="text-justify mb-0">
                  Cyber3ra is INDIA's first crowdsourced ethical bug bounty platform which bridges the gap between companies and ethical hackers. 
                  We offer bug bounty solutions where companies can run and manage their bug bounty programs, and security enthusiasts can test and report potential 
                  threats and vulnerabilities in those programs. A bug bounty is a way to crowdsource and identify potential threats and vulnerabilities on web applications 
                  and safeguard them
                    We Proudly Stand as one of the fastest growing Cyber Security and Technology Based Community and Company.
                </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row justify="center" align="center" class="my-9">
      <v-col cols="12" sm="8" md="10">
        <v-card class="px-5 py-5">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="5" md="5" align="center">
              <h3 class="text-display-2c glitch2" data-glitch2="Want to hunt bugs?">Want to hunt bugs?</h3>
            </v-col>
            <v-col cols="12" sm="7" md="7" class="px-14 py-9">
                <p class="text-justify mb-0">
                  Get started with the bug bounty journey with us and help companies get the digital ecosystem secured and earn out of 
                  it. Sounds interesting – Join now to get started
                </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row justify="center" align="center" class="my-9">
      <v-col cols="12" sm="8" md="10">
        <v-card class="px-5 py-5">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="7" md="7" align="center">
              <h3 class="text-display-2c glitch2" data-glitch2="Want to Start a Bug Bounty Program?">Want to Start a Bug Bounty Program?</h3>
            </v-col>
            <v-col cols="12" sm="5" md="5" class="px-14 py-9">
                <p class="text-justify mb-0">
                  "Precaution is always better than Cure" - Start your bug bounty program today itself and protect your organization 
                  and data from cyber-attacks. Now what are you waiting for - Enquire Now
                </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row justify="center" align="center" class="my-9">
      <v-col cols="12" sm="8" md="10">
        <v-card class="px-5 py-5">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="7" md="7" align="center">
              <h3 class="text-display-2c glitch2" data-glitch2="Contact Us">Contact Us</h3>
            </v-col>
            <v-col cols="12" sm="5" md="5" class="px-14 py-9">
                <!-- <p class="text-justify mb-0">
                  Contact Form
                </p> -->
                <Contact />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

  </div>
              <!--<v-card-actions>
                <v-spacer />
                 <v-btn color="primary" nuxt to="/login"> Continue </v-btn> 
                <v-btn color="secondary" > Continue </v-btn>
                <v-btn color="error" > Continue </v-btn>
                <v-btn color="success" > Continue </v-btn>
                <v-btn color="warning" > Continue </v-btn>
                <v-btn color="info" > Continue </v-btn>
                <v-btn color="accent" > Continue </v-btn> 
              </v-card-actions>-->
</template>

<script>
import Contact from "../components/universal/Contact.vue"
// import Logo from '~/components/universal/Logo.vue'
export default {
  name: 'IndexPage',
  components: {
    Contact,
    // Logo,
  },
  layout: 'index',
  async asyncData({ store, $axios, app }) {
    // console.log(app.$auth.strategy.token.get())
    let resp
    try{
      if(store.state.auth.loggedIn){
        resp = await $axios.get('/app/accounts/authusers', 
        // { headers: {"Authorization" : app.$auth.strategy.token.get()} }
        )
        return {
          users: resp.data.users, current: resp.data.current
        }
      }
      else{
        resp = await $axios.get('/app/accounts/nonauthusers')
        return {
          users: resp.data
        }
      }
    // console.log(context.authenticated);
    // console.log(resp.data)
      
    }
    catch(e){
      console.log(e)
      return {
        users: [],
        current: 112,
      }
    }
  },
  data () {
    return {
      users: this.users
    }
  }
}

</script>

<style lang="scss" scoped>
// .v-application .background {
//     background-color: #051f4a;
// }
.theme--dark.v-data-table {
      background-color: rgba(5,14,29,1) !important;
    // color: #FFFFFF;
}
.theme--dark.v-data-table.v-data-table--fixed-header thead th {
    background: rgb(2, 6, 14);
}
.theme--light.v-data-table.v-data-table--fixed-header thead th {
    background: rgb(235, 237, 241);
}
.theme--dark.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
      // background-color: rgb(10, 22, 44) !important;
      background-color: rgba(5,14,29,1) !important;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
      // background-color: rgb(10, 22, 44) !important;
      background-color: rgb(255, 255, 255) !important;
}
.theme--dark.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--dark.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:last-child {
    border-bottom: none;
}
.theme--dark.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: #9ac9ff;
  text-shadow: 0 0 0.15em #58a6ff;
}
.theme--dark .v-card {
    background-color: rgba(5,14,29,0.533) !important;
    border-radius: 30px;
}
.theme--light .v-card {
    background-color: rgba(233,243,255,0.2) !important;
}
.glitch2 {
  font-size: 1.5rem;
  font-family: Rajdhani,"Segoe UI Emoji";
  font-weight: 400;
  line-height: 1.334;
  -webkit-transform: translate(-.1%,-.1%);
  transform: translate(-.1%,-.1%);
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 5px;
}
  
.glitch2 {
	text-decoration: none;
	text-transform: uppercase;
	transform: translate(-0.1%, -0.1%);
	margin: 0;
	letter-spacing: 5px;
	
	&:before, &:after {
		display: block;
		content: attr(data-glitch2);
		text-transform: uppercase;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		opacity: .8;
	} &:after {
		color: #f0f;
		z-index: -102;
        // margin-top: -1.3em;
	} &:before {
		color: #0ff;
		z-index: -102;
	}
	&:hover {
		&:before {
			animation: glitch2 .3s cubic-bezier(.25, .46, .45, .94) both infinite
		}
		&:after {
			animation: glitch2 .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite
		}
	}
}

@media only screen and (max-width: 400px) {
	.glitch2 {
		font-size: 15px;
		letter-spacing: 1px !important;
	}
}

@media (max-width: 768px) {
	.glitch {
		// font-size: 3em;
        font-size: 1.7em !important;
	}
	.glitch2 {
		// font-size: 3em;
        font-size: 20px !important;
		letter-spacing: 2px !important;
	}
}


@keyframes glitch2 {
	0% {
		transform: translate(0)
	}
	20% {
		transform: translate(-2px, 2px)
	}
	40% {
		transform: translate(-2px, -2px)
	}
	60% {
		transform: translate(2px, 2px)
	}
	80% {
		transform: translate(2px, -2px)
	}
	to {
		transform: translate(0)
	}
}







</style>

















<style scoped>
/* * {
    transition: all 500ms ease !important;
    transition-delay: 0ms !important;
} */


input, textarea, button, select, a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.text-justify {
    text-align: justify;
    text-justify: inter-word;
  }

.titlemain {
    font-style: italic;
    font-size: 100px;
    font-weight: 700;
    color: var(--head-text);
    margin-left: 0%;
    margin-top: 5%;
    animation: titleAnimation 2s infinite;
}


.main {
    min-height: 1000px;
}

.getstarted  {
    position: relative;
    border: none;
    box-shadow: var(--secondary);
    cursor: pointer;
    -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}

.mobile-block {
    display: none;
}

.subtitle {
    font-family: 'Positive';
    font-weight: 600;
    /* text-transform: uppercase; */
    letter-spacing: 2px;
    font-size: 20px;
    line-height: 40px;
    color: var(--head-text2);
}

@media (max-width: 300px) {    
    .titlemain {
        /* font-family: 'Hack';
        font-style: italic; */
        font-size: 70px;
        font-weight: 600;
        margin-top: 10%;
    }
    .main-content {
        background-position: right top;
    }
    .getstarted  {
        transform: none;
        -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
        -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
        -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
        animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    }
    .mobile-block {
        display: block;
    }
}







  
  @-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
  @-moz-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
  @-ms-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
  @keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}




/* @-webkit-keyframes titleAnimation {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@-moz-keyframes titleAnimation {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@-ms-keyframes titleAnimation {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}} */

@keyframes titleAnimation {
    0% {
        text-shadow: none;
        margin-left: 0%;
    }
    3% {
        margin-left: 0%;
        text-shadow: none;
    }
    5% {
        /* background-color: turquoise; */
        margin-left: calc(0% + 2px);
        text-shadow: -3px -3px 0px turquoise;
    }
    0% {
        margin-left: 0%;
        text-shadow: none;
    }
    13% {
        margin-left: 0%;
        text-shadow: 3px 3px 0px purple;
    }
    15% {
        margin-left: calc(0% + 2px);
        text-shadow: 6px 6px 0px purple;
    }
    10% {
        margin-left: 0%;
        text-shadow: 3px 3px 0px turquoise;
    }
    19% {
        margin-left: 0%;
        text-shadow: -3px 3px 0px pink;
    }
    21% {
        margin-left: calc(0% + 2px);
        text-shadow: none;
    }
    23% {
        margin-left: 0%;
        text-shadow: none;
    }
    40% {
        margin-left: 0%;
        text-shadow: none;
    }
    50% {
        margin-left: calc(0% - 2px);
        text-shadow: 3px -3px 0px turquoise;
    }
    53% {
        margin-left: 0%;
        text-shadow: -3px -3px 0px turquoise;
    }
    63% {
        margin-left: 0%;
        text-shadow: none;
    }
    66% {
        margin-left: calc(0% + 2px);
        text-shadow: none;
    }
    69% {
        margin-left: calc(0% - 1px);
        text-shadow: 3px 3px 0px turquoise;
    }
    72% {
        margin-left: calc(0% + 1px);
        text-shadow: 3px 3px 0px pink;
    }
    75% {
        margin-left: calc(0% - 1px);
        text-shadow: none;
    }
    78% {
        margin-left: calc(0% + 1px);
        text-shadow: 3px 3px 0px pink;
    }
    81% {
        margin-left: calc(0% - 1px);
        text-shadow: -3px -3px 0px turquoise;
    }
    84% {
        margin-left: calc(0% + 1px);
        text-shadow: 3px 3px 0px pink;
    }
    80% {
        margin-left: calc(0% - 1px);
        text-shadow: -3px -3px 0px turquoise;
    }
    90%{
        margin-left: 0%;
        text-shadow: 3px 3px 0px pink;
    }
    93% {
        text-shadow: -3px -3px 0px turquoise;
    }
    95% {
        text-shadow: none;
    }
    90% {
        text-shadow: none;
    }
    99% {
        text-shadow: 3px 3px 0px pink;
    }
    100%{
        margin-left: 0%;
        text-shadow: none;
    }
}
</style>