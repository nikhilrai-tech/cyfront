<template>
    <div>
        <form class="mt-6 text-center" @submit.prevent="contact">
            <v-text-field v-if="!$auth.loggedIn" v-model="name" outlined placeholder="Name" required name="name"></v-text-field>
            <v-text-field v-if="!$auth.loggedIn" v-model="email" outlined placeholder="Email" required name="email"></v-text-field>
            <v-text-field v-model="subject" outlined placeholder="Subject" required name="subject"></v-text-field>
            <v-textarea v-model="message"  auto-grow outlined rows="3" row-height="45" placeholder="Message" name="message"></v-textarea>
            <v-btn type="submit" color="primary">Go</v-btn>
        </form>

    </div>
</template>

<script>
export default {
    name: 'ContactComponent',
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    },
    methods: {
        async contact() {
            console.log('e')
            try{
                const resp = await this.$axios.post('/app/accounts/contact',
                {
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
                    message: this.message,
                })
              //  console.log(resp.data)
                if(!resp.data.error){
                    this.name = '';
                    this.email = '';
                    this.subject = '';
                    this.message = '';
                }
            }
            catch(e){
                console.log(e)
            }
        }
    }
    // created(){
    //     this.fetch()
    // }
}
</script>