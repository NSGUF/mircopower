/**
 * Created by ZhifengFang on 2017/6/3.
 */
import React from 'react'
import Nav from './component/nav'
import Projects from './component/helpProjects'
import Http from '../http'

export default class Better extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [],
            page: 0
        }
    }

    componentDidMount() {/*
        if (this.contentNode) {
            this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
        }*/
        window.addEventListener('scroll', this.onScrollHandle.bind(this));
        Http.post(Http.URL + "/MicroPower/ShowServlet", {
            flag: "better",
            page: this.state.page
        }, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        result.__proto__ = []
        if (result.length !== 0) {
            this.setState({
                projects: this.state.projects.concat(result),
            })
            console.log(this.state.projects)
            console.log(typeof this.state.projects)
            console.log(this.state.projects.length)
        }else{
            alert('加载全部')
        }
    }

    componentWillUnmount() {
        /*if (this.contentNode) {
            this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
        }*/
    }


    //滚动条在Y轴上的滚动距离
    getScrollTop() {
        var scrollTop = 0;
        var bodyScrollTop = 0;
        var documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }

    //文档的总高度
    getScrollHeight() {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }

    //浏览器视口的高度
    getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode === "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }

    onScrollHandle(event) {
        if (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()) {
            Http.post(Http.URL + "/MicroPower/ShowServlet", {
                flag: "better",
                page: this.state.page
            }, this.callBackFun.bind(this), this.error);
        }
    }

    error() {
        alert("show better errror");
    }

    render() {
        return (
            <div className="publish-banner">
                <Nav/>
                <div className="container">
                    <div className="content-box boxstyle-1 box-1" ref={node => this.contentNode = node}>
                        <Projects projects={this.state.projects}/>
                    </div>
                </div>
            </div>
        )
    }
}