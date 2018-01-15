import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'
import kevenForm from '../../component/keven-form/keven-form'

// function hello() {
//   console.log('hello keven i love react')
// }


// function WrapperHello(fn) {
//   return () => {
//     console.log('before: ')
//     fn()
//     console.log('after: ')
//   }
// }

// hello = WrapperHello(hello)
// hello()


// // 属性代理
// function WrapperHello(Comp) {
//   class WrapComp extends React.Component{
//     render() {
//       return (<div>
//         <p>这是HOC高阶组件特有的元素</p>
//         <Comp name='柯文' {...this.props}></Comp>
//       </div>)
//     }
//   }
//   return WrapComp
// }

// // 反向继承
// function WrapperKeven(Comp) {
//   class WrapComp extends Comp{
//     componentDidMount() {
//       console.log('高阶组件新增的生命周期， 加载完成')
//     }
//     render() {
//       return <Comp></Comp>
//     }
//   }
//   return WrapComp
// }

// @WrapperKeven
// class Caimanman extends React.Component{
//   render() {
//     return <h2>Caimanman keven i love react{this.props.name}</h2>
//   }
// }

// @WrapperHello
// class Hello extends React.Component{
//   render() {
//     return <h2>hello keven i love react{this.props.name}</h2>
//   }
// }
// @WrapperHello
// class Keven extends React.Component{
//   render() {
//     return <h2>Keven keven i love react {this.props.name}</h2>
//   }
// }

@connect(
  state => state.user,
  { login }
)
@kevenForm
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  register() {
    console.log(this.props)
    this.props.history.push('/register')
  }
  handleLogin() {
    console.log('msg: ', this.props.msg)
    this.props.login(this.props.state)
  }
  render() {
    return (
      <div>
        {/* <Hello />
        <Keven />
        <Caimanman/> */}
        {(this.props.redirectTo && this.props.redirectTo != '/login') ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <h2>我是登陆页</h2>
        <WingBlank>
          <List>
            {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
            <InputItem
              onChange={v => this.props.handleChange('user', v)}
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v => this.props.handleChange('pwd', v)}
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type='primary'>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login