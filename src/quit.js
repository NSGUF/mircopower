/**
 * Created by ZhifengFang on 2017/6/10.
 */
import React from 'react'
import Http from './http'
export default class Quit extends React.Component {
    componentDidMount() {
        Http.post("http://localhost:8080/MicroPower/QuitServlet", {},
            this.callback.bind(this), this.error)
    }

    callback(result) {
        if (result.flag)
            this.props.history.push("/phone")
    }

    error() {
        alert("quit error")
    }

    render() {
        return (
            <div></div>
        )
    }
}