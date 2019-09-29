<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card>
        <v-toolbar flat>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Email"
              required
              :rules="[required]"
              prepend-icon="mdi-account"
              v-model="credentials.email"
              type="email"
            ></v-text-field>
            <v-text-field
              label="Password"
              required
              :rules="[required]"
              prepend-icon="mdi-lock"
              v-model="credentials.password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            :disabled="!valid"
            @click="login">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar v-model="snackbar">
        {{ error }}
        <v-btn 
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  name: 'login',
  data () {
    return {
      error: null,
      snackbar: false,
      valid: true,
      credentials: {
        email: null,
        password: null
      },
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async login () {
      try {
        const data = (await UsersService.login(this.credentials)).data
        console.log(data.token)
        this.$refs.form.reset()
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        this.error = err.response.data
        this.snackbar = true
      }
    }
  }
}
</script>
