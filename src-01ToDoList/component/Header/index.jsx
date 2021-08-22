import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './Header.css'

export default class Header extends Component {

    // 对接受的props进行类型以及必要性限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        // 解构赋值获取 keyCode target
        const {keyCode,target} = event;
        // 判断是否回车
        if (keyCode !== 13) return;
        // 添加 的todo名字不能为空
        if (target.value.trim() === '') {
            alert('输入不能为空！')
            return
        }
        // 准备好一个todo对象
        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false
        }
        this.props.addTodo(todoObj)
        // 清空输入框
        target.value = ''

    }
    render() {
        const {props} = this
        console.log(props);
        return (
            <div className="todo-header">
              <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
