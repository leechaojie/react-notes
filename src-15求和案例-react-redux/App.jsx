import React, { Component } from 'react';
import store from './redux/store';
import Count from './container/Count';
class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递 store */}
        <Count store={store} />
      </div>
    );
  }
}

export default App;