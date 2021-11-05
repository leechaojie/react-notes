import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  // 用 Provider 接收 store，App 内所有的容器都能接收到 store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 检测 redux 状态，若 redux 状态改变，则重新渲染 App 组件
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// })