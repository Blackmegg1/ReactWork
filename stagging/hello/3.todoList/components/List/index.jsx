import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'
import Item from '../Item'

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodos: PropTypes.func.isRequired,
    }
    
    render() {
        const {todos, updateTodos, deleteTodo} = this.props //作为中转，将deleteTodo,updateTodos传递给Item组件
        return (
            <ul className="todo-main">
                {todos.map((todo) => {
                    return <Item key={todo.id} {...todo} updateTodos={updateTodos} deleteTodo={deleteTodo}/>
                })}
            </ul>
        )
    }
}
