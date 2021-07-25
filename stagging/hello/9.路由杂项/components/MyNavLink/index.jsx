import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// 自己封装的NavLink，通过this.props.children读取标签体内容
export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink activeClassName="atguigu" className="list-group-item" {...this.props} />
        )
    }
}
