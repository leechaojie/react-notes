// 此文件为 count 组件生成 action 对象

import { INCREMENT, DECREMENT } from '../constant';

// 同步 action 对象
export const createIncrementAction = payload => ({ type: INCREMENT, payload });
export const createDecrementAction = payload => ({ type: DECREMENT, payload });

// 异步 action 可以是一个函数，也可以是一个 promise
export const createIncrementAsyncAction = (payload, delay) => {
  return (dispatch) => {
    new Promise((resolve) => {
      resolve()
    }).then(() => {
      setTimeout(() => {
        // 异步 action 中，一般都会调用同步 action
        dispatch(createIncrementAction(payload));
      }, delay);
    })
  }

};