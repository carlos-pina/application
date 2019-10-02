import Api from '@/services/api'

export default {
  login (credentials) {
    return Api().post('users/login', credentials)
  },
  register (credentials) {
    return Api().post('users', credentials)
  }
}
