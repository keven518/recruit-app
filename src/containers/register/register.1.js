import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      type: 'genius'  //或者boss
    }
  }
  render(){
    const RadioItem = Radio.RadioItem
    return (
      <div> 
        <Logo/>
        <List>
          <InputItem>用户名</InputItem>
          <InputItem>密码</InputItem>
          <InputItem>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type==='genuis'}>
            牛逼
          </RadioItem>
          <RadioItem checked={this.state.type==='boss'}>
            boss
          </RadioItem>
        </List>
      </div>
      )
  }
}

export default Register