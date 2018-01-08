import { createStore } from 'redux'
// 1 新建store
// 通过reducer建立
// 根据老的状态state和action 生成新的状态state
function counter(state=0, action) {
  // 第一步： 定义计算规则，即 reducer  index.redux.js
  switch(action.type){
    case '加机关枪':
      return state + 1
    case '减机关枪':
      return state - 1
    default:
      return 10
  }
}
// 第二步： 根据计算规则生成 store 
const store = createStore(counter)

const init = store.getState()
console.log('柯文曰：', init)

let listener = ()=>{
  const current = store.getState()
  console.log(`现在有机枪${current}把`)
}
// 第三步： 定义数据（即 state）变化之后的派发规则 
store.subscribe(listener)。//subscibe 订阅
// 派发事件 传递action
// 第四步： 触发数据变化 
store.dispatch({type: '加机关枪'})。//dispatch派遣
console.log('柯文加机关枪曰：', store.getState())
store.dispatch({type: '减机关枪'})
console.log('柯文减机关枪曰：', store.getState())
store.dispatch({type: '柯文'})