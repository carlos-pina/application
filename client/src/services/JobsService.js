import Api from '@/services/api'

export default {
  gets () {
    return Api().get('jobs')
  },
  get (jobId) {
    return Api().get(`jobs/${jobId}`)
  },
  post (job) {
    return Api().post('jobs', job)
  },
  put (job) {
    return Api().put('jobs', job)
  },
  delete (jobId) {
    return Api().delete(`jobs/${jobId}`)
  }
}
