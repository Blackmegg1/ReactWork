import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'


export default class search extends Component {
    search = () => {
        const { keyWordNode: { value: keyWord } } = this; //连续解构赋值+重命名
        Pubsub.publish('atguigu', { isFirst: false, isLoading: true });
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            (response) => {
                Pubsub.publish("atguigu", { isLoading: false, users: response.data.items });
            },
            (error) => {
                Pubsub.publish("atguigu", { isLoading: false, err: error.message });
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
