import React, { Component, Fragment } from 'react';
import ClassPage from './pages/ClassPage';
import FuncPage from './pages/FuncPage';

// Fragment 不渲染任何标签，只是用来包裹其他的组件，这样就不会多增加一层 div 了
class App extends Component {
  render() {
    return (
      <Fragment>
        <ClassPage />
        <FuncPage />
      </Fragment>
    );
  }
}

export default App;