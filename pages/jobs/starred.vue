<template>
  <div>
      Starred Programs
  </div>
  
</template>

<script>
export default {
  name: 'JobStarredPage',
  data() {
    return {
      count: { referred: 0, visits: 39, reputation: 12, likes: 45 },
      awards: { completion: 35, earned: 6, }
    }
  }
  // middleware: 'router-auth'
}
</script>
