import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    // 标识鼠标移入移出
	state = {mouse: false}

    // 鼠标移入，移出回调
	HandleMouse = flag => {
		return () => {
			this.setState({mouse: flag})
		}
	}
    // 勾选，取消勾选回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }
    // 删除一个todo的回调 (不用高阶函数，handleCheck使用的是高阶函数)
    handleDelete = (id) => {
        const {deleteTodo} = this.props
        if (window.confirm('确定删除吗？')) {
            deleteTodo(id)
        }   
    }
    
    render() {
        const {id, name, done} = this.props;
		const {mouse} = this.state;
        return (
                <li style={{backgroundColor:mouse ? '#ddd' : ''}} id={id} onMouseLeave={this.HandleMouse(false)} onMouseEnter={this.HandleMouse(true)}>
                    <label>
                        <input onChange={this.handleCheck(id)} type="checkbox" checked={done}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{display:mouse ? '' : 'none'}}>删除</button>
                </li>
        )
    }
}
