import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// import { counter } from './index.redux'

import AuthRoute from './component/authroute/authroute'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
import Login from './containers/login/login'
import Register from './containers/register/register'
import BossInfo from './containers/bossinfo/bossinfo'
import GeniusInfo from './containers/geniusinfo/geniusinfo'
import reducers from './reducer'

import './config'
import './index.css'
import { chatuser } from './redux/chatuser.redux';

const store = createStore(reducers,
  compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
console.log('state: ', store.getState())
// const Boss = () => <h2>BOSS页面</h2>

// boss genius me msg 4个页面
ReactDOM.render(
  (<Provider store={store}>
  <BrowserRouter>
    <div>
      <AuthRoute></AuthRoute>
      <Switch>
        {/* <Route path='/boss' component={Boss}></Route> */}
        <Route path='/bossinfo' component={BossInfo}></Route>
        <Route path='/geniusinfo' component={GeniusInfo}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/chat/:user' component={Chat}></Route>
        <Route component={Dashboard}></Route>
      </Switch>
    </div>
  </BrowserRouter>
  </Provider>),
  document.getElementById('root'),
  () => {
    console.log('渲染成功')
  }
)
