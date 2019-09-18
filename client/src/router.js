import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateJob from './views/CreateJob.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
