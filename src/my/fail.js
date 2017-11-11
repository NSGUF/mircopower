/**
 * Created by ZhifengFang on 2017/6/8.
 */
import React from 'react'
import SettingNav from './component/nav'
import Http from '../http'
import Help from './component/help'
import Donation from './component/donation'
import Share from './component/share'

export default class Setting extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            helpProjects: [],
            donationProjects: [],
            shareProjects: []
        }
    }

    callBackLogin(result) {
        if (result.flag === false) {
            alert("请先登录！")
            this.props.history.push("/phone")
        } else {
            Http.post(Http.URL+"/MicroPower/MyFail", {flag: "help"}, this.callBackHelp.bind(this), this.error);
        }
    }

    componentDidMount() {
        Http.post(Http.URL+"/MicroPower/IsLoginServlet", {}, this.callBackLogin.bind(this), this.error);
    }

    callBackHelp(result) {
        result.__proto__ = []
        this.setState({
            helpProjects: result
        })
        console.log(this.state.helpProjects)

        Http.post(Http.URL+"/MicroPower/MyFail", {flag: "donation"}, this.callBackDonation.bind(this), this.error);
    }

    callBackDonation(result) {
        result.__proto__ = []
        this.setState({
            donationProjects: result
        })
        console.log(this.state.donationProjects)

        Http.post(Http.URL+"/MicroPower/MyFail", {flag: "share"}, this.callBackShare.bind(this), this.error);
    }

    callBackShare(result) {
        result.__proto__ = []
        this.setState({
            shareProjects: result
        })
        console.log(this.state.shareProjects)
    }

    error() {
        alert("my projects errror");
    }

    render() {
        let id = 0
        return (
            <div className="item-setting">
                <div className="container">
                    <h2 className="text-center">我的项目</h2>
                    <SettingNav/>
                    <hr/>
                    {
                        this.state.helpProjects.map(project => (
                            <Help project={project} key={id++}/>
                        ))
                    }
                    {
                        this.state.donationProjects.map(project => (
                            <Donation project={project} key={id++}/>
                        ))
                    }
                    {
                        this.state.shareProjects.map(project => (
                            <Share project={project} key={id++}/>
                        ))
                    }
                </div>
                <hr/>
            </div>
        )
    }
}