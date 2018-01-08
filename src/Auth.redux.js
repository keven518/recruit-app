import axios from 'axios'

// 登录相关redux页面
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'

const initState = {
  isAuth:false, 
  User:'朱棣',
  age: 20
}

export function auth(state=initState, action){
  console.log('======start=====')
  console.log(state, action)
  console.log('======end=====')
  switch(action.type){
    case LOGIN:
      return {...state, isAuth:true}
    case LOGOUT:
      return {...state, isAuth:false}
    case USER_DATA:
      return {...state, ...action.payload}
    default: 
      return state
  }
}

export function getUserData() {
  // diapatch 用来通知数据修改
  return dispatch => {
    axios.get('/data')
    .then(res=>{
      if(res.status===200){
        dispatch(userData(res.data))
      }
    })
  }
}
// action 
export function userData(data) {
  return {type:USER_DATA, payload: data}
}
export function login() {
  return {type: LOGIN}
}

export function logout() {
  return {type: LOGOUT}
}