<template>
  <div>
    <v-row align="center" justify="center" class="my-12">
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
            v-for="(cat,i) in 4"
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
                  SubCategory {{j + 1}}
                </v-chip>
              </span>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <page-footer/>
  </div>
</template>

<script>
import PageFooter from '@/components/AppFooter.vue'

export default {
  name: 'home',
  components: {
    PageFooter
  },
  methods: {
    showMessage () {
      alert('Subcategory...')
    }
  }
}
</script>
