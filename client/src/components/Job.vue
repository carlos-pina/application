<template>
  <v-card class="ma-2">
    <v-card-title>{{job.summary}}</v-card-title>
    <v-card-text>
      <span>{{job.city}} - {{moment(job.deadline).format('DD-MM-YYYY')}}</span><br>
      <span class="text--primary">
        {{job.description}}
      </span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="mr-4"
        @click="editJob (job._id)">
        Edit
      </v-btn>
      <v-btn
        class="mr-4"
        @click="deleteJob">
        Delete
      </v-btn>
      <v-btn
        class="mr-4"
        @click="applyJob">
        Apply
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import JobsService from '@/services/JobsService'

export default {
  name: 'job',
  props: {
    job: Object
  },
  methods: {
    editJob (idJob) {
      this.$router.push({
        name: 'editJob',
        params: {
          jobId: idJob
        }
      })
    },
    async deleteJob () {
      try {
        await JobsService.delete(this.job._id)
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log(err)
      }
    },
    async applyJob () {
      alert('Do you really apply to this job?')
    }
  }
}
</script>>
