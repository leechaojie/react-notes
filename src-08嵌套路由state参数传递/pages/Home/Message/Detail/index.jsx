import React, { Component } from "react";
// import qs from "querystring";

const detailData = [
    {id: '01', content: '你好'},
    {id: '02', content: 'Hello World'},
    {id: '03', content: 'Hello React'},
]

export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 接收 params 参数
    // const {id, title} = this.props.match.params

    // 接收 search 参数
    // const {search} = this.props.location
    // const {id, title} = qs.parse(search.slice(1))

    // 接收 state 参数
    const {id, title} = this.props.location.state || {}

    const findResult = detailData.find((item) => {
        return item.id === id
    }) || {}
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Message: {findResult.content}</li>
      </ul>
    );
  }
}
