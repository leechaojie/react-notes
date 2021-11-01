import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  pushShow = (id, title) => {
    return () => {
      // push 跳转，携带 params 参数
      // this.props.history.push(`/home/message/detail/${id}/${title}`)

      // push 跳转，携带 query 参数
      // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

      // push 跳转，携带 state 参数
      this.props.history.push(`/home/message/detail`, {id, title})
    }
  }

  replaceShow = (id, title) => {
    return () => {
      // replace 跳转，携带 params 参数
      // this.props.history.replace(`/home/message/detail/${id}/${title}`)

      // replace 跳转，携带 query 参数
      this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

      // replace 跳转，携带 state 参数
      this.props.history.replace(`/home/message/detail`, {id, title})
    }
  }

  // 后退
  back = () => {
      this.props.history.goBack()
  }

  // 前进
  forward = () => {
      this.props.history.goForward()
  }

  // 前进/后退
  go = () => {
    // go 参数为正前进 参数为负后退
    this.props.history.go(2)
  }

  render() {
    const { messageArr } = this.state;
    return (
      <ul>
        {messageArr.map((item) => {
          return (
            <li key={item.id}>
              {/* 向路由组件传递 params 参数 */}
              <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
              <button onClick={this.pushShow(item.id, item.title)}>push查看</button>
              <button onClick={this.replaceShow(item.id, item.title)}>replace查看</button>
              {/* 向路由组件传递 search 参数 */}
              {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

              {/* 向路由组件传递 state 参数 */}
              {/* <Link replace={true} to={{pathname: '/home/message/detail', state:{id: item.id, title: item.title}}}>{item.title}</Link> */}
            </li>
          );
        })}
        <hr />
        {/* 声明接收 params 参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

        {/* search 参数 不用声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        {/* state 参数 不用声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>

        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>前进几步</button>
      </ul>
    );
  }
}
