<template>
  <v-app>
    <page-header/>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <page-footer/>
  </v-app>
</template>

<script>
import PageHeader from '@/components/AppHeader.vue'
import PageFooter from '@/components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  },
  data: () => ({
    drawer: null
  })
}
</script>
