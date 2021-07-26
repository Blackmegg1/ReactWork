import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((message) => {
                            return (
                                <li key={message.id}>

                                    {/* 向路由组件传递message参数
                                    <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}

                                    {/* 向路由组件传递search参数
                                    <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{ pathname:'/home/message/detail', state:{ id: message.id, title: message.title } }}>{message.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 路由组件接受message参数
                <Route path='/home/message/detail/:id/:title' component={Detail} /> */}
                {/* 路由组件接受search参数
                <Route path='/home/message/detail' component={Detail} /> */}
                {/* 路由组件接受state参数 */}
                <Route path='/home/message/detail' component={Detail} />
            </div >
        )
    }
}
