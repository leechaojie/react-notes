import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App />, document.getElementById("root"));

// 检测 redux 状态，若 redux 状态改变，则重新渲染 App 组件
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
})