import React, { Component } from 'react'

export default class Count extends Component {

  state = {count: 0}

  add = () => {
    const { count } = this.state
    this.setState({count: count + 1})
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h3>当前求和为: { count }</h3>
        <h4>接收到的props为： {this.props.name}</h4>
        <button onClick={this.add}>点击加 1</button>
      </div>
    )
  }
}
