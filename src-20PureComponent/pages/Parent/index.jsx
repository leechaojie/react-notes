// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import './index.css'

// PureComponent 只会在 props 或 state 发生变化时才会被重新渲染
// 如果你的组件是一个继承自 React.Component 的组件，那么你可以直接使用 PureComponent
// 如果你的组件是一个继承自 React.PureComponent 的组件，那么你可以直接使用 PureComponent

// 父组件
// class Parent extends Component {
class Parent extends PureComponent {

  state = {carName: 'BMW'}

  changeCar = () => {
    this.setState({carName: 'ABC'})

    // 如果使用了 PureComponent 使用以下方法会使得父组件不会被重新渲染
    // 因为 PureComponent 是一个浅对比，不会对比对象更深层的变化
    // const obj = this.state
    // obj.carName = 'ABC'
    // console.log(obj === this.state);
    // this.setState(obj)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, this.state);
  //   console.log(nextProps, nextState);

  //   // 当状态过多时，就不能通过这个办法来判断是否需要更新了
  //   if (this.state.carName === nextState.carName) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    const {carName} = this.state
    console.log('Parent--render');
    return (
      <div className='parent'>
        <h3>Parent 组件</h3>
        <span>车的名字是：{carName}</span>
        <button onClick={this.changeCar}>点击换车</button>
        {/* 父组件更改 state 时，child 组件 render 也会被重新调用一次 */}
        <Child />
      </div>
    );
  }
}

// 子组件
// class Child extends Component {
class Child extends PureComponent {

  render() {
    console.log('child--render');
    return (
      <div className='child'>
        <h3>Child 组件</h3>
        {/* <span>接收到的车 {this.props.carName}</span> */}
      </div>
    );
  }
}



export default Parent;

