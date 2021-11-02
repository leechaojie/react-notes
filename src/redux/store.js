/**
 * 此文件转门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */
// 引入 createStore。专门用于创建 redux 最为核心的 store 对象
import { createStore } from "redux";

// 引入为 count 组件服务的 reducer
import countReducer from "./reducers/count";

// 暴露 store 对象
export default createStore(countReducer)

