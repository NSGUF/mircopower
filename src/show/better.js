/**
 * Created by ZhifengFang on 2017/6/3.
 */
import React from 'react'
import Nav from './component/nav'
import Projects from './component/helpProjects'
import Http from '../http'

export default class Better extends React.Component {
    constructor(props){
        super(props)

        this.state={
            projects:[]
        }
    }

    componentDidMount() {

        Http.post("http://localhost:8080/MicroPower/ShowServlet", {flag:"better"}, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        result.__proto__=[]
        this.setState({
            projects:result
        })
        console.log(this.state.projects)
        console.log(typeof this.state.projects)
        console.log(this.state.projects.length)
    }

    error() {
        alert("show better errror");
    }

    render() {
        let mines = [
            {
                infoLink: '/show/better',
                infoName: '精选项目',
                select: true
            }, {
                infoLink: '/show/help',
                infoName: '助力儿童',
                select: false
            }, {
                infoLink: '/show/donation',
                infoName: '微捐赠',
                select: false
            }, {
                infoLink: '/show/share',
                infoName: '分享见证',
                select: false
            },
        ]
        return (
            <div className="publish-banner">
                <Nav mines={mines}/>
                <div className="container">
                    <div className="content-box boxstyle-1 box-1">
                        <Projects projects={this.state.projects}/>
                    </div>
                </div>
            </div>
        )
    }
}