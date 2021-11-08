import React, { Component, Fragment } from 'react';
import reactDom from 'react-dom';

// 类式组件

class ClassPage extends Component {
  state = {count: 0}

  myRef = React.createRef()

  add = () => {
    // this.setState({count: this.state.count + 1}

    // setState 的第二种写法，参数为 callback
    this.setState(state => ({count: state.count + 1}));
  }

  // 每隔一秒钟 加 1
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  }

  // 卸载组件
  unMount = () => {
    reactDom.unmountComponentAtNode(document.getElementById('root'));
  }

  show = () => {
    alert(this.myRef.current.value);
  }

  // 组件卸载前
  componentWillUnmount() {
    // 清除定时器
    clearInterval(this.timer)
  }

  render() {
    return (
      <Fragment>
        <h1 style={{color: 'pink'}}>类式组件</h1>
        <h2>当前求和为{this.state.count}</h2>
        <input type="text" ref={this.myRef} />
        <button onClick={this.add}>点我 +1</button>
        <button onClick={this.unMount}>卸载组件</button>
        <button onClick={this.show}>点击提示数据</button>
      </Fragment>
    );
  }
}

export default ClassPage;