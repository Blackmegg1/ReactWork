import React, { Component } from 'react'


import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

import './App.css'

export default class App extends Component {
    state = {todos:[
        {id:1,what:"lunch",done:true},
        {id:2,what:"sleep",done:false},
        {id:3,what:"code",done:true},
        {id:4,what:"game",done:true},
    ]}

    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header />
                        <List todos={this.state.todos}/>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
