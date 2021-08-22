import React, { Component } from "react";
import axios from 'axios'

export default class Search extends Component {

  state = {keyWord: ''}

  componentDidUpdate (preProps, preState, snapshot) {
    const {keyWord} = this.state
    const {keyWord: preKeyWord} = preState
    // if (preState === keyWord) { }
    console.log('1', keyWord);
    console.log('2', preKeyWord);
  }

  search = (event) => {
      const {keyCode, _reactName} = event;

      // 判断事件类型
      if (_reactName === 'onKeyUp' && keyCode !== 13) return

      // 获取用户输入（连续解构赋值+重命名）
      const {keyWordElement: {value:keyWord}} = this // 解构赋值的连续写法 keyWord 表示重命名。把value的名字改成keyWord表示

      // 把搜索关键字存入状态
      this.setState({keyWord: keyWord})
      
      // 发送请求前通知App更新状态
      this.props.updateAppState({isFirst: false, isLoading: true})

      // 发送网络请求
      axios.get(`/api1/search/users?q=${keyWord}`).then(
          response => {
            // 请求成功后通知App更新状态
            this.props.updateAppState({isLoading: false, users: response.data.items})
          },
          error => {
              // 请求失败后通知App更新状态
              this.props.updateAppState({isLoading: false, err: error})
              console.log('error', error)
          }
      )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github 用户</h3>
        <div className="row">
          <div className="col-xs-10">
            <input ref={c => this.keyWordElement = c} className="form-control" onKeyUp={this.search}  type="text" placeholder="输入关键字点击搜索" />
          </div>
          <div className="col-xs-2">
            <button className="btn btn-info"onClick={this.search}>搜索</button>
          </div>
        </div>
      </section>
    );
  }
}
