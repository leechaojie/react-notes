/**
 * 创建一个为 count 服务的 reducer，用于管理 count 的状态，reducer 本质就是一个纯函数，
 * 它接收旧的 state 和 action，返回新的 state。
 */

const initialState = 0 // 初始化 state
export default function count(preState = initialState, action) {
  console.log('reducer count', preState, action);
  // 从 action 中获取 type 和 payload
  const {type, payload} = action;

  console.log('type', type);
  console.log('payload', payload);
  // 判断 action 的 type
  switch (type) {
    case 'INCREMENT': // 加
      return preState += payload;    
    case 'DECREMENT': // 减
      return preState -= payload;
    default:
      return preState;
  }
}
