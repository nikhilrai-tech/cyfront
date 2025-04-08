<template>
  <div>
    {{message}}
    <br>
    <span v-if="data.razorpay_payment_id">Payment ID: {{data.razorpay_payment_id}},</span> 
    <span v-if="data.razorpay_order_id">Order ID: {{data.razorpay_order_id}}</span>
    <!-- <span v-if="data.razorpay_signature">Signature: {{data.razorpay_signature}}</span> -->
    <br>
    <nuxt-link to="/inbox"><v-btn color="primary">Go to Inbox</v-btn></nuxt-link>
    <nuxt-link v-if="report" :to="`/inbox?report=${report}`"><v-btn color="success" outlined>Go to Report</v-btn></nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'PaymentPage',
  async asyncData ({ req, res, $axios }) {
    if (process.server && req) {
      const qs = require('querystring')
      let body = ''
      let temp = ''
      let paymentData = ''

      temp = req.read()
      body += temp
 
      paymentData = qs.parse(body)
      // if (paymentData || paymentData!==undefined){
        
      // console.log(paymentData)
      // }
      // else{
      //   console.log('no')
      // }
      // if not 
      
      try {
          const resp = await $axios.post('/app/user/paymenthandler/'+paymentData.razorpay_order_id, paymentData)
          return { data: paymentData, done: resp.data.paid, message: resp.data.message, report: resp.data.report }
      } catch (e) {
          console.log(e)
          return { data: paymentData, done: false, message: 'Something went wrong' }
      }
    }
    else{
      return { data: {}, done: false, message: 'Something went wrong'}
    }
  },
 
  data () {
    return {
      data: {},
      done: false,
      message: '',
      report: null
    }
  },

  // mounted () {
  //     if (this.paymentData || this.paymentData!==undefined){
        
  //     console.log(this.paymentData)
  //     }
  //     else{
  //       this.done = false
  //     }
  // }
}
</script>