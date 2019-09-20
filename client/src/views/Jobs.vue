<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8">
      <job v-for="job in jobs" :job="job" :key="job.id"/>
    </v-col>
  </v-row>
</template>

<script>
import JobsService from '@/services/JobsService'
import Job from '@/components/Job.vue'

export default {
  name: 'jobs',
  components: {
    Job
  },
  data () {
    return {
      jobs: null
    }
  },
  async mounted () {
    this.jobs = (await JobsService.gets()).data
  }
}
</script>
