import React from 'react'
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGUNAsync } from './index.redux'

@connect((state)=>({ num: state.counter }), { addGUN, removeGUN, addGUNAsync })

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>现在keven有机关枪 {this.props.num}把 </h1>
        <button onClick={this.props.addGUN}>申请武器</button>
        <button onClick={this.props.removeGUN}>上缴武器</button>
        <button onClick={this.props.addGUNAsync}>异步申请武器</button>
      </div>
    )
  }
}
export default App