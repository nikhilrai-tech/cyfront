<template>
  <v-container fluid class="ctf-container">
    <!-- Header -->
    <v-row align="center" class="mb-4">
      <v-col cols="8">
        <h1 class="d-flex align-center">
          <v-icon large class="mr-2">mdi-flag-checkered</v-icon>
          Capture The Flag
        </h1>
      </v-col>
    </v-row>

    <!-- Challenges Section -->
    <v-row>
      <!-- Active Challenges -->
      <v-col md="6" cols="12">
        <h2>Active Challenges</h2>
        <v-card
          v-for="challenge in activeChallenges"
          :key="challenge.id"
          class="mb-3 success-border"
          hover
        >
          <v-card-title>{{ challenge.name }}</v-card-title>
          <v-card-text>
            <p>{{ challenge.description }}</p>
            <h3 class="subtitle-1">Rules:</h3>
            <p>{{ challenge.rules }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="joinChallenge(challenge.id)">Join Challenge</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Upcoming Challenges -->
      <v-col md="6" cols="12">
        <h2>Upcoming Challenges</h2>
        <v-card
          v-for="challenge in upcomingChallenges"
          :key="challenge.id"
          class="mb-3 grey-border"
          hover
        >
          <v-card-title>{{ challenge.name }}</v-card-title>
          <v-card-text>
            <p>{{ challenge.description }}</p>
            <v-chip color="info" small>Upcoming</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Leaderboard & Stats Section -->
    <v-row>
      <!-- Leaderboard -->
      <v-col md="6" cols="12">
        <v-card>
          <v-card-title>Leaderboard</v-card-title>
          <v-data-table
            :headers="leaderboardHeaders"
            :items="leaderboard"
            hide-default-footer
            class="elevation-0"
          />
        </v-card>
      </v-col>

      <!-- Stats -->
      <v-col md="6" cols="12">
        <v-card>
          <v-card-title>Your Stats</v-card-title>
          <v-card-text>
            <p><strong>Challenges Solved:</strong> {{ stats.challengesSolved }}</p>
            <p><strong>Total Points:</strong> {{ stats.totalPoints }}</p>
            <p><strong>Rank:</strong> {{ stats.rank }}</p>
            <v-progress-linear
              :value="(stats.challengesSolved / 10) * 100"
              color="success"
              height="20"
              rounded
            >
              <template #default>
                {{ stats.challengesSolved }}/10
              </template>
            </v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CTF',
  data() {
    return {
      activeChallenges: [],
      upcomingChallenges: [],
      leaderboardHeaders: [
        { text: 'Rank', value: 'rank' },
        { text: 'Name', value: 'name' },
        { text: 'Points', value: 'points' },
      ],
      leaderboard: [],
      stats: {
        challengesSolved: 5,
        totalPoints: 2500,
        rank: 4,
      },
    };
  },
  created() {
    this.fetchChallenges();
    this.fetchLeaderboard();
  },
  methods: {
    async fetchChallenges() {
      try {
        const response = await axios.get('http://localhost:8000/api/challenges/');
        const now = new Date();

        // Categorize challenges based on their status
        this.activeChallenges = response.data.filter(challenge => challenge.active && new Date(challenge.end_date) > now);
        this.upcomingChallenges = response.data.filter(challenge => new Date(challenge.start_date) > now);

        // Debugging output
        console.log('Active Challenges:', this.activeChallenges);
        console.log('Upcoming Challenges:', this.upcomingChallenges);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    },
    async fetchLeaderboard() {
      try {
        const response = await axios.get('http://localhost:8000/api/leaderboard/');
        this.leaderboard = response.data;
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    },
    async joinChallenge(challengeId) {
      try {
        const response = await axios.post(`http://localhost:8000/api/challenge/${challengeId}/join/`, {}, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust for your auth method
          }
        });
        alert(response.data.message);
        this.fetchChallenges(); // Refresh challenges after joining
      } catch (error) {
        console.error('Error joining challenge:', error);
        alert('Failed to join challenge.');
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

.dark {
  background: #121212;
}

.light {
  background: #f5f5f5;
}

.header {
  border-bottom: 2px solid #4caf50;
}

.success-border {
  border-left: 5px solid #4caf50;
}

.grey-border {
  border-left: 5px solid #757575;
}

h1,
h2,
h3 {
  font-weight: 600;
}
</style>