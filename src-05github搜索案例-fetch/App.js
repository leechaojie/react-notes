// 创建外壳组建
import React, { Component } from 'react';
import Search from './component/search'
import List from './component/list'

// 创建并暴露 App 组件
export default class App extends Component {
 
  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}