/**
 * 此文件转门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */

// 引入 createStore。专门用于创建 redux 最为核心的 store 对象
import { createStore, applyMiddleware } from "redux";

// 引入 redux-thunk，用于异步操作
import thunk from "redux-thunk";

// 引入汇总之后的 reduces
import reducers from "./reducers";

// 暴露 store 对象
export default createStore(reducers, applyMiddleware(thunk));

