import React, { Component } from 'react'

import './index.css'
export default class Item extends Component {
    state = { mouse: false }

    handleMouse = (flag) => { //注意这里必须写成高阶函数形式，因为要保证返回值是一个函数供事件回调
        return () => {
            this.setState({ mouse: flag })
        }
    }

    changeHandle = (id) => { //同样是高阶函数形式，调用来自爷组件的updateTodos
        return (event) => {
            this.props.updateTodos(id, event.target.checked)
        }
    }

    //处理删除事件的回调
    handleDelete = (id) => { //没有采用高阶函数的写法
        if(window.confirm("Are you sure to delete this task?")) {
            this.props.deleteTodo(id);
        }
        else return 
    }

    render() {
        const { id, what, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? "#ddd" : "white" }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
                <label>
                    <input type="checkbox" checked={done} onChange={this.changeHandle(id)}/>
                    <span>{what}</span>
                </label>
                <button onClick={ () => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>Delete</button>
            </li>
        )
    }
}
