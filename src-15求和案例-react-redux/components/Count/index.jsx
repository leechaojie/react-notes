import React, { Component } from 'react';

class Count extends Component {

  // 加法
  increment = () => {
    const {value} = this.selectNumber
    this.props.add(parseInt(value));
  }

  // 减
  decrement = () => {
    const {value} = this.selectNumber
    this.props.sub(parseInt(value));
  }

  // 奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    if (this.props.count % 2 === 1) {
      this.props.add(parseInt(value));
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.addAsync(parseInt(value), 500);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selectNumber = c} id="" style={{marginLeft: '10px '}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment} style={{marginLeft: '10px'}}>+</button>
        <button onClick={this.decrement} style={{marginLeft: '10px'}}>-</button>
        <button onClick={this.incrementIfOdd} style={{marginLeft: '10px'}}>当前求和为奇数</button>
        <button onClick={this.incrementAsync} style={{marginLeft: '10px'}}>异步加</button>
      </div>
    );
  }
}

export default Count;