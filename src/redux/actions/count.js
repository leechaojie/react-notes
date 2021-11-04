// 此文件为 count 组件生成 action 对象

import { INCREMENT, DECREMENT } from '../constant';

export const createIncrementAction = payload => ({ type: INCREMENT, payload });
export const createDecrementAction = payload => ({ type: DECREMENT, payload });