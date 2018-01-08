import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import { counter, addGUN, removeGUN, addGUNAsync } from './index.redux'

const store = createStore(counter, applyMiddleware(thunk))

function render() {
  ReactDOM.render(
    (
      <App
        store={store}
        addGUNAsync={addGUNAsync}
        addGUN={addGUN}
        removeGUN={removeGUN}
      />
    ),
    document.getElementById('root'),
    () => {
      console.log('渲染成功')
    }
  )
}

render()
store.subscribe(render)