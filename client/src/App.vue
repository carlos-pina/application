<template>
  <v-app>
    <page-header/>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PageHeader from '@/components/AppHeader.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  },
  data: () => ({
    drawer: null
  })
}
</script>
