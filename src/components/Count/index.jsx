import React, { Component } from 'react';

class Count extends Component {

  state = {count: 0};

  // 加法
  increment = () => {
    const {value} = this.selectNUmber
    const {count} = this.state
    this.setState({count: count + parseInt(value)})
  }

  // 减
  decrement = () => {
    const {value} = this.selectNUmber
    const {count} = this.state
    this.setState({count: count - parseInt(value)})
  }

  // 奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNUmber
    const {count} = this.state
    if (count % 2 === 1) {
      this.setState({count: count + parseInt(value)})
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNUmber
    const {count} = this.state
    setTimeout(() => {
      this.setState({count: count + parseInt(value)})
    }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <select ref={c => this.selectNUmber = c} id="" style={{marginLeft: '10px '}}>
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