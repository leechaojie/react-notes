import React, { Component } from 'react';
import Count from './container/Count'; // 引入 Count 容器组件
import Person from './container/Person'; // 引入 Person 容器组件
class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <Person />
      </div>
    );
  }
}

export default App;