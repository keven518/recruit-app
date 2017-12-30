// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { createStore } from 'redux'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">柯文</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react'
import { Button, List } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component{
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团，{boss}</h2>
        <List renderHeader={()=>'士兵列表'}>
          <List.Item>keven</List.Item>
          <List.Item>cmm</List.Item>
          <List.Item>柯文</List.Item>
          <List.Item>蔡曼曼</List.Item>
        </List>
        <Button>asdf</Button>
      </div>
    )
  }
}

export default App