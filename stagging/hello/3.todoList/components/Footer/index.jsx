import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll = event => { 
        this.props.switchAllTodo(event.target.checked);
    }

    handleClearAllFinished = () => {
        this.props.clearAllFinished();
    }

    render() {
        const { todos } = this.props;
        const total = todos.length
        const count = todos.reduce((prev, current) => {
            return prev += (current.done ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer" >
                <label>
                    <input type="checkbox" checked={count === total && total!==0 } onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>Finish {count}</span> / Total {total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllFinished}>Clear all finished tasks</button>
            </div>
        )
    }
}
