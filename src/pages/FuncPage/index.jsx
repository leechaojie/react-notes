import React, { Fragment } from "react";
import reactDom from "react-dom";

// 函数式组件
// state hook

function FuncPage() {

  const [count, setCount] = React.useState(0); // 初始值为0 [count, setCount] 数组的解构赋值
  const [name, setName] = React.useState("lee");

  const myRef = React.useRef();

  // 可以看做三个生命周期钩子的组合
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount
  React.useEffect(() => {
    // 每隔一秒钟 加 1
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);

    return () => { // 相当于 componentWillUnmount
      clearInterval(timer);
    }

  },[count]); // 只有count变化才会执行useEffect（相当于componentDidMount） 不传参数就是每次渲染都会执行（相当于componentDidUpdate）

  // 加1
  function add() {
    // setCount(count + 1); // 第一种写法
    setCount(count => count + 1); // 第二种写法
  }

  // 改名
  function changeName() {
    setName('tony')
  }

  function show() {
    alert(myRef.current.value);
  }

  // 卸载组件
  function unMount() {
    reactDom.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <Fragment>
      <h1 style={{color: 'blue'}}>函数式组件</h1>
      <h2>当前求和为{count}</h2>
      <h2>我的名字是{name}</h2>
        <input type="text" ref={myRef} />
      <button onClick={add}>点我 +1</button>
      <button onClick={changeName}>改名</button>
      <button onClick={unMount}>卸载组件</button>
      <button onClick={show}>点击提示数据</button>
    </Fragment>
  );
}

export default FuncPage;