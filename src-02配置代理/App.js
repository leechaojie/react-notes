// 创建外壳组建
import React, {Component} from 'react';
import axios from 'axios'
import './App.css'

// 创建并暴露 App 组件
export default class App extends Component {
  getData = (type) => {
    return () => {
      axios.get('http://localhost:3000/'+ type +'').then(
        response => {
          console.log('成功/',response.data);
        },
        error => {
          console.log('失败了',error);
        }
      )
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.getData('api1/students')}>点我获取学生数据</button>
        <button onClick={this.getData('api2/cars')}>点我获取汽车数据</button>
      </div>
    )
  }
}
