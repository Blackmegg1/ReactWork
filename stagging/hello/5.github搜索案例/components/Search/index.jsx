import React, { Component } from 'react'
import axios from 'axios'

export default class search extends Component {
    search = () => {
        const { keyWordNode: { value: keyWord } } = this; //连续解构赋值+重命名
        this.props.updateAppState({ isFirst: false, isLoading: true }); //更新状态
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            (response) => {
                this.props.updateAppState({ isLoading: false, users: response.data.items });
            },
            (error) => {
                this.props.updateAppState({ isLoading: false, err: error.message });
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordNode = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
