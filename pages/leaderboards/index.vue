<template>
  <div>
    <v-row>
      <v-col class="text-center" cols="12" sm="3">
        <v-card class="uniform-card">
          <v-card-title class="mb-3 justify-space-between">
            <p class="mb-0">Highest Reputation</p>
            <!-- <v-btn text class="align-self-end">View All</v-btn> -->
          </v-card-title>
          <v-simple-table class="hovertrans">
            <thead>
              <tr>
                <th class="text-left">Rank</th>
                <th class="text-left">User</th>
                <th class="text-left">Reputation</th>
                <th class="text-left">Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in users.total" :key="user.username">
                <td>{{ i + 1 }}</td>
                <td>
                  <User :user="user">
                    <div>
                      <nuxt-link :to="`/u/?${user.username}`" style="color: inherit;">
                        <div class="d-inline-flex align-center point hover-trans">
                          <v-avatar size="25" class="mr-2 mt-n2">
                            <img v-if="user.photo" :alt="user.name" :src="$axios.defaults.baseURL + user.photo">
                            <v-icon v-else>mdi-account-circle</v-icon>
                          </v-avatar>
                          <v-list-item-content class="d-inline-block">
                            {{ user.name ? user.name : user.username }}
                          </v-list-item-content>
                        </div>
                      </nuxt-link>
                    </div>
                  </User>
                </td>
                <td>{{ user.totalreputation }}</td>
                <td>
                  <v-btn small text color="secondary" router :to="`/u/?${user.username}`">View</v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>

      <v-col class="text-center" cols="12" sm="3">
        <v-card class="uniform-card">
          <v-card-title class="mb-3 justify-space-between">
            <p class="mb-0">Top Programs</p>
            <!-- <v-btn text class="align-self-end">View All</v-btn> -->
          </v-card-title>
          <v-simple-table class="hovertrans">
            <thead>
              <tr>
                <th class="text-left">Company</th>
                <th class="text-left">Type</th>
                <th class="text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prog in users.programs" :key="prog.title">
                <td>
                  <User :user="prog.posted_by">
                    <div>
                      <nuxt-link :to="`/u/?${prog.posted_by.username}`" style="color: inherit;">
                        <div class="d-inline-flex align-center point hover-trans">
                          <v-avatar size="25" class="mr-2 mt-n2">
                            <img v-if="prog.posted_by.photo" :alt="prog.posted_by.name" :src="$axios.defaults.baseURL + prog.posted_by.photo">
                            <v-icon v-else>mdi-account-circle</v-icon>
                          </v-avatar>
                          <v-list-item-content class="d-inline-block">
                            {{ prog.posted_by.name ? prog.posted_by.name : prog.posted_by.username }}
                          </v-list-item-content>
                        </div>
                      </nuxt-link>
                    </div>
                  </User>
                </td>
                <td>{{ prog.type }}</td>
                <td>
                  <v-btn small depressed color="primary" :to="'/p/?' + prog.title">View</v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>

      <v-col class="text-center" cols="12" sm="3">
        <v-card class="uniform-card">
          <v-card-title class="mb-3 justify-space-between">
            <p class="mb-0">Referral Based</p>
            <!-- <v-btn text class="align-self-end">View All</v-btn> -->
          </v-card-title>
          <v-simple-table class="hovertrans">
            <thead>
              <tr>
                <th class="text-left">Rank</th>
                <th class="text-left">User</th>
                <th class="text-left">Referred</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in users.referral" :key="user.username">
                <td>{{ i + 1 }}</td>
                <td>
                  <v-avatar size="25" class="mr-2">
                    <img v-if="user.photo" :alt="user.name" :src="$axios.defaults.baseURL + user.photo">
                    <v-icon v-else>mdi-account-circle</v-icon>
                  </v-avatar>
                  {{ user.name ? user.name : user.username }}
                </td>
                <td>{{ user.refreputation }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>

      <v-col class="text-center" cols="12" sm="3">
        <v-card class="uniform-card">
          <v-card-title class="mb-3 justify-space-between">
            <p class="mb-0">Upvotes</p>
            <!-- <v-btn text class="align-self-end">View All</v-btn> -->
          </v-card-title>
          <v-simple-table class="hovertrans">
            <thead>
              <tr>
                <th class="text-left">Rank</th>
                <th class="text-left">User</th>
                <th class="text-left">Upvotes</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in users.upvotes" :key="user.username">
                <td>{{ i + 1 }}</td>
                <td>
                  <v-avatar size="25" class="mr-2">
                    <img v-if="user.photo" :alt="user.name" :src="$axios.defaults.baseURL + user.photo">
                    <v-icon v-else>mdi-account-circle</v-icon>
                  </v-avatar>
                  {{ user.name ? user.name : user.username }}
                </td>
                <td>{{ user.upvotereputation }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import User from "../../components/universal/User.vue";
export default {
  name: 'LeaderBoardsPage',
  components: {
    User
  },
  async asyncData({ store, $axios, app }) {
    try {
      const resp = await $axios.get('/app/accounts/repusers', 
        { headers: { "Authorization": app.$auth.strategy.token.get() } }
      );
      return {
        users: resp.data
      };
    } catch (e) {
      console.log(e);
      return { users: [] };
    }
  },
  data() {
    return {
      awards: { completion: 35, earned: 6 },
      names: [
        { name: 'vivek', rep: '13' },
        { name: 'yash', rep: '12' },
        { name: 'vighnesh', rep: '9' },
        { name: 'ashish', rep: '6' },
        { name: 'adarsh', rep: '5' },
      ],
      users: this.users,
    };
  },
  head() {
    return {
      title: 'Leaderboards',
    };
  },
};
</script>

<style lang="scss" scoped>
.hovertrans.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: transparent !important;
}
.uniform-card {
  min-height: 400px; /* Adjust as needed */
  display: flex;
  flex-direction: column;
}
.uniform-card .v-simple-table {
  flex-grow: 1;
}
</style>