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
  render() {
    const { messageArr } = this.state;
    return (
      <ul>
        {messageArr.map((item) => {
          return (
            <li key={item.id}>
              {/* 向路由组件传递 params 参数 */}
              <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
              {/* <Link to={`/home/message/detail`}>{item.title}</Link> */}
            </li>
          );
        })}
        <hr />
        {/* 声明接收 params 参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}
      </ul>
    );
  }
}
