<template>
    <v-menu open-on-hover :close-on-content-click="false" :nudge-width="200" offset-xc offset-y top min-width="auto" >
        <template #activator="{ on, attrs }">
            <!-- <v-list-item  v-bind="attrs" class="d-inline-flex align-center point hover-trans" :to="`/u/${user.username}`" v-on="on"> -->
            <!-- <div v-bind="attrs" v-on="on">
                <nuxt-link :to="`/u/?${user.username}`" style="color: inherit;">
                <div class="d-inline-flex align-center point hover-trans">
                    <v-avatar size="25" class="mr-2 mt-n2">
                        <img v-if="user.photo"  :src="$axios.defaults.baseURL+user.photo" >
                        <v-icon v-else > mdi-account-circle </v-icon>
                    </v-avatar>
                    <v-list-item-content class="d-inline-block">
                        <v-list-item-title class="d-inline-block mt-2c" v-text="user.name ? user.name : user.username"></v-list-item-title>
                    </v-list-item-content>
                </div>
                </nuxt-link>
            </div> -->
            <span v-bind="attrs" class="menu-target" v-on="on"><slot /></span>
            <!-- </v-list-item> -->
        </template>

        <v-card width="350">
            <v-list-item three-line>
                <v-list-item-avatar size="45">
                    <img v-if="user.photo" :src="$axios.defaults.baseURL+user.photo"  :alt="user.name ? user.name : user.username" >
                    <v-icon v-else x-large> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="pb-1c">{{user.name ? user.name : user.username}}</v-list-item-title>
                    <v-list-item-subtitle class="mt-n1">@{{user.username}}</v-list-item-subtitle>
                </v-list-item-content>
                <!-- <v-list-item-icon class="d-flex align-center" style="font-size: 25px; color: #AFB42B;">{{user.totalreputation}}</v-list-item-icon> -->
            </v-list-item>
            <v-divider />
            <v-card-text>
                <em v-if="!user.bio">{{user.bio ? user.bio : 'No Bio'}}</em>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn color="primary" text router :to="`/u/?${user.username}`" small > View Profile </v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>


<script>
export default {
    name: 'UserProfile',
    props: {
        user: { type: Object, default() {return { name: '', photo: null, username: '',bio: '' }} },
    },
    data () {
        return {
            loading: true,
            bio: null,
            reputation: null
        }
    },
    // created () {
    //     this.fetchData()
    // },
    // methods: {
    //     fetchData () {
    //         setTimeout(() => {
    //             this.loading = false;
    //             this.bio = `Cyber3ra Awards will be provided accordingly based on how much you have completed 
    //             your Profile, how much you have earned your reputation and how many reports you have submitted, etc.`
    //         }, 2000);
    //     }
    // }
}
</script>