import React, { Component } from 'react'

import './index.css'
export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, err } = this.props;
        return (
            isFirst ? <h2>type your keyword</h2> :
                isLoading ? <h2>loading...</h2> :
                    err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                        <div className="row">
                            {
                                users.map((item) => {
                                    return (
                                        <div className="card" key={item.id} >
                                            <a href={item.html_url} target="_blank" rel="noreferrer">
                                                <img alt="avatar" src={item.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{item.login}</p>
                                        </div>)
                                })
                            }
                        </div>
        )
    }
}
