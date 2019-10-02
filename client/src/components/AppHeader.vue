<template>
  <div>
    <v-navigation-drawer app temporary v-model="drawer" height="50%">
      <v-list dense>
        <v-list-item @click="goHome">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!$store.state.isUserLoggedIn" @click="goLogin">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!$store.state.isUserLoggedIn" @click="goRegister">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="$store.state.isUserLoggedIn" @click="goLogout">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="goJobs">
          <v-list-item-action>
            <v-icon>mdi-anvil</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Jobs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="createJob">
          <v-list-item-action>
            <v-icon>mdi-arm-flex</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Create a Job</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dense elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    goHome () {
      this.$router.push({
        name: 'home'
      })
    },
    goLogin () {
      this.$router.push({
        name: 'login'
      })
    },
    goRegister () {
      this.$router.push({
        name: 'register'
      })
    },
    goLogout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    },
    goJobs () {
      this.$router.push({
        name: 'jobs'
      })
    },
    createJob () {
      this.$router.push({
        name: 'createJob'
      })
    }
  }
}
</script>
