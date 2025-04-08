<template>
  <div v-if="details">
    <!-- {{$auth.user.is_staff}}, {{$auth.user.is_company}} -->
    <!-- <div v-if="$auth.user.is_company">
    </div> -->
    <!-- <div v-else> -->
      <div v-if="$auth.user.is_staff">
      <CompanyHeader :count="details.count" />
      <CompanyCharts :count="details.count" :overview="details.overview" :staff="details.staff" :programs="details.programs" />
        <!-- <StaffHeader :count="details.count" />
        <StaffCharts :count="details.count" :overview="details.overview" :staff="details.staff" :programs="details.programs" /> -->
      </div>
      <div v-else>
        <UserHeader :awards="details.awards" :count="details.count" />
        <UserCharts :awards="details.awards" :overview="details.report_overview" :count="details.count" />
      </div>
    <!-- </div> -->
  </div>
  <div v-else>
    Something went wrong
  </div>
  
</template>

<script>
import UserHeader from "../components/app/UserHeader.vue";
import UserCharts from "../components/app/UserCharts.vue";
// import StaffHeader from "../components/app/StaffHeader.vue";
// import StaffCharts from "../components/app/StaffCharts.vue";
import CompanyHeader from "../components/app/CompanyHeader.vue";
import CompanyCharts from "../components/app/CompanyCharts.vue";
export default {
  name: 'DashboardPage',
  components: {
    UserHeader,
    UserCharts,
    // StaffHeader,
    // StaffCharts,
    CompanyHeader,
    CompanyCharts,
  },
  async asyncData({ params, $axios }) {
      // await console.log('hi')
      try {
        const resp = await $axios.get('/app/accounts/dashboarding')
        // console.log(resp.data)
        if(resp.data.error){
          return {error: true, message: 'Something went wrong'}
        }
        else{
          return {error: false, details: resp.data} 
        }
      }
      catch(e){
        console.log(e)
          return {error: true, message: 'Something went wrong'}
      }
  },
  data() {
    return {
      details: this.details,
      // details: {
      //   count: { referred: 0, visits: 0, reputation: 0, likes: 0 },
      //   awards: { completion: 0, earned: 3, indexes: this.$auth.user.award }
      // },
      error: false
    }
  },
  head() {
    return {
      title: 'Dashboard',
    }
  },
  // mounted () {
  //   console.log(this.$auth.user.awards)
  // }
  // middleware: 'router-auth'
}
</script>
