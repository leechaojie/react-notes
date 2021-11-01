// 创建外壳组建
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import MyNavLink from './components/MyNavLink'

// 创建并暴露 App 组件
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>
              link 没有点击后的颜色效果 */}
              <MyNavLink to="/about" a="1" b="2" c="3">About</MyNavLink>
              <MyNavLink to="/home" title="Home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
								{/* 注册路由 */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}