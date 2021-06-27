import React, { Component } from 'react'
import { nanoid } from 'nanoid' //用于生成uuid
import PropTypes from 'prop-types'

import './index.css'


export default class Header extends Component {

    //对接收到的props进行类型和必要性的限制
    static propTypes = {
        addTodos: PropTypes.func.isRequired,
    }

    keyboardHandle = (event) => {
        const { keyCode, target } = event;
        if (keyCode !== 13) return //13为Enter键
        if (target.value.trim() === "") {
            alert("Task context can't be empty!");
            return
        }
        const todoObj = { id: nanoid(), what: target.value, done: false };
        this.props.addTodos(todoObj); //调用父组件传递下来的函数来操作父组件的state
        target.value = "";
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.keyboardHandle} placeholder="Type your task , enter confirmed" />
            </div>
        )
    }
}
