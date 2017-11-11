/**
 * Created by ZhifengFang on 2017/6/10.
 */
import React from 'react'
import {  Redirect } from 'react-router'
import Http from './http'

export default class Quit extends React.Component {
    constructor(props){
        super(props)
        this.state={
            flag:false
        }
    }
    componentDidMount() {
        Http.post(Http.URL+"/MicroPower/QuitServlet", {},
            this.callback.bind(this), this.error)
    }

    callback(result) {
        this.setState({
            flag:result.flag
        })

        location.reload('/phone')
    }

    error() {
        alert("quit error")
    }

    render() {
        if(this.state.flag){
            return(
                <Redirect to="/phone"/>
            )
        }
        return (
            <div></div>
        )
    }
}