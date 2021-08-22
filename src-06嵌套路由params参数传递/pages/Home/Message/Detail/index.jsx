import React, { Component } from "react";

const detailData = [
    {id: '01', content: '你好'},
    {id: '02', content: 'Hello World'},
    {id: '03', content: 'Hello React'},
]

export default class Detail extends Component {
  render() {
    console.log(this.props);
    const {id, title} = this.props.match.params
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
