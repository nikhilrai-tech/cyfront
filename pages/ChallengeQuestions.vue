<template>
    <v-container fluid class="ctf-container">
      <v-row align="center" class="mb-4">
        <v-col cols="8">
          <h1 class="d-flex align-center">
            <v-icon large class="mr-2">mdi-flag-checkered</v-icon>
            Questions for Challenge: {{ challenge.name }}
          </h1>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12">
          <v-card v-for="question in questions" :key="question.id" class="mb-3">
            <v-card-title>{{ question.title }}</v-card-title>
            <v-card-text>
              <p>{{ question.description }}</p>
              <v-text-field
                v-model="userAnswers[question.id]"
                label="Your Answer"
                outlined
              />
            </v-card-text>
          </v-card>
          <v-btn color="success" @click="submitAnswers">Submit Answers</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ChallengeQuestions',
    data() {
      return {
        challenge: {},
        questions: [],
        userAnswers: {},
      };
    },
    created() {
      this.fetchChallengeQuestions();
    },
    methods: {
      async fetchChallengeQuestions() {
        const challengeId = this.$route.params.challengeId;
        const token = localStorage.getItem('token'); // Retrieve the token
  
        try {
          const response = await axios.get(`https://cyback.onrender.com/api/challenges/${challengeId}/questions/`, {
            headers: {
              'Authorization': `Bearer ${token}` // Include the token in the Authorization header
            }
          });
          this.challenge = response.data.challenge;
          this.questions = response.data.questions;
        } catch (error) {
          console.error('Error fetching challenge questions:', error);
          alert('Failed to fetch questions. Please check your authentication.');
        }
      },
      async submitAnswers() {
        const challengeId = this.$route.params.challengeId;
        const answers = Object.entries(this.userAnswers).map(([questionId, answer]) => ({
          questionId,
          answer,
        }));
  
        const token = localStorage.getItem('token'); // Retrieve the token
  
        try {
          const response = await axios.post(`https://cyback.onrender.com/api/challenges/${challengeId}/submit-answers/`, { answers }, {
            headers: {
              'Authorization': `Bearer ${token}` // Include the token in the Authorization header
            }
          });
          alert(response.data.message);
          this.$router.push('/ctf'); // Redirect to the /ctf page on success
        } catch (error) {
          console.error('Error submitting answers:', error);
          alert('Failed to submit answers. Please try again.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .ctf-container {
    min-height: 100vh;
    padding-bottom: 2rem;
  }
  </style>