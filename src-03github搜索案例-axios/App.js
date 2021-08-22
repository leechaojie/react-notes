// 创建外壳组建
import React, { Component } from 'react';
import Search from './component/search'
import List from './component/list'

// 创建并暴露 App 组件
export default class App extends Component {
  // 初始化状态users，初始值为数组
  state = {
    users:[],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识，是否处于加载中
    err: '' // 存储相关错误信息
  }

  // 更新 app 的state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}