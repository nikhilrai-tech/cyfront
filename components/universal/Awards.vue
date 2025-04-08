<template>
<v-row>
    <div v-if="type == 'P'">

        <v-list-item  v-for="(award,i) in awards" :key="i">
        <v-list-item-avatar>
            <v-icon > mdi-trophy </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title>{{awardobj[award].title}}</v-list-item-title>
            <v-list-item-subtitle>{{awardobj[award].mission}}</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
    </div>
    <v-col v-else-if="type == 'T'" cols="12">
        <div class="font-weight-bold ml-8 mb-2">Active</div>
        <v-timeline align-top dense >
            <v-timeline-item color="success" disabled small >
            <div>
                <div class="font-weight-normal"><strong>{{awardobj[Math.max(...awards)].title}}</strong></div>
                <div>Completed</div>
            </div>
            </v-timeline-item>
            <v-timeline-item color="warning" small >
            <div>
                <div class="font-weight-normal"><strong>{{awardobj[Math.max(...awards)+1].title}}</strong></div>
                <div>In Progress</div>
            </div>
            </v-timeline-item>
            <v-timeline-item color="error" small >
            <div>
                <div class="font-weight-normal"><strong>{{awardobj[Math.max(...awards)+2].title}}</strong></div>
                <div>Yet To Complete</div>
            </div>
            </v-timeline-item>
        </v-timeline>
    </v-col>
    <template v-else-if="type == 'D'">
      <v-col v-for="(award,i) in awards" :key="i" class="text-centerc" cols="12" sm="4" >
        <div class="overflow-hidden">
        <v-card :color="`${awardobj[award].color || '#6A1B9A'}`" :class="`${awardobj[award].shine ? 'shine': ''}`">
              <v-list-item three-line>
                <v-list-item-avatar>
                  <img v-if="$auth.user.profile" :src="$auth.user.profile" :alt="$auth.user.name" >
                  <v-icon v-else dark> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="mb-4c">{{$auth.user.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-4c">{{awardobj[award].title}}</v-list-item-title>
                  <v-list-item-subtitle>{{awardobj[award].mission}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-spacer />

                
                <v-menu bottom offset-y >
                  <template #activator="{ on, attrs }">
                    <v-btn rounded icon style="z-index: 4;"  v-bind="attrs" v-on="on"><v-icon>mdi-share-variant</v-icon></v-btn>
                  </template>

                  <v-list>

                    <v-list-item :key="1" dense @click="share(award, 0)">
                      <v-list-item-icon style="min-width: 0px;"><v-icon small>mdi-whatsapp</v-icon> </v-list-item-icon>
                      <v-list-item-title>Whatsapp</v-list-item-title>
                    </v-list-item>

                    <v-list-item :key="2" dense @click="share(award, 1)">
                      <v-list-item-icon style="min-width: 0px;"><v-icon small>mdi-gmail</v-icon> </v-list-item-icon>
                      <v-list-item-title>Gmail</v-list-item-title>
                    </v-list-item>

                    <v-list-item :key="3" dense @click="share(award, 2)">
                      <v-list-item-icon style="min-width: 0px;"><v-icon small>mdi-twitter</v-icon> </v-list-item-icon>
                      <v-list-item-title>Twitter</v-list-item-title>
                    </v-list-item>

                    <v-list-item :key="4" dense @click="share(award, 3)">
                      <v-list-item-icon style="min-width: 0px;"><v-icon small>mdi-facebook</v-icon> </v-list-item-icon>
                      <v-list-item-title>Facebook</v-list-item-title>
                    </v-list-item>

                  </v-list>
                </v-menu>
              </v-card-actions>
        </v-card>
        </div>
      </v-col>
    </template>
    <div v-else>

    </div>
</v-row>
</template>


<script>
export default {
    name: 'FavouriteComponent',
    props: {
        type: { type: String, default() {return 'P'} },
        awards: { type: Array, default() {return []} },
    },
    data () {
        return {
            loading: false,
            awardobj : [
                { index: 0, title: 'Initiator I', mission: 'Signup to Cyber3ra', shine: true, color: 'cyan' },
                { index: 1, title: 'Initiator II', mission: 'Verify your Email', shine: true, color: 'cyan' },
                { index: 2, title: 'Initiator III', mission: 'Participate in Cyber3ra Leaderboards', shine: true, color: 'info' },
                { index: 3, title: 'Dutiful', mission: 'Complete your Profile', shine: true, color: 'cyan' },
                { index: 4, title: 'Artuist', mission: 'Like 5 People', shine: true, color: 'cyan' },
                { index: 5, title: 'Generous', mission: 'Earn 2 Upvotes', shine: true, color: '#1056d9' },
                { index: 6, title: 'Duteous', mission: 'Add a Report', shine: true, color: 'cyan' },
                { index: 7, title: 'People Person', mission: 'Refer 1 User', shine: true, color: 'cyan' },
                { index: 8, title: 'Charming', mission: 'Earn 5 Likes', shine: true, color: 'cyan' },
                { index: 9, title: 'Wise', mission: 'Earn 5 Upvotes', shine: true, color: 'cyan' },
                { index: 10, title: 'Grateful', mission: 'Earn 1 Thanks', shine: true, color: 'cyan' },
                { index: 11, title: 'Successful', mission: 'Add a Successful Report', shine: true, color: 'cyan' },
                { index: 12, title: 'Socializer', mission: 'Refer 5 Friends', shine: true, color: 'cyan' },
                { index: 13, title: 'Obliged', mission: 'Earn 5 Thanks', shine: true, color: 'cyan' },
                { index: 14, title: 'Charismatic', mission: 'Earn 25 Likes', shine: true, color: 'cyan' },
                { index: 15, title: 'Adventurer', mission: 'Participate in Private Bug Bounty Platform', shine: true, color: 'cyan' },
                { index: 16, title: 'Victorious', mission: 'Add a Successful Report 5 Times', shine: true, color: 'cyan' },
                { index: 17, title: 'Elite Hack', mission: 'Earn 100 Likes', shine: true, color: 'cyan' },
                { index: 18, title: 'Crackerjack', mission: 'Earn 200 Likes', shine: true, color: 'cyan' },
                { index: 19, title: 'Technocrat', mission: 'Earn 250 Likes', shine: true, color: 'cyan' },
            ]
        }
    },
    methods: {
      share(i, type){
        if(window){
          if(type===0){
            // console.log(this.awardobj[i], ' whatsapp sharing')
            // console.log(window.innerWidth)
            window.open(window.innerWidth > 560 ? 'https://web.whatsapp.com/send?text=I+won+a+new+award' : 'https://api.whatsapp.com/send?text=I won a new award')
            // window.open('https://api.whatsapp.com/send?text=I won a new award')
          }
          else if(type===1){
            // console.log(this.awardobj[i], ' gmail sharing');
            window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=New Award&body=I won an Award&ui=2&tf=1&pli=1', 'sharer', 'toolbar=0,status=0,width=648,height=395')
          }
          else if(type===2){
            // console.log(this.awardobj[i], ' twitter sharing');
            window.open('https://twitter.com/intent/tweet?text=I won a new Award&url=https://cyber3ra.com&hashtags=cyber3ra,bugbounty,bountyhunters')
          }
          else{
            // console.log(this.awardobj[i], ' facebook sharing');
            window.open('https://www.facebook.com/sharer/sharer.php?u=https://cyber3ra.com&quote=I won a new Award','facebook-share-dialog','width=626,height=436');
          }
        }
      },
    }
}
</script>

<style scoped>
.shine::after{
  content:'';
  top:0;
	/* transform:translateX(100%); */
	width:100%;
	height:100%;
	position: absolute;
	z-index:1;
	animation: shining 7s infinite;
	 
  /* 
  CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/ 
  */
  background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(128,186,232,0) 99%, rgba(125,185,232,0) 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255,255,255,0.8)), color-stop(99%,rgba(128,186,232,0)), color-stop(100%,rgba(125,185,232,0))); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* IE10+ */
	background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
}

.delay-1{
  animation-delay: 4s !important;
}
.delay-2{
  animation-delay: 4s !important;
}
@keyframes shining {
	0% {
    opacity: 0;
  }
	30% {
    opacity: 0;
    transform:translateX(-100%);
  }
	45% {
    opacity: 0.5;
    /* transform:translateX(-50%); */
  }
	55% {
    opacity: 0.5;
    /* transform:translateX(50%); */
  }
	60% {
    opacity: 0;
    transform:translateX(100%);
  }
  /* 15% {opacity: 0;}
	50% {opacity: 1;}
  60% {opacity: 0;} */
	100% {opacity: 0;}
}
</style>