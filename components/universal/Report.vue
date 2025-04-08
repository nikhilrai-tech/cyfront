<template>
    <span>
    <v-card id="report-main" ref="messagesContainer" :loading="loading"  max-height="80vh" style=" overflow-y: scroll;" @scroll="onScroll">
        <v-btn elevation="2" fab fixed bottom right class="mb-7 mr-4" small color="primary" @click="scrollToEnd">
            <v-icon v-if="bottom">mdi-chevron-down</v-icon><v-icon v-else>mdi-chevron-up</v-icon>
        </v-btn>
        <!-- <nuxt-link :to="'#about'"><v-btn absolute top color="primaary">hyi</v-btn></nuxt-link> -->
        <v-card-title class="d-flex justify-space-between">
            <span>
                <v-btn v-if="title" icon to="/inbox" class="hover-trans2" ><v-icon>mdi-chevron-left</v-icon></v-btn>
                <span v-if="report.title">{{report.title}} </span>
                <span v-else>Report #{{title}} </span>
                <span :class="`rounded-circle ml-3 mr-1 `+classes[report.severity]" style="width: 15px;height: 15px;"></span><span class="text-uppercase subtitle-2"></span>
            </span>
            <v-menu v-if="!$auth.user.is_staff && !$auth.user.is_company" bottom offset-y >
                <template #activator="{ on, attrs }">
                    <v-btn rounded icon  v-bind="attrs" v-on="on"><v-icon>mdi-dots-vertical</v-icon></v-btn>
                </template>
                <v-list>
                <v-list-item :key="1" dense :disabled="disabledisclosure" @click="request('2')">
                    <v-list-item-title>Request Disclosure</v-list-item-title>
                </v-list-item>

                <v-list-item :key="2" dense :disabled="disablestatus" @click="request('3')">
                    <v-list-item-title>Request Status Change</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
            <v-menu v-else bottom offset-y >
                <template #activator="{ on, attrs }">
                    <v-btn rounded icon  v-bind="attrs" v-on="on"><v-icon>mdi-dots-vertical</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item v-if="!report.disclosure" :key="1" dense @click="actions('2')">
                        <v-list-item-title>Public Disclosure</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-else :key="3" dense @click="actions('4')">
                        <v-list-item-title>Hide Report</v-list-item-title>
                    </v-list-item>

                    <v-list-item :key="2" dense @click="actions('3')">
                        <v-list-item-title>Change Status</v-list-item-title>
                    </v-list-item>
                    <v-list-item :key="4" dense @click="thanksopen = true">
                        <v-list-item-title>Give Thanks</v-list-item-title>
                    </v-list-item>
                    <v-list-item :key="5" dense @click="bountyopen = true">
                        <v-list-item-title>Pay Bounty</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

        </v-card-title>
        <v-card-text style="max-height: 100%; overflow-y: scroll;">
            <div class="pt-2">
                            <!-- <v-divider></v-divider> -->
                            <h4 class="mt-2">Description</h4>
                            <markdown :text="report.description" />
                            <!-- <v-divider></v-divider> --> 
                            <h4 class="mt-2">Impact</h4>
                            <markdown :text="report.impact" />
                            <h4 class="mt-2">Weakness</h4>
                            <div>
                                <span style="color: red;">{{weakness}}</span> at 
                                <span v-if="report.asset">{{report.asset.type}} | {{report.asset.domain}}</span>
                            </div>
                            <!-- <h4 class="mt-2">Severity</h4>
                            <div>
                                {{report.severity}}
                            </div>
                            <h4 class="mt-2">Asset</h4>
                            <div>
                                
                            </div> -->
                            <!-- <v-divider></v-divider> -->
                        </div>
                        <v-divider class="my-3" />
        </v-card-text>
        <v-card-text>
            
        <v-timeline align-top dense >
            <v-timeline-item v-if="!$auth.user.is_staff && !$auth.user.is_staff" small class="mt-n5 mb-5">
                <template #icon>
                    <v-avatar size="35" color="black">
                        <v-img v-if="$auth.user.photo" :src="$auth.user.photo"></v-img>
                        <v-icon v-else size="50" class="rounded-circle"> mdi-account-circle </v-icon>
                    </v-avatar>
                </template>
                    <div >
                        <div class="font-weight-normal">
                            <nuxt-link :to="`/u/?${$auth.user.username}`">{{$auth.user.name || 'You'}}</nuxt-link>
                            <span>
                                added a report
                            </span>
                        </div>
                    </div>
            </v-timeline-item>
            <v-timeline-item v-else small class="mt-n5 mb-5">
                <template #icon>
                    <v-avatar size="35" color="black">
                        <v-img v-if="report.photo" :src="$axios.defaults.baseURL+report.photo"></v-img>
                        <v-icon v-else size="50" class="rounded-circle"> mdi-account-circle </v-icon>
                    </v-avatar>
                </template>
                    <div >
                        <div class="font-weight-normal">
                            <nuxt-link :to="`/u/?${report.user ? report.user.username : '#'}`">{{report.user ? report.user.name : 'User'}}</nuxt-link>
                            <span>
                                added a report
                            </span>
                        </div>
                    </div>
            </v-timeline-item>

            <v-timeline-item v-for="(item, index) in timeline" :key="index" small class="mt-5 ">
                <template #icon>
                    <v-avatar size="35" color="black">
                        <v-img v-if="item.posted_by.photo" :src="item.posted_by.photo"></v-img>
                        <v-icon v-else size="50" class="rounded-circle"> mdi-account-circle </v-icon>
                    </v-avatar>
                </template>
                <div >
                    <div v-if="item.request" class="font-weight-normal">
                        <nuxt-link :to="`/u/?${item.posted_by.username}`">{{item.posted_by.name}}</nuxt-link>
                        <span v-if="item.type == 'B'">
                            added a comment
                        </span>
                        <span v-else-if="item.type == 'D'">
                            requested for Public Disclosure
                        </span>
                        <span v-else-if="item.type == 'A'">
                            requested for Status Change
                        </span>
                        <span v-else>
                            commented
                        </span>
                    </div>
                    <div v-else class="font-weight-normal">
                        <nuxt-link :to="`/u/?${item.posted_by.username}`">{{item.posted_by.name}}</nuxt-link>
                        <span v-if="item.type == 'B'">
                            added a comment
                        </span>
                        <span v-else-if="item.type == 'D'">
                            made this Report Public
                        </span>
                        <span v-else-if="item.type == 'D2'">
                            made this Report Hidden
                        </span>
                        <span v-else-if="item.type == 'A'">
                            changed the Status to {{report.status}}
                        </span>
                        <span v-else-if="item.type == 'T'">
                            gave Thanks of {{item.body}}
                        </span>
                        <span v-else-if="item.type == 'Ri'">
                            initiated Bounty of ₹{{item.body}}
                        </span>
                        <span v-else-if="item.type == 'Rs'">
                            paid Bounty of ₹{{item.body}}
                        </span>
                        <span v-else-if="item.type == 'Rc'">
                            faced payment error of ₹{{item.body}}
                        </span>
                        <span v-else>
                            commented
                        </span>
                    </div>
                    <div v-if="item.type == 'B'">
                        <markdown :text="item.body" />
                        <!-- {{item.body}} -->
                    </div>
                </div>
            </v-timeline-item>
            <v-timeline-item v-if="!$auth.user.is_staff && !$auth.user.is_staff" small class="mt-5 pb-0 mb-5">
                <template #icon>
                    <v-avatar size="35" color="black">
                        <v-img v-if="$auth.user.photo" :src="$auth.user.photo"></v-img>
                        <v-icon v-else size="50" class="rounded-circle"> mdi-account-circle </v-icon>
                    </v-avatar>
                </template>
                    <div >
                        <div class="font-weight-normal">
                            Current
                        </div>
                    </div>
            </v-timeline-item>
        </v-timeline>
            <form class="mt-7" @submit.prevent="addcomment">
                <v-btn text @click="prev=true">Preview</v-btn>
                <v-textarea v-model="comment.body" placeholder="Add a Comment*" auto-grow outlined hint="Cyber3ra Markdown" required ></v-textarea>
                <v-btn type="submit" color="primary">Post</v-btn>
            </form>
        </v-card-text>
    </v-card>
    <v-card class="mt-3 d-none">
        <v-card-title id="about">
            <!-- <v-btn v-if="title" icon to="/inbox" class="hover-trans2" ><v-icon>mdi-chevron-left</v-icon></v-btn>
            <span v-if="report.title">{{report.title}}</span>
            :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
            @click:append-outer="sendMessage"
            <span v-else>Report #{{title}}</span> -->
            Comment
        </v-card-title>
    </v-card>
    <v-dialog v-model="thanksopen" width="350">
        <form :disabled="thanks.thanks > 50 || thanks.thanks < 1 || loading" @submit.prevent="thank">
            <v-card>
                <v-card-title>
                    Give Thanks
                </v-card-title>
                <v-card-text class="py-4">
                    <v-text-field v-model="thanks.thanks" outlined label="Points" type="number" append-outer-icon="mdi-plus" prepend-icon="mdi-minus" @click:append-outer="thanks.thanks += 1" @click:prepend="thanks.thanks -= 1" >
                        <template #append-outer="{ on, attrs }" >
                            <v-btn v-bind="attrs" :disabled="thanks.thanks >= 50" icon @click="thanks.thanks += 1" v-on="on" >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </template>
                        <template #prepend="{ on, attrs }" >
                            <v-btn v-bind="attrs" :disabled="thanks.thanks <= 1" icon @click="thanks.thanks -= 1" v-on="on" >
                                <v-icon>mdi-minus</v-icon>
                            </v-btn>
                        </template>
                    </v-text-field>
                    <p v-if="thanks.thanks > 50 || thanks.thanks < 1" class="red--text">Reputation points must be in range of 1 - 50</p>
                    <v-text-field v-model="thanks.description" outlined placeholder="Description"></v-text-field>
                    <div>
                        <v-spacer />
                        <v-btn color="primary" type="submit">Go</v-btn>
                        <v-spacer />
                    </div>
                </v-card-text>
            </v-card>
        </form>
    </v-dialog>
    <v-dialog v-model="bountyopen" width="350">
        <form :disabled="loading" @submit.prevent="bount">
            <v-card>
                <v-card-title>
                    Pay Bounty
                </v-card-title>
                <v-card-text class="py-4">
                    <p class="red--textc">Current Severity: {{report.severity}}</p>
                    <v-chip v-for="(am,i) in bounty.range" :key="i" class="mr-2 mb-2" :color="am==bounty.amount ? classes[i] :''" :outlined="am!=bounty.amount" @click="bounty.amount = am">₹ {{am}}</v-chip>
                    <p class="red--text">You can add your Custom Bounty Amount here</p>
                    <v-text-field v-model="bounty.amount" prefix="₹" outlined placeholder="Amount" type="number"></v-text-field>
                    <div>
                        <v-spacer />
                        <v-btn color="primary" type="submit">Go</v-btn>
                        <v-spacer />
                    </div>
                </v-card-text>
            </v-card>
        </form>
    </v-dialog>
        
    </span>
