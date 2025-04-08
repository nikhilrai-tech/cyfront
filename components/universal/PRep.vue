<template>
    <v-card :key="report.id" :class="`severity my-3 s-${report.severity}`">
            <span style="height: 100%; width: 10px; background-color: green;"></span>

        <v-card-text class="reports-listc px-0 py-2 my-3v">
            <v-list-item  :key="index">
                
                <v-list-item-avatar size="45" class="mr-2 d-flex flex-column">
                    <v-progress-circular v-if="loading" size="20" width="2" class="my-2" indeterminate></v-progress-circular>
                    <v-icon v-else :color="report.upvoted ? 'info': 'grey'" size="20" class="rounded-circlec" style="cursor: pointer;" :disabled="!$auth.loggedIn" @click="upvote"> {{report.upvoted ? 'mdi-triangle' : 'mdi-triangle-outline'}} </v-icon>
                    
    <v-menu v-if="report.upvotes ? report.upvotes.length > 0 : false" open-on-hover :close-on-content-click="false" :nudge-width="200"   offset-y top min-width="auto" >
        <template #activator="{ on, attrs }">
            <span v-bind="attrs" class="errorc px-2" v-on="on">{{report.upvotes ? report.upvotes.length : '0'}}</span>
        </template>

        <v-card width="100" outlined>
            <v-card-text class="d-flex align-center px-2 py-2 pl-5">
                
                <span v-for="(user, index2) in report.upvotes.users" :key="user.id" :style="`width: 25px;height: 25px;z-index: ${6-index2};`" class="ml-n3">
                    <v-tooltip top>
                        <template #activator="{ on, attrs }">
                            <span v-bind="attrs" v-on="on">
                            <img v-if="user.photo" :key="index2" :src="$axios.defaults.baseURL+user.photo" :alt="user.name" class="rounded-circle" style="width:100%;height:100%;" >
                            <v-icon v-else :key="index2" size="23"> mdi-account-circle </v-icon>
                            </span>
                        </template>
                        <span>{{user.name}}</span>
                    </v-tooltip>
                </span>
                <span v-if="report.upvotes.left" class="ml-1">+{{report.upvotes.left}}</span>
            </v-card-text>
        </v-card>
    </v-menu>
    <span v-else class="errorc px-2" >{{report.upvotes ? report.upvotes.length : '0'}}</span>
                    
                </v-list-item-avatar>
                <v-list-item-avatar size="50" class="mr-3"> 
                    <v-img v-if="report.photo" :src="$axios.defaults.baseURL+report.photo"></v-img>
                    <v-icon v-else size="50" class="rounded-circle"> mdi-account-circle </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <nuxt-link :to="'/hactivity?report='+report.id"><v-list-item-title @click="title = report.title" >{{report.title}}</v-list-item-title></nuxt-link>
                    <v-list-item-subtitle >By <user :user="report.user"><nuxt-link :to="`/u/?${report.user.username}`">{{report.user.name}}</nuxt-link></user> to 
                    <!-- <user :user="report.to"> -->
                        {{report.to ? report.to.name : ''}}
                        <!-- </user>  -->
                        <v-divider class="div mx-2 mt-n2" vertical ></v-divider> {{report.status}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-list-item-action-text >{{report.posted}} ago</v-list-item-action-text>
                </v-list-item-action>
            </v-list-item>
        </v-card-text>
            
    </v-card>
</template>

<script>
import User from './User.vue'
export default {
    name: 'ReportPreviewComponent',
    components: { User },
    props: {
        report: {type: Object, default: () => ({title: ''})},
        index: { type: Number,default: Math.random()}
    },
    data() {
        return {
            loading: false,
        }
    }, 
    methods: {
        async upvote() {
          await console.log('entered')
          this.loading = true
          try{
            const resp = await this.$axios.post('/app/main/publicreport/'+this.report.id,{})
          //  console.log(resp.data)
            if(!resp.data.error){
              // this.reports = resp.data
              this.loading = false
              this.$nuxt.refresh()
            }
          }
          catch(e){
            console.log(e)
          }
        }
    },
}
</script>