import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Jobs from './views/Jobs.vue'
import CreateJob from './views/CreateJob.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/createJob',
      name: 'createJob',
      component: CreateJob
    },
    {
      path: '/editJob/:jobId',
      name: 'editJob',
      component: CreateJob
    }
  ]
})