</template>

<script>
import Markdown from './Markdown.vue'
export default {
    name: 'ReportPreviewComponent',
    components: { Markdown },
    props: {
        title: {type: String, default: ''},
        rloaded: { type: Boolean,default: false}
    },
    data() {
        return {
            report: {},
            timeline: [],
            weaknesses: require("../app/objs").weaknesses,
            theme: false,
            bottom: true,
            loading: false,
            prev: false,
            comment: {body: ''},
            weakness: '',
            classes: {
                Critical: 'red darken-4',
                High: 'error',
                Medium: 'warning',
                Low: 'success',
                None: 'info',
                0: 'red darken-4',
                1: 'error',
                2: 'warning',
                3: 'success',
            },
            disablestatus: false,
            disabledisclosure: false,
            thanks: {
                thanks: 1,
                description: ''
            },
            thanksopen: false,
            bounty: {
                amount: 1000,
                range: [2500, 15000, 1000, 500 ],
                description: ''
            },
            bountyopen: false
        }
    }, 
    async fetch() {
        // await console.log('fetching ... report')
        try{
            const resp = await this.$axios.get('/app/main/report/'+this.title+'/', 
                )
                // console.log(resp.data)
            this.report = resp.data.report
            this.bounty.amount = resp.data.report.amount.actual
            this.bounty.range = resp.data.report.amount.range
            this.timeline = resp.data.timeline
            this.weakness = this.weaknesses[resp.data.report.weakness].name
        }
        catch(e){
            console.log(e)
            // this.notifications = []
        }
    },
    watch: {
        text(newv){
            // this.descouts = newv.split(/\r?\n/)
        },
        title(newv){
            this.$fetch()
        }
    },
    mounted() {
        this.theme = this.$vuetify.theme.dark
        // this.scrollToEnd()
    },
    methods: {
        getlink(val){
            // console.log('Match : ',val.match(/\r?\[/g))
        },
        scrollToEnd() {
            // console.log('entered here')
            // const scrollHeight = this.$refs.messagesContainer.$el.offsetHeight;
            // console.log(scrollHeight)
            // this.$refs.messagesContainer.scrollTop = 140;
            // console.log(this.$refs.messagesContainer)
            const container = this.$el.querySelector("#report-main");
            // container.scrollTop = container.scrollHeight;
            if (this.bottom){
                container.scrollTo({
                    top: container.scrollHeight,
                    behavior: 'smooth'
                })
                this.bottom=  false
            }
            else{
                container.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
                this.bottom=  true
            }
        },
        async addcomment () {
            this.loading = true;
            try {
                const resp = await this.$axios.post('/app/main/addcomment/'+this.title+'/1', this.comment)
                if(!resp.data.error){
                this.comment = {
                    body: ''
                };
                    this.loading = false
                    this.report = resp.data.report
                    this.timeline = resp.data.timeline
                    this.weakness = this.weaknesses[resp.data.report.weakness].name
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        },
        async request (re) {
            this.loading = true;
            try {
                const resp = await this.$axios.post('/app/main/addcomment/'+this.title+'/'+re, this.comment)
                if(!resp.data.error){
                    this.loading = false
                    this.report = resp.data.report
                    this.timeline = resp.data.timeline
                    this.weakness = this.weaknesses[resp.data.report.weakness].name
                    this.disablestatus = re === '3'
                    this.disabledisclosure = re === '2'
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        },
        async actions (re) {
            this.loading = true;
            try {
                const resp = await this.$axios.post('/app/main/addcomment/'+this.title+'/'+re, this.comment)
                if(!resp.data.error){
                    // console.log(resp.data)
                    this.loading = false
                    this.report = resp.data.report
                    this.timeline = resp.data.timeline
                    this.weakness = this.weaknesses[resp.data.report.weakness].name
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        },
        async thank () {
            this.loading = true;
            try {
                const resp = await this.$axios.post('/app/main/addcomment/'+this.title+'/5', this.thanks)
                if(!resp.data.error){
                    // console.log(resp.data)
                    this.loading = false
                    this.thanksopen = false
                    this.thanks = {
                        thanks: 1,
                        description: ''
                    }
                    this.report = resp.data.report
                    this.timeline = resp.data.timeline
                    this.weakness = this.weaknesses[resp.data.report.weakness].name
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        },
        async bount () {
            this.loading = true;
            try {
                const resp = await this.$axios.post('/app/user/paybounty/'+this.title, this.bounty)
                if(!resp.data.error){
                    console.log(resp.data)
                    this.loading = false
                    this.bountyopen = false
                    // this.bounty = {
                    //     amount: 0,
                    //     description: ''
                    // }
                    // const Razorpay = require("razorpay");
                    // eslint-disable-next-line no-undef
                    const rzp1 = new Razorpay(resp.data) 
                    rzp1.open()
                    // this.report = resp.data.report
                    // this.timeline = resp.data.timeline
                    // this.weakness = this.weaknesses[resp.data.report.weakness].name
                }
            } catch (e) {
                console.log(e)
                this.loading = false
            }
        },
        onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
            if (scrollTop + clientHeight >= scrollHeight-10) {
                // this.loadMorePosts()
                // console.log('bottom')
                this.bottom = false
            }
            else if(scrollTop === 0){
                // console.log("top")
                this.bottom = true
            }
            // console.log(scrollTop+ clientHeight, scrollHeight)
        }

    },
}
</script>
<style>
.string {
    width: 100%;
    min-height: 20px;
}
</style>
<style>
.v-input__append-outer,.v-input__prepend-outer {
    margin-top: 7px !important;
}
</style>