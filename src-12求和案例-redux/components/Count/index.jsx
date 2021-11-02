import React, { Component } from 'react';

// 引入 store
import store from '../../redux/store';

class Count extends Component {

  // componentDidMount() {
  //   // 在组件加载完成后，订阅 store
  //   store.subscribe(() => {
  //     this.forceUpdate();
  //   });
  // }

  // 加法
  increment = () => {
    const {value} = this.selectNumber
    store.dispatch({type: 'INCREMENT', payload: parseInt(value)})
  }

  // 减
  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch({type: 'DECREMENT', payload: parseInt(value)})
  }

  // 奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const count = store.getState()
    if (count % 2 === 1) {
      store.dispatch({type: 'INCREMENT', payload: parseInt(value)})
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber
    setTimeout(() => {
      store.dispatch({type: 'INCREMENT', payload: parseInt(value)})
    }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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