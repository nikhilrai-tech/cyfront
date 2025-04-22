<template>
  <div>
    <v-row>
      <v-col
        v-if="selected ? $vuetify.breakpoint.width > 561 : true"
        class="text-center"
        cols="12"
        sm="6"
      >
        <v-card class="inbox-card">
          <v-card-title>Inbox</v-card-title>
          <v-card-text class="reports-list p-0">
            <v-list
              three-line
              style="max-height: 100%; height: calc(100% - 64px); overflow-y: auto;"
              class="p-0"
            >
              <template v-for="(report, index) in reports">
                <v-list-item
                  :key="report.id"
                  :to="'/inbox?report=' + report.id"
                  :active="selected == report.id"
                  :class="`severity2 s2-${report.severity}`"
                  @click="title = report.title"
                >
                  <v-list-item-avatar>
                    <v-img
                      v-if="report.photo"
                      :src="$axios.defaults.baseURL + report.photo"
                    ></v-img>
                    <v-icon v-else size="50" class="rounded-circle">
                      mdi-account-circle
                    </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ report.user.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ report.title }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text>{{ report.posted }} ago</v-list-item-action-text>
                  </v-list-item-action>
                </v-list-item>
                <v-divider :key="index" :inset="true"></v-divider>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center" cols="12" sm="6">
        <v-card class="report-card">
          <v-card-title>Report</v-card-title>
          <v-card-text style="height: calc(100% - 64px); overflow-y: auto;">
            <report v-if="selected" :title="selected"></report>
            <span v-else>No Report Selected</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Report from '~/components/universal/Report.vue';
export default {
  name: 'UsersPage',
  components: { Report },
  async asyncData({ store, $axios, app }) {
    try {
      const resp = await $axios.get('/app/main/getreports');
      return {
        reports: resp.data.reports,
      };
    } catch (e) {
      console.log(e);
      return { reports: [] };
    }
  },
  data() {
    return {
      reports: this.reports,
      title: '',
      loading: false,
      selected: this.$route.query.report,
      comment: {
        desc: '',
      },
    };
  },
  head() {
    return {
      title: 'Inbox',
      script: [
        {
          hid: 'rzpay',
          src: 'https://checkout.razorpay.com/v1/checkout.js',
          defer: true,
        },
      ],
    };
  },
  watch: {
    $route(to, from) {
      this.selected = this.$route.query.report;
    },
  },
};
</script>

<style scoped>
.v-btn::before {
  background-color: transparent !important;
}

.inbox-card,
.report-card {
  height: 600px; /* Fixed height for both cards */
  width: 100%; /* Ensure cards take full column width */
  display: flex;
  flex-direction: column;
}

.inbox-card .v-card__title,
.report-card .v-card__title {
  flex: 0 0 auto; /* Title stays fixed */
}

.inbox-card .v-card__text,
.report-card .v-card__text {
  flex: 1 1 auto; /* Text area takes remaining space */
  overflow-y: auto; /* Scrollable content */
}
</style>