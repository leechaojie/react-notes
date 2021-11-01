import React, { Component } from "react";
import { withRouter } from "react-router";

class Header extends Component {

  // 后退
  back = () => {
    this.props.history.goBack()
  }

  // 前进
  forward = () => {
      this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(2)
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>前进几步</button>
      </div>
    ) 
  }
}

// withRouter 接收一般组件，加工后就有了路由组件的api
// withRouter 的返回值是个新组件
export default withRouter(Header)