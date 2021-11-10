import React, { Component } from 'react';
import Count from '../Count';
import './index.css'

// propsRender
// 类似于 vue 中的插槽
// 

// 父组件
class Parent extends Component {

  state = {username: 'tom', age: 18}

  render() {
    return (
      <div className="parent">
        <h3>ContextPage 组件</h3>
        {/* 固定的将 B 组件 包裹上 C 组件 */}
        <B>
          <C />
        </B>
      </div>
    );
  }
}

// 子组件
class B extends Component {
  state = {name: 'tony'}
  render() {
    return (
      <div className="child">
        <h3>b 组件</h3>
        {/* 1，接收 this.props.children 这里就是预留位，
            2，父组件让包裹谁，这里就会渲染谁 
        */}
        {this.props.children}
      </div>
    );
  }
}

// 后代组件
class C extends Component {
  render() {
    console.log(this);
    return (
      <div className="grand">
        <h3>c 组件</h3>
        {/* D 组件中传递 render 并返回 Count 组件，D 组件中就可以渲染 Count 组件 */}
        <D render={(name) => <Count name={name}/>}/>
      </div>
    );
  }
}


// 后代组件
class D extends Component {
  state = {name: 'tony'}
  render() {
    const { name } = this.state;
    console.log(this);
    return (
      <div className="grand2">
        <h3>c 组件</h3>
        {/* 1，预留位置，父组件传谁，这里就放的谁
            2，将 D 组件中的 this.state.name 传递给 Count 组件
            3，this.props.render 接收传递的 name
            4，这样，哪个组件在这里展示，就会接收到传递的 name
         */}
        {this.props.render(name)}
      </div>
    );
  }
}


export default Parent;

