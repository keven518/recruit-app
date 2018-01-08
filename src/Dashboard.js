import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './Auth.redux'

let Cmm = () => <h2> cmm </h2>
// let Cj = () => <h2> cj </h2>
let Cw = () => <h2> cw</h2>

@connect(state=>state.auth, { logout} )

class Dashboard extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  render() {
    console.log(this.props)
    const match = this.props.match
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        <h1>kv</h1>
        {this.props.isAuth ? <button onClick={this.props.logout}>退出</button> : null}
        <ul>
          <li>
            <Link to={`${match.url}/`}>首页</Link>
          </li>
          <li>
            <Link to={`${match.url}/cmm`}>蔡曼曼</Link>
          </li>
          <li>
            <Link to={`${match.url}/cw`}>蔡伟</Link>
          </li>
        </ul>
        <Route path={`${match.url}/`} exact component={App}></Route>
        <Route path={`${match.url}/cmm`} component={Cmm}></Route>
        <Route path={`${match.url}/cw`} component={Cw}></Route>
      </div>
    )
    return this.props.isAuth ? app : redirectToLogin
  }
}

export default Dashboard