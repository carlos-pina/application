import Api from '@/services/api'

export default {
  gets () {
    return Api().get('categories')
  }
}
