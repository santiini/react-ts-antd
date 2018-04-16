import axios from 'axios'

const api = {}
const init = () => {
  if(!localStorage.getItem('access_token')) {
    return Error('has no access_token')
  }
  api.instance = axios.create({
    baseURL: '/api_kol',
    headers: {
      'x-auth-token': localStorage.getItem('access_token'),
      'content-type': 'application/json',
    }
  })
  api.social = axios.create({
    baseURL: '/api_v3',
    headers: {
      'x-auth-token': localStorage.getItem('access_token'),
      'content-type': 'application/json',
    }
  })
}

api.init = init

export default api
