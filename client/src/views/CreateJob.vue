<template>
  <div>
    <v-flex xs6>
      <div>
        <v-text-field
          label="Category"
          required
          :rules="[required]"
          v-model="job.category"
        ></v-text-field>

        <v-text-field
          label="Subcategory"
          required
          :rules="[required]"
          v-model="job.subcategory"
        ></v-text-field>

        <v-text-field
          label="Summary"
          required
          :rules="[required]"
          v-model="job.summary"
        ></v-text-field>

        <v-text-field
          label="Description"
          required
          multi-line
          :rules="[required]"
          v-model="job.description"
        ></v-text-field>

        <v-text-field
          label="Deadline"
          required
          :rules="[required]"
          v-model="job.deadline"
        ></v-text-field>

        <v-text-field
          label="City"
          required
          :rules="[required]"
          v-model="job.city"
        ></v-text-field>
      </div>

      <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <v-btn
        @click="save">
        Save
      </v-btn>
      <v-btn
        :to="{
          name: 'home'
        }">
        Return
      </v-btn>
    </v-flex>
  </div>
</template>

<script>
import JobsService from '@/services/JobsService'

export default {
  name: 'createJob',
  data () {
    return {
      job: Object,
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  async mounted () {
    try {
      const jobId = this.$route.params.jobId
      this.job = (await JobsService.get(jobId)).data
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.job)
        .every(key => !!this.job[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await JobsService.post(this.job)
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
