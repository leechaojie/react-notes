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
    const {search} = this.props.location

    // qs 已经弃用，推荐使用 URLSearchParams
    // const {id, title} = qs.parse(search.slice(1))

    const params = new URLSearchParams(search)
    const id = params.get('id')
    const title = params.get('title')

    const findResult = detailData.find((item) => {
        return item.id === id
    })
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Message: {findResult.content}</li>
      </ul>
    );
  }
}
