import { setTimeout } from "timers";

// 第一步： 定义计算规则，即 reducer 
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

export function counter(state=10, action) {  
  console.log('state: ', state)
  switch(action.type){
    case ADD_GUN:
      return state + 1
    case REMOVE_GUN:
      return state - 1
    default:
      return state
  }
}
// action creator
export function addGUN() {
  return {type:ADD_GUN}
}
export function removeGUN() {
  return {type:REMOVE_GUN}
}
export function addGUNAsync() {
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(addGUN())
    }, 2000)
  }
}