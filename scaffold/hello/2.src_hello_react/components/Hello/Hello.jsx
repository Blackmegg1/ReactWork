import React,{Component} from 'react'
//以模块化的方式引入css文件，避免与其他组件的同名样式冲突
import hello from './Hello.module.css'

export default class Hello extends Component{
    render() {
        return (
            <h2 className={hello.title}>Hello</h2>
        )
    }
}


