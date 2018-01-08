import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// import { counter } from './index.redux'
import reducers from './reducer'

import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'

const store = createStore(reducers,
  compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
console.log('state: ', store.getState())
// let Cmm = () => <h2> cmm </h2>
// let Cj = () => <h2> cj </h2>
// let Cw = () => <h2> cw</h2>
// class Text extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     console.log(this.props)
//     return <h2>测试组建 {this.props.match.params.location}</h2>
//   }
// }

// 登录 没有登录信息 统一跳转login
// 页面 导航+显示+注销 cmm cw cj
// router + redux


ReactDOM.render(
  (<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Auth}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Redirect to='/dashboard'></Redirect>
    </Switch>
  </BrowserRouter>
  </Provider>),
  document.getElementById('root'),
  () => {
    console.log('渲染成功')
  }
)
