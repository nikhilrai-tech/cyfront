<template>
  <div>
    <v-row justify="center" align="center" class="mainc">
      <v-col cols="12" sm="6" md="6" class="pl-6 py-2" align="center">
        <h1 class="titlemain">
          <span class="threed-effect">Fortify Your Future with SecuriumX</span>
        </h1>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="pl-6 py-2">
        <!-- Placeholder for logo or other content -->
      </v-col>
    </v-row>

    <!-- Removed stray <v-row> and fixed structure -->
    <v-row justify="center" align="center" class="my-9 section-row">
      <v-col cols="12" sm="8" md="10">
        <v-card class="px-5 py-5">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="5" md="5" align="center">
              <h3 class="text-display-2c glitch2" data-glitch2="Why Evaluate your Security with SecuriumX?">Why Evaluate your Security with SecuriumX?</h3>
            </v-col>
            <v-col cols="12" sm="7" md="7" class="px-14 py-9">
              <p class="text-justify mb-0">
                In today's digital landscape, cyber threats evolve rapidly, demanding agile security solutions. Traditional methods often fall short in addressing these dynamic challenges. SecuriumX offers a cutting-edge approach through our Bug Bounty program, connecting companies with a global network of ethical hackers. This collaboration enables real-time identification and patching of vulnerabilities, ensuring your digital assets remain secure against the latest threats.
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="my-9 section-row">
      <v-col cols="12" sm="8" md="10">
        <v-card class="px-5 py-5">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="5" md="5" align="center">
              <h3 class="text-display-2c glitch2" data-glitch2="About Us">About Us</h3>
            </v-col>
            <v-col cols="12" sm="7" md="7" class="px-14 py-9">
              <p class="text-justify mb-0">
                SecuriumX is a pioneering platform in the cybersecurity industry, dedicated to enhancing digital security through crowdsourced ethical hacking. We connect businesses with a global network of skilled security researchers who identify and report vulnerabilities in real-time. Our bug bounty programs empower companies to proactively manage their cybersecurity, while providing ethical hackers with opportunities to showcase their skills and earn rewards. As a rapidly growing cybersecurity community and company, SecuriumX is committed to fostering a safer digital world through collaboration and innovation.
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="my-9 section-row">
      <v-col cols="12" sm="12" md="12">
        <v-row justify="space-around" align="center">
          <v-col cols="12" sm="4" md="4">
            <v-card class="px-5 py-5">
              <v-row justify="center" align="center">
                <v-col cols="12" align="center">
                  <h3 class="text-display-2c glitch2" data-glitch2="Want to Hunt Bugs?">Want to Hunt Bugs?</h3>
                </v-col>
                <v-col cols="12" class="px-14 py-9">
                  <p class="text-justify mb-0">
                    Embark on your bug bounty journey with SecuriumX. Help secure the digital ecosystem for companies while earning rewards. Ready to make an impact? Join now and start hunting!
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4" md="4">
            <v-card class="px-5 py-5">
              <v-row justify="center" align="center">
                <v-col cols="12" align="center">
                  <h3 class="text-display-2c glitch2" data-glitch2="Want to Start a Bug Bounty Program?">Want to Start a Bug Bounty Program?</h3>
                </v-col>
                <v-col cols="12" class="px-14 py-9">
                  <p class="text-justify mb-0">
                    "Prevention is better than cure." Launch your bug bounty program with SecuriumX today to safeguard your organization and data from cyber threats. Don't wait – inquire now!
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4" md="4">
            <v-card class="px-5 py-5">
              <v-row justify="center" align="center">
                <v-col cols="12" align="center">
                  <h3 class="text-display-2c glitch2" data-glitch2="Want to Catch the Flag (CTF)?">Want to Catch the Flag (CTF)?</h3>
                </v-col>
                <v-col cols="12" class="px-14 py-9">
                  <p class="text-justify mb-0">
                    Test your cybersecurity skills in our exciting Capture the Flag (CTF) challenges. Compete against other security enthusiasts, learn new techniques, and showcase your expertise. Ready to capture the flag? Join our CTF events now!
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="my-9 section-row">
      <v-col cols="12" sm="8" md="10">
        <v-card class="px-5 py-5">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="7" md="7" align="center">
              <h3 class="text-display-2c glitch2" data-glitch2="ConnectSecure">ConnectSecure</h3>
            </v-col>
            <v-col cols="12" sm="5" md="5" class="px-14 py-9">
              <Contact />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
    let resp
    try {
      if (store.state.auth.loggedIn) {
        resp = await $axios.get('/app/accounts/authusers')
        return {
          users: resp.data.users,
          current: resp.data.current
        }
      } else {
        resp = await $axios.get('/app/accounts/nonauthusers')
        return {
          users: resp.data
        }
      }
    } catch (e) {
      console.log(e)
      return {
        users: [],
        current: 112,
      }
    }
  },
  data() {
    return {
      users: this.users
    }
  }
}
</script>

