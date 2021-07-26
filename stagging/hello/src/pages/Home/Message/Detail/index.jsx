import React, { Component } from 'react'
// import qs from 'querystring'
export default class Detail extends Component {

    render() {
        const contentArr = [
            { id: '01', content: 'hello, i' },
            { id: '02', content: 'hello, she' },
            { id: '03', content: 'hello, he' },
        ]

        // 解析message参数
        // const { title, id } = this.props.match.params;

        //解析search参数
        // const {title, id} = qs.parse(this.props.location.search.slice(1));

        // 解析state参数
        const { title, id } = this.props.location.state;
        return (
            <ul>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>content: {
                    contentArr.find(
                        (item) => {
                            return item.id === id;
                        }
                    ).content
                }</li>
            </ul>
        )
    }
}
