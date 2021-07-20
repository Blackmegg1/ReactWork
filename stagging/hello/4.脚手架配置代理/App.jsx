import React, { Component } from 'react'
import {Button} from 'antd'
import "antd/dist/antd.css"
import axios from "axios"

export default class App extends Component {

    getStudentData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {
                console.log("success!",response.data);
            },
            error => {
                console.log("failed!",error);
            }
        )
    }
    getCarData = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => {
                console.log("success!",response.data);
            },
            error => {
                console.log("failed!",error);
            }
        )
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.getStudentData}>学生数据</Button>
                <Button type="default" onClick={this.getCarData}>汽车数据</Button>    
            </div>
        )
    }
}
