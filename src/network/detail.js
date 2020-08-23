import {request} from '@/network/request'

export function detail(id) {
  return request({
    url:'/detail',
    params:{
      iid:id
    }
  })
}
export function recommend() {
  return request({
    url:'/recommend' ,
  })
}

