import React, { Component } from "react";
import PubSub from 'pubsub-js';
import Item from "../item/index"

export default class List extends Component {

   // 初始化状态users，初始值为数组
   state = {
    users:[],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识，是否处于加载中
    err: '' // 存储相关错误信息
  }

  componentDidMount () {
    this.token = PubSub.subscribe('topic', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount () {
     PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用！输入关键字点击搜索，或者直接 Enter</h2> :
          isLoading ? <h2>loading...</h2> :
          err ? <h2 style={{color: 'red'}}>{err.message}</h2> :
          users.map(userOnj => {
            return <Item users={userOnj} key={userOnj.id}/>
          })
        }
      </div>
    );
  }
}
