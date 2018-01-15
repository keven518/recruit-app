import React from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
  state => state.chatuser,
  { getUserList }
)
class Boss extends React.Component{
  componentDidMount() {
    this.props.getUserList('genius')
    console.log('this.props.userList: ', this.props.userList)
  }
  render(){
    console.log('this.state: ', this.state)
    
    return <UserCard userList={this.props.userList}></UserCard>
  }
}

export default Boss