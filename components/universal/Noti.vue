<template>
    <div>

        <v-menu v-model="open" bottom offset-y :close-on-content-click="false">
            <template #activator="{ on, attrs }">
            <v-btn small icon v-bind="attrs" class="mr-2" v-on="on" >
                <v-badge v-if="notis.length > 0" dot>
                    <v-icon>mdi-bell</v-icon>
                </v-badge>
                <v-icon v-else>mdi-bell</v-icon>
            </v-btn>
            </template>

            <v-list three-line width="350" style="max-width: 100%; max-height: 400px; overflow-y: scroll;">
                <div class="d-flex justify-space-between px-3 py-2">
                    <small>Notifications</small>
                    <small :class="notis.length < 1 ? 'text--disabled' : 'primary--text point'" @click="notis.length < 1 ? null : del()">Dismiss Read</small>
                </div>
                <div v-if="load" class="d-flex justify-center py-4">
                    <v-progress-circular size="40" :width="2" indeterminate></v-progress-circular>
                </div>
                <div v-else>
                    <!-- <template :key="noti.id"> -->

                        <!-- <v-divider :key="index" >{{index}}</v-divider> -->

                        <div v-if="notis.length < 1" class="d-flex justify-center py-4">
                            <span>No New Notifications</span>
                        </div>
                        <v-list-item v-for="(noti) in notis" v-else :key="noti.id" :to="noti.link" :disabled="(loading || noti.seen)" @click="markread(noti.id)" >
                            <!-- {{noti.user.substring(0,4)}} -->
                            <!-- {{noti.user ? noti.user.substring(0,4) === 'http' ? noti.user : $axios.defaults.baseURL + noti.user : ''}} -->
                            <v-list-item-avatar>
                                <v-img v-if="noti.user" :src="noti.user ? noti.user.substring(0,4) === 'http' ? noti.user : $axios.defaults.baseURL + noti.user : ''"></v-img>
                                <span v-else>
                                    <v-icon >{{noti.type}}</v-icon>
                                </span> 
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{noti.title}}</v-list-item-title>
                                <v-list-item-subtitle>{{noti.body}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    <!-- </template> -->
                </div>
            </v-list>
        </v-menu>

    </div>
</template>

<script>
export default {
    name: 'NotificationsComponent',
    props: {
        notis: {type: Array, default() {return []}},
        del: {type: Function, default() {return ()=>console.log('') }},
        refresh: {type: Function, default() {return ()=>console.log('') }},
        load: {type: Boolean, default() {return false}},
    },
    data() {
        return {
            loading: false,
            open: false
            // notis: [
            //     {
            //     avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            //     title: 'Brunch this weekend?',
            //     subtitle: `Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            //     },
            //     { divider: true, inset: true },
            //     {
            //     avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            //     title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            //     subtitle: `to Alex, Scott, Jennifer, Wish I could come, but I'm out of town this weekend.`,
            //     },
            //     { divider: true, inset: true },
            //     {
            //     avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            //     title: 'Oui oui',
            //     subtitle: 'Sandra Adams, Do you have Paris recommendations? Have you ever been?',
            //     },
            //     { divider: true, inset: true },
            //     {
            //     avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            //     title: 'Birthday gift',
            //     subtitle: 'Trevor Hansen, Have any ideas about what we should get Heidi for her birthday?',
            //     },
            //     { divider: true, inset: true },
            //     {
            //     avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            //     title: 'Recipe to try',
            //     subtitle: 'Britta Holt, We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            //     },
            // ],
        }
    },
    methods: {
        async markread(id){
            this.loading = true
            try{
                // eslint-disable-next-line no-unused-vars
                const resp = await this.$axios.get('/app/user/markread/'+id)
              //  console.log(resp.data)
                this.$nuxt.$emit('refresh')
                this.refresh()
                this.open = false
                this.loading = false
            }
            catch(e){
                console.log(e)
                this.loading = false
            }
        }
    }
}
</script>