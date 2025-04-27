<template>
  <v-container fluid class="ctf-container">
    <v-row align="center" class="mb-4">
      <v-col cols="12" sm="8">
        <h1 class="d-flex align-center">
          <v-icon large class="mr-2">mdi-flag-checkered</v-icon>
          <span>Capture The Flag</span>
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>How to Participate in CTF Challenges</v-card-title>
          <v-card-text>
            <div class="video-container">
              <iframe
                :src="youtubeEmbedUrl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Your Certificates</h2>
        <div v-if="certificates.length > 0">
          <v-row>
            <v-col
              v-for="certificate in certificates"
              :key="certificate.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card class="certificate-card">
                <v-card-title class="text-body-1">{{ certificate.challenge_name }}</v-card-title>
                <v-card-text>
                  <img :src="certificate.url" alt="Certificate" class="certificate-image" />
                  <v-btn
                    color="primary"
                    block
                    class="mt-2"
                    @click="downloadCertificate(certificate.url)"
                  >
                    Download Certificate
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <v-card v-else>
          <v-card-title>No Certificates Available</v-card-title>
          <v-card-text>
            You have not earned any certificates yet.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <h2>Active Challenges</h2>
        <v-card
          v-for="challenge in activeChallenges"
          :key="challenge.id"
          class="mb-3 success-border"
          hover
        >
          <v-card-title class="text-h6">{{ challenge.name }}</v-card-title>
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

      <v-col cols="12" md="6">
        <h2>Upcoming Challenges</h2>
        <v-card
          v-for="challenge in upcomingChallenges"
          :key="challenge.id"
          class="mb-3 grey-border"
          hover
        >
          <v-card-title class="text-h6">{{ challenge.name }}</v-card-title>
          <v-card-text>
            <p>{{ challenge.description }}</p>
            <v-chip color="info" small>Upcoming</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Leaderboard</v-card-title>
          <v-data-table
            :headers="leaderboardHeaders"
            :items="leaderboard"
            hide-default-footer
            class="elevation-0"
            :items-per-page="5"
            mobile-breakpoint="600"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Your Stats</v-card-title>
          <v-card-text>
            <p><strong>Username:</strong> {{ userStats.username }}</p>
            <p><strong>Challenges Solved:</strong> {{ userStats.challenges_solved }}</p>
            <p><strong>Total Points:</strong> {{ userStats.points }}</p>
            <v-progress-linear
              :value="Math.min((userStats.challenges_solved / 10) * 100, 100)"
              color="success"
              height="20"
              rounded
            >
              <template #default>
                {{ userStats.challenges_solved }}/10
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
      youtubeEmbedUrl: 'https://www.youtube.com/embed/_KlNzxXBoB0?si=uYwCbKnFfriFIZbM',
      activeChallenges: [],
      upcomingChallenges: [],
      leaderboardHeaders: [
        { text: 'Rank', value: 'rank', width: '15%' },
        { text: 'Name', value: 'name', width: '35%' },
        { text: 'Points', value: 'points', width: '25%' },
        { text: 'Solved', value: 'challenges_solved', width: '25%' },
      ],
      leaderboard: [],
      userStats: {
        username: '',
        points: 0,
        challenges_solved: 0,
      },
      certificates: [],
    };
  },
  mounted() {
    this.fetchChallenges();
    this.fetchLeaderboard();
    this.fetchUserStats();
    this.fetchCertificates().then(() => {
      console.log('Certificates:', this.certificates);
    });
  },
  methods: {
    async fetchChallenges() {
      try {
        const response = await axios.get('https://cyback.onrender.com/api/challenges/');
        const now = new Date();

        this.activeChallenges = response.data.filter(
          (challenge) => challenge.active && new Date(challenge.end_date) > now
        );
        this.upcomingChallenges = response.data.filter(
          (challenge) => new Date(challenge.start_date) > now
        );
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    },
    async fetchLeaderboard() {
      try {
        const response = await axios.get('https://cyback.onrender.com/api/leaderboard/');
        this.leaderboard = response.data.map((user, index) => ({
          rank: index + 1,
          name: user.username,
          points: user.points,
          challenges_solved: user.challenges_solved,
        }));
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    },
    async fetchUserStats() {
      if (process.client) {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('You need to log in to view your stats.');
          this.$router.push('/login');
          return;
        }

        try {
          const response = await axios.get('https://cyback.onrender.com/api/user/stats/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.userStats = response.data;
        } catch (error) {
          console.error('Error fetching user stats:', error);
        }
      }
    },
    async fetchCertificates() {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('You need to log in to view your certificates.');
        this.$router.push('/login');
        return;
      }

      try {
        const response = await axios.get('https://cyback.onrender.com/generate-certificate/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.certificates = response.data;
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    },
    async joinChallenge(challengeId) {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('You need to log in to join a challenge.');
        this.$router.push('/login');
        return;
      }
      try {
        const response = await axios.post(
          `https://cyback.onrender.com/api/challenge/${challengeId}/join/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert(response.data.message);
        this.$router.push({ name: 'ChallengeQuestions', params: { challengeId } });
      } catch (error) {
        console.error('Error joining challenge:', error);
        alert('Failed to join challenge. Please check your authentication.');
      }
    },
    async downloadCertificate(imagePath) {
      console.log('Downloading:', imagePath);
      try {
        const response = await fetch(`https://cyback.onrender.com${imagePath}`);
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = imagePath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      } catch (error) {
        console.error('Error downloading the certificate:', error);
      }
    },
  },
};
</script>

<style scoped>
.ctf-container {
  min-height: 100vh;
  padding: 1rem;
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
  border-left: 4px solid #4caf50;
}

.grey-border {
  border-left: 4px solid #757575;
}

h1 {
  font-size: clamp(1.8rem, 5vw, 2.2rem);
  font-weight: 600;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  font-weight: 600;
  margin-bottom: 1rem;
}

h3 {
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-weight: 600;
}

/* Responsive Video Container */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Certificate Card */
.certificate-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.certificate-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 200px;
  margin-bottom: 1rem;
}

/* Responsive Table */
.v-data-table {
  width: 100%;
}

.v-data-table >>> .v-data-table__wrapper {
  overflow-x: auto;
}

/* Responsive Spacing */
@media (max-width: 600px) {
  .ctf-container {
    padding: 0.5rem;
  }

  .v-card {
    margin-bottom: 0.5rem;
  }

  .certificate-card {
    margin: 0.5rem 0;
  }

  .v-btn {
    width: 100%;
  }
}

/* Adjust card title font sizes */
.v-card-title {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  word-break: break-word;
}

/* Ensure buttons are full-width on small screens */
.v-card-actions .v-btn {
  width: 100%;
  justify-content: center;
}

@media (min-width: 600px) {
  .v-card-actions .v-btn {
    width: auto;
  }
}
</style>