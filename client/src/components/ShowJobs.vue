<template>
  <div>
    <v-card class="ma-12">
      <v-card-title>{{job.category}}</v-card-title>
      <v-card-text>{{job.summary}}</v-card-text>
      <v-card-actions>
        <v-btn
          :to="{
            name: 'editJob',
            params: {
              jobId: job._id
            }
          }">
          Edit
        </v-btn>
        <v-btn>
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'job',
  props: {
    job: Object
  }
}
</script>>
