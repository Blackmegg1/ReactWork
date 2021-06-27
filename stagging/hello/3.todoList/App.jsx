import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

import './App.css'

export default class App extends Component {
    state = {
        todos: [
            { id: nanoid(), what: "lunch", done: true },
            { id: nanoid(), what: "sleep", done: false },
            { id: nanoid(), what: "code", done: true },
            { id: nanoid(), what: "game", done: true },
        ]
    }

    addTodos = (todoObj) => { //传递给子组件Header的函数
        let { todos } = this.state;
        todos.unshift(todoObj);
        this.setState({ todos: todos });
    }

    updateTodos = (id, done) => { //传递给孙组件Item的函数
        const { todos } = this.state;
        const newtodos = todos.map((todo) => { //注意const定义的对象内属性仍可以改变
            if (todo.id === id) {
                return { ...todo, done: done }
            }
            else return todo
        });
        this.setState({ todos: newtodos }); //修改state的唯一方法
    }

    deleteTodo = (id) => { //传递给孙组件Item的函数
        const { todos } = this.state;
        const newtodos = todos.filter(
            (todo) => {
                return todo.id !== id
            }
        )
        this.setState({ todos: newtodos });
    }

    switchAllTodo = (flag) => {
        let { todos } = this.state;
        todos = todos.map((todo) => { //注意map方法返回结果数组
            if (todo.done !== flag) {
                return { ...todo, done: flag }
            }
            else return todo
        })
        this.setState({todos});
    }

    clearAllFinished = () => {
        const {todos} = this.state;
        const newtodos = todos.filter((todo) => {
            return !todo.done 
        });
        this.setState({todos:newtodos});
    }
    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodos={this.addTodos} />
                        <List todos={this.state.todos} updateTodos={this.updateTodos} deleteTodo={this.deleteTodo} />
                        <Footer todos={this.state.todos} switchAllTodo={this.switchAllTodo} clearAllFinished={this.clearAllFinished}/>
                    </div>
                </div>
            </div>
        )
    }
}
