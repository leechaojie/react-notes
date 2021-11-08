/**
 * 用于汇总所有的 reducer
 */

// 引入 combineReducers 用于汇总多个 reducer
import { combineReducers } from "redux";

// 引入为 count 组件服务的 reducer
import count from "./count";

// 引入为 person 组件服务的 reducer
import person from "./person";

// 汇总所有的 reducer
export default combineReducers({
  count,
  person
});