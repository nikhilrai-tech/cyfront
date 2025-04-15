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
            <div v-if="question.image">
              <v-img :src="`https://cyback.onrender.com${question.image}`" max-width="200" />
              <v-btn 
                color="primary" 
                @click="downloadImage(question.image)"
                class="mt-2"
              >
                Download Image
              </v-btn>
            </div>
            <div v-if="question.file_upload">
              <p>File: <a :href="`https://cyback.onrender.com${question.file_upload}`" target="_blank">Download</a></p>
            </div>
            <v-btn 
              color="success" 
              @click="submitSingleAnswer(question.id)"
              class="mt-2"
            >
              Submit Answer
            </v-btn>
          </v-card-text>
        </v-card>
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
    async downloadImage(imagePath) {
      const response = await fetch(`https://cyback.onrender.com${imagePath}`);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = imagePath.split('/').pop(); // Set the filename to the last part of the path
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href); // Clean up the URL object
    },
    async submitSingleAnswer(questionId) {
      const answer = this.userAnswers[questionId];

      // Check for empty answer
      if (!answer) {
        alert('Please provide an answer before submitting.');
        return;
      }

      const challengeId = this.$route.params.challengeId;
      const token = localStorage.getItem('token'); // Retrieve the token

      try {
        const response = await axios.post(`https://cyback.onrender.com/api/challenges/${challengeId}/submit-answers/`, {
          answers: [{ questionId, answer }], // Wrap the answer in an array
        }, {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the Authorization header
          }
        });
        alert(response.data.message);
      } catch (error) {
        console.error('Error submitting answer:', error);
        alert('Failed to submit answer. Please try again.');
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