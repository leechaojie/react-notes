import { Component } from 'react'

export default class Child extends Component {
  state = {
    // 正确的写法
    // users: [
    //   {id: 1, name: 'tony', age: 18},
    //   {id: 2, name: 'tom', age: 20},
    //   {id: 3, name: 'jerry', age: 22},
    // ]

    // 假如后端传递的是纯字符串形式，此时我们渲染就会报错
    'users': '[]'
  }

  // 父组件 getDerivedStateFromError 不能捕获生命周期外的错误，比如：
  // test 什么都不是
  // test()

  render() {
    return (
      <div className="child">
        <h3>Child组件</h3>
        {
          this.state.users.map((item) => {
            return <h4 key={item.id}>{item.name} --- {item.age}</h4>
          }) 
        }
      </div>
    );
  }
}
