import React, { Component } from 'react'
import FunUserDatabase from './pages/FunUserDatabase'
import HookUserDatabase from './pages/HookUserDatabase'
export default class App extends Component {
  render() {
    return (
      <div>
      <FunUserDatabase />
      <HookUserDatabase/>
      </div>
    )
  }
}
