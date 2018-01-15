import React from 'react'
import { List, InputItem } from 'antd-mobile'
import io from 'socket.io-client'

class Chat extends React.Component{
  componentDidMount() {
    const socket = io('ws://localhost:9093')
  }
  render(){
    console.log(this.props)
    return (<h2>Chat with user: {this.props.match.params.user}</h2>)
  }
}

export default Chat