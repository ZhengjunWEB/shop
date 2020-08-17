import axios from 'axios'

export function request(params) {
  const instance = axios.create({
    baseURL:"http://152.136.185.210:8000/api/z8",
    timeout:5000
  })

  instance.interceptors.response.use(res => {
    return res.data
  })  

  return instance(params)
}
