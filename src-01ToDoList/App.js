// 创建外壳组建
import React, {Component} from 'react';
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'


// 创建并暴露 App 组件
export default class App extends Component {

  // 状态在哪里，操作状态的方法就在那里

  // 初始化状态
  state = {todos:[
    {id:'001', name:'吃饭',done: true},
    {id:'002', name:'睡觉',done: true},
    {id:'003', name:'打豆豆',done: false},
  ]}

  // 用于添加一个 todo，就收的参数是一个 todo 对象
  addTodo = tod0Obj => {
    // 获取原来todos
    const {todos} = this.state
    // 追加一个todo
    const newTodos = [tod0Obj,...todos]
    this.setState({todos: newTodos})
  }

  // 用于更新一个todo对象
  updateTodo = (id, done) => {
    // 获取状体中的todos
    const {todos} = this.state
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }

  // 删除一个todo对象
  deleteTodo = (id) => {
    const {todos} = this.state
    // 删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    // 更新状态
    this.setState({todos: newTodos})
  }

  // checkAllTodo用于全选
  checkAllTodo = (done) => {
    const {todos} = this.state;
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done}
    })
    this.setState({todos: newTodos})
  }

  // clearAllDone用于清除所有已完成的
  clearAllDone = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
