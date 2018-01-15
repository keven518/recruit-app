import React from 'react'
import PropTypes from 'prop-types'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter
class UserCard extends React.Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
	}
	handleClick(v) {
		console.log('handleClick(v): ', v)
		this.props.history.push(`/chat/${v.user}`)
	}
  render(){
    console.log('this.state: ', this.state)
    const Header = Card.Header
    const Body = Card.Body
    return (
      <WingBlank>
			<WhiteSpace></WhiteSpace>
				{this.props.userList.map(v=>(
					v.avatar?(<div key={v._id}>
            <Card
							onClick={()=>this.handleClick(v)}
						>
						<Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.png`)}
							extra={<span>{v.title}</span>}
						></Header>
						<Body>
							{v.type=='boss'? <div>公司:{v.company}</div> :<div>职位:{v.title}</div>}

							{v.desc.split('\n').map(d=>(
								<div key={d}>{d}</div>
							))}
							{v.type=='boss'? <div>薪资:{v.money}</div> :null}
						</Body>
          </Card>
          <WhiteSpace />
          </div>):null

				))}
			</WingBlank>
    )
  }
}

export default UserCard