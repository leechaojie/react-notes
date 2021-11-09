import React, { Component } from 'react';
import './index.css'

// 父子组件使用 props 传递数据
// 通过 React.createContext() 创建上下文
// 后代组件通过 Provider（类式组件） / Consumer（函数式组件） 接收上下文

// 创建 context 对象
const UserNameContext = React.createContext()
// 解构 Provider
// Consumer 用足函数式组件
const { Provider, Consumer } = UserNameContext

// 父组件
class ContextPage extends Component {

  state = {username: 'tom', age: 18}

  render() {
    const { username, age } = this.state
    return (
      <div className="parent">
        <h3>ContextPage 组件</h3>
        <h4>用户名是 <span style={{color: 'red'}}>{username}</span></h4>
        {/* 可以解构把 Provider 解构出来 */}
        {/* <UserNameContext.Provider></UserNameContext.Provider> */}
        <Provider value={{username, age}}>
          <B/>
        </Provider>
      </div>
    );
  }
}

// 子组件
class B extends Component {
  static contextType = UserNameContext
  render() {
    return (
      <div className="child">
        <h3>b 组件</h3>
        <h4>从 ContextPage 组件接受到的用户名是 <span style={{color: 'red'}}>{this.context.username}</span></h4>
        <C/>
      </div>
    );
  }
}

// 后代组件
// 类式组件使用 context
// class C extends Component {
//   static contextType = UserNameContext
//   render() {
//     console.log(this);
//     const { username, age } = this.context
//     return (
//       <div className="grand">
//         <h3>c 组件</h3>
//         <h4>从 a 组件接受到的用户名是 <span style={{color: 'red'}}>{username}--{age}</span></h4>
//       </div>
//     );
//   }
// }

// 后代组件
// 函数式组件使用 context
function C() {
  return (
    <div className="grand">
      <h3>c 组件</h3>
      <h4>从 a 组件接受到的用户名是 
        <span style={{color: 'red'}}>
          <Consumer>
            { value => `${value.username}---${value.age}` }
          </Consumer>
        </span>
      </h4>
    </div>
  );
}

export default ContextPage;

