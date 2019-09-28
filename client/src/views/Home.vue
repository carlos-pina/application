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
            v-for="category in categories"
            :category="category"
            :key="category.id"
          >
            <v-expansion-panel-header>{{category.name}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <span
                v-for="subcategory in category.subcategories"
                :subcategory="subcategory"
                :key="subcategory.id"
              >
                <v-chip
                  class="ma-2"
                  color="primary"
                  outlined
                  pill
                  @click="search (subcategory.name)"
                >
                  {{subcategory.name}}
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
import CategoriesService from '@/services/CategoriesService'
import PageFooter from '@/components/AppFooter.vue'

export default {
  name: 'home',
  components: {
    PageFooter
  },
  data () {
    return {
      categories: null
    }
  },
  async mounted () {
    this.categories = (await CategoriesService.gets()).data
  },
  methods: {
    search (name) {
      alert(`Searching for ${name}`)
    }
  }
}
</script>
