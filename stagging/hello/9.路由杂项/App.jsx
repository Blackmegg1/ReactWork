import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About' //路由组件
import Home from './pages/Home'
import Header from './components/Header' //一般组件
import MyNavLink from './components/MyNavLink'
export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中靠< a>标签跳转页面 */}
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* react中靠路由链接切换组件 */}

                            <MyNavLink to="/about"  > About </MyNavLink>
                            <MyNavLink to="/home"  > Home </MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由,使用Switch保证了路径的单一匹配 */}
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
