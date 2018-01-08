import axios from 'axios'
import { Toast } from 'antd-mobile'

//  拦截请求
axios.interceptors.request.use((config) => {
  Toast.loading('加载中...', 0)
  return config
})

//  拦截相应
axios.interceptors.response.use((config) => {
  console.log('config: ', config)
  setTimeout(()=>{
    Toast.hide()
  }, 0)
  return config
})
