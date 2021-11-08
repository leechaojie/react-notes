/**
 * 此文件转门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */
// 引入 createStore。专门用于创建 redux 最为核心的 store 对象
import { createStore, applyMiddleware, combineReducers } from "redux";

// 引入 redux-thunk，用于异步操作
import thunk from "redux-thunk";

// 引入为 count 组件服务的 reducer
import countReducer from "./reducers/count";

// 引入为 person 组件服务的 reducer
import personReducer from "./reducers/person";

// 汇总所有的 reducer
const allReducers = combineReducers({
  count: countReducer,
  person: personReducer
});

// 暴露 store 对象
export default createStore(allReducers, applyMiddleware(thunk));

