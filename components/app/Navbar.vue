<template>
    <v-navigation-drawer  
    v-if="$auth.loggedIn"
    v-model="drawer"
    app :mini-variant="$vuetify.breakpoint.width > 561" 
     >
      <v-list>
        <v-list-item to="/">
          <v-list-item-action class="ml-n2 my-0 mr-1">
            <v-sheet class="py-2 px-2 nav-ic d-flex align-items-centerc logo-wrap">
            <!-- <img class="cyber3ra-logo" alt="Cyber3ra Logo" src="/logo.svg" width="30" height="30" /> -->
            <UniversalLogo type="hover" size="xs" />
            </v-sheet>
          </v-list-item-action>
          <v-list-item-content class="">
            <v-list-item-title v-text="'Cyber3ra'" />
          </v-list-item-content>
        </v-list-item>
        
        <div v-for="(item, i) in items" :key="i">
          <v-tooltip v-if="item.title" right><template #activator="{ on, attrs }">
        <v-list-item :to="item.to" router class="pl-2" exact v-bind="attrs" v-on="on" >
          <v-list-item-action v-if="item.title">
            <v-sheet class="py-2 px-2 nav-ic">
            <v-icon color="#9e9e9e"
            >{{ item.icon }}</v-icon>
            </v-sheet>
          </v-list-item-action>
          <v-list-item-content v-if="item.title">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
          <v-divider v-else />
        </v-list-item>
        </template>
          <span v-if="item.title">{{item.title}}</span>
          </v-tooltip>

        <v-list-item v-else >
          <v-divider />
        </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavbarComponent',
    props: {
        drawerb: { type: Boolean, default(){ return true } }
    },
    data() {
        return {
            drawer: (this.$store.state.navbar || this.$vuetify.breakpoint.width > 561) && this.$auth.loggedIn,
            items: [
                {},
                {
                    icon: 'mdi-view-dashboard',
                    title: 'Dashboard',
                    to: '/dashboard',
                },
                {},
                {
                    icon: 'mdi-gift',
                    title: 'Programs',
                    to: '/programs',
                },
                {
                    icon: 'mdi-poll',
                    title: 'Leaderboards',
                    to: '/leaderboards',
                },
                {
                    icon: 'mdi-briefcase',
                    title: this.$auth.user ? this.$auth.user.is_company ? 'Jobs' : 'Job Board' : 'Job Board',
                    to: '/jobs',
                },
                {
                    icon: 'mdi-account-tie',
                    title: this.$auth.user ? this.$auth.user.is_company ? 'Staff' : false : false,
                    to: '/staff',
                },
                {
                    icon: 'mdi-inbox',
                    title: 'Inbox',
                    to: '/inbox',
                },
                {
                    icon: 'mdi-bug',
                    title: 'Hactivity',
                    to: '/hactivity',
                },
                {
                    icon: 'mdi-flag', // Icon for CTF
                    title: 'CTF',
                    to: '/ctf', // Route for CTF page
                },
                {},
                {
                    icon: 'mdi-cogs',
                    title: 'Settings',
                    to: '/settings',
                },
                {
                    icon: 'mdi-account-question',
                    title: 'Contact Admin',
                    to: '/contact',
                },
            ],
        }
    },
    mounted () {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'openNav') {
          this.drawer = true
        }
        if (mutation.type === 'closeNav') {
          this.drawer = false
        }
      })
      this.drawer = (this.$store.state.navbar || this.$vuetify.breakpoint.width > 561) && this.$auth.loggedIn
    }
}
</script>