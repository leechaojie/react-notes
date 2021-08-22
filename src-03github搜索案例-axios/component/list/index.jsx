import React, { Component } from "react";
import Item from "../item/index"

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props
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
