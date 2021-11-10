import React, { Component } from 'react';
import Child from '../Child';
import './index.css'

// ErrorBoundary 错误边界
// 子组件出错后，父组件正常展示
// 错误边界只适用于生产环境，开发环境还是会报错
// 只能捕获生命周期内出现的错误，比如 render componentDidMount 等，
// 不能捕获自己出现的错误，只能捕获子组件的错误

// 父组件
class Parent extends Component {

  state = {hasError: false}


  // 在父组件中捕获子组件的错误
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  // 用于统计错误，发送给后台
  componentDidCatch(error, info) {
    console.log('渲染组件时出错');
    console.log(error, info);
  }

  render() {
    return (
      <div className="parent">
        <h3>Parent 组件</h3>
        {
          this.state.hasError ? <h3>子组件出错了</h3> : <Child />
        }
      </div>
    );
  }
}

export default Parent;

