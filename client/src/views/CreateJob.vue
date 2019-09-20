<template>
  <v-form ref="form" v-model="valid">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="4">
        <v-select
          label="Category"
          required
          :rules="[required]"
          v-model="job.category"
          :items="categories"
        ></v-select>

        <v-select
          label="Subcategory"
          required
          :rules="[required]"
          v-model="job.subcategory"
          :items="subcategories"
        ></v-select>
      </v-col>

      <v-col cols="12" sm="4">
        <v-text-field
          label="Deadline"
          required
          :rules="[required]"
          v-model="job.deadline"
          type="date"
        ></v-text-field>

        <v-text-field
          label="City"
          required
          :rules="[required]"
          v-model="job.city"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <v-text-field
          label="Summary"
          required
          :rules="[required]"
          v-model="job.summary"
        ></v-text-field>

        <v-textarea
          label="Description"
          required
          auto-grow
          :rules="[required]"
          v-model="job.description"
          rows="1"
        ></v-textarea>

        <div class="danger-alert" v-if="error">
          {{error}}
        </div>

        <v-btn
          :disabled="!valid"
          class="mr-4"
          @click="save">
          Save
        </v-btn>
        <v-btn
          class="mr-4"
          :to="{
            name: 'jobs'
          }">
          Return
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import moment from 'moment'
import JobsService from '@/services/JobsService'

export default {
  name: 'createJob',
  data () {
    return {
      valid: true,
      job: {
        _id: null,
        category: null,
        subcategory: null,
        summary: null,
        description: null,
        deadline: null,
        city: null
      },
      error: null,
      categories: [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4'
      ],
      subcategories: [
        'SubCategory 1',
        'SubCategory 2',
        'SubCategory 3',
        'SubCategory 4'
      ],
      required: (value) => !!value || 'Required.'
    }
  },
  async mounted () {
    try {
      this.job._id = this.$route.params.jobId
      if (this.job._id !== undefined) {
        this.job = (await JobsService.get(this.job._id)).data
        this.job.deadline = moment(this.job.deadline).format('YYYY-MM-DD')
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async save () {
      this.error = null
      if (this.$refs.form.validate()) {
        try {
          if (this.job._id !== undefined) {
            await JobsService.put(this.job)
          } else {
            await JobsService.post(this.job)
          }
          this.$refs.form.reset()
          this.$router.push({
            name: 'jobs'
          })
        } catch (err) {
          console.log(err)
        }
      } else {
        this.error = 'Please fill in all the required fields.'
      }
    }
  }
}
</script>