<style lang="scss" scoped>
.titlemain {
  font-style: italic;
  font-weight: 700;
  color: var(--head-text);
  margin-top: 5%;
  animation: titleAnimation 2s infinite;
  font-size: 6vw;
  line-height: 1.2;
  text-align: center;
}

.threed-effect {
  font-weight: 700;
  color: var(--head-text);
  text-shadow: 
    2px 2px 10px #9ac9ff, 
    4px 4px 0px #58a6ff, 
    6px 6px 0px #2196f3;
  animation: threedAnimation 2s infinite;
  display: inline-block;
}

@keyframes threedAnimation {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-2px, -2px);
  }
  100% {
    transform: translate(0, 0);
  }
}

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
    margin-left: 0.5%;
    text-shadow: -3px -3px 0px turquoise;
  }
  10% {
    margin-left: 0%;
    text-shadow: 3px 3px 0px turquoise;
  }
  13% {
    margin-left: 0%;
    text-shadow: 3px 3px 0px purple;
  }
  15% {
    margin-left: 0.5%;
    text-shadow: 6px 6px 0px purple;
  }
  19% {
    margin-left: 0%;
    text-shadow: -3px 3px 0px pink;
  }
  21% {
    margin-left: 0.5%;
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
    margin-left: -0.5%;
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
    margin-left: 0.5%;
    text-shadow: none;
  }
  69% {
    margin-left: -0.3%;
    text-shadow: 3px 3px 0px turquoise;
  }
  72% {
    margin-left: 0.3%;
    text-shadow: 3px 3px 0px pink;
  }
  75% {
    margin-left: -0.3%;
    text-shadow: none;
  }
  78% {
    margin-left: 0.3%;
    text-shadow: 3px 3px 0px pink;
  }
  81% {
    margin-left: -0.3%;
    text-shadow: -3px -3px 0px turquoise;
  }
  84% {
    margin-left: 0.3%;
    text-shadow: 3px 3px 0px pink;
  }
  90% {
    margin-left: 0%;
    text-shadow: 3px 3px 0px pink;
  }
  93% {
    text-shadow: -3px -3px 0px turquoise;
  }
  95% {
    text-shadow: none;
  }
  99% {
    text-shadow: 3px 3px 0px pink;
  }
  100% {
    margin-left: 0%;
    text-shadow: none;
  }
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .titlemain {
    font-size: 8vw;
    margin-top: 8%;
    padding: 0 16px;
  }
  .threed-effect {
    text-shadow: 
      1.5px 1.5px 8px #9ac9ff, 
      3px 3px 0px #58a6ff, 
      4.5px 4.5px 0px #2196f3;
  }
}

@media (max-width: 600px) {
  .titlemain {
    font-size: 18vw;
    font-weight: 900;
    margin-top: 10vh; /* Push title lower in mobile view */
  }
  .threed-effect {
    text-shadow: 
      1px 1px 6px #9ac9ff, 
      2px 2px 0px #58a6ff, 
      3px 3px 0px #2196f3;
  }
  .section-row {
    margin-top: 12vh !important;
    margin-bottom: 6vh !important;
  }
  @keyframes threedAnimation {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-1px, -1px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes titleAnimation {
    0%, 100% {
      text-shadow: none;
      margin-left: 0%;
    }
    50% {
      margin-left: 0.3%;
      text-shadow: 2px 2px 0px turquoise;
    }
  }
}

@media (max-width: 400px) {
  .titlemain {
    font-size: 12vw;
    margin-top: 18vh; /* Even lower for very small screens */
  }
}
</style>