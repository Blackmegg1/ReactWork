import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    state = {
        users: [],
        isFirst: true,//是否为初始化状态
        isLoading: false,
        err: "",//存储请求错误信息
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj);
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />
            </div>
        )
    }
}
