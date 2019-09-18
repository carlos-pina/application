<template>
  <div>
    <v-row align="center" justify="center" class="my-12">
      <!--
      <v-btn
        :to="{
          name: 'createJob'
        }">
        Create a new job
      </v-btn>
      <show-jobs v-for="job in jobs" :job="job" :key="job.id"/>
      -->
      <v-col cols="12" sm="8" md="4">
        <v-autocomplete
          label="Jobs"
          placeholder="Start typing to Search"
          prepend-icon="mdi-magnify"
          >
        </v-autocomplete>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="my-12">
      <v-col cols="12" sm="8" md="8">
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(cat,i) in 5"
            :key="i"
          >
            <v-expansion-panel-header>Category {{i + 1}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <span
                v-for="(sub,j) in 4"
                :key="j"
              >
                <v-chip
                  class="ma-2"
                  color="primary"
                  outlined
                  pill
                  @click="showMessage"
                >
                  SubCategory {{j}}
                </v-chip>
              </span>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import ShowJobs from '@/components/ShowJobs.vue'
import JobsService from '@/services/JobsService'

export default {
  name: 'home',
  components: {
    // ShowJobs
  },
  data () {
    return {
      jobs: null
    }
  },
  async mounted () {
    this.jobs = (await JobsService.gets()).data
  },
  methods: {
    showMessage () {
      alert('Subcategory...')
    }
  }
}
</script>
