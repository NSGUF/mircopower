/**
 * Created by ZhifengFang on 2017/6/6.
 */
import React from 'react'
import Nav from './component/settingNav'
import Http from '../http'

export default class Setting extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            head: "",
            petName: "",
            tellphone: "",
            flag: "getInfo"
        }
    }

    componentDidMount() {
        Http.post(Http.URL+"/MicroPower/SettingServlet", this.state, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        this.setState({
            head: result.head,
            petName: result.petName,
            tellphone: result.tellphone,
            flag: "upload"
        })
        console.log(this.state)
    }

    error() {
        alert("show setting errror");
    }

    handlerChange(name, e) {
        e.preventDefault()
        if (name === "head") {
            Http.post(Http.URL+"/MicroPower/UploadImgServlet",
                e.target,
                this.callBackImg.bind(this),
                this.error.bind(this)
            );
        } else if (name === "petName") {
            this.setState({
                petName: e.target.value
            })
        }
    }

    callBackImg(result) {
        this.setState({
            head: result.link
        })

    }

    handleSubmit(e) {
        e.preventDefault()
        Http.post(Http.URL+"/MicroPower/SettingServlet",
            this.state,
            this.callBackSubmit.bind(this),
            this.error.bind(this)
        );
    }

    callBackSubmit(result) {
        if (result.flag === true) {
            alert("修改成功！")
            location.reload('/')
        } else {
            alert("修改失败！")
        }
    }

    render() {
        return (
            <div className="item-setting">
                <div className="container">
                    <h2 className="text-center">个人设置</h2>
                    <Nav/>
                    <hr/>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <table>
                            <tbody>
                            <tr>
                                <td className="col-md-3 head">头像</td>
                                <td className="col-md-7">
                                    <div className="user-avatar">
                                        <img id="head_portrait" alt="" src={this.state.head} />
                                        <span>点击修改头像</span>
                                    </div>
                                    <div className="changeHead">
                                        <input type="file" accept="image/jpeg,image/png,image/bmp"
                                               onChange={this.handlerChange.bind(this, "head")}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-md-3 pet_cell">用户昵称</td>
                                <td className="col-md-7">
                                    <input className="form-control" type="text" value={this.state.petName}
                                           onChange={this.handlerChange.bind(this, "petName")}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-md-3 pet_cell">绑定手机号</td>
                                <td className="col-md-7"><strong>{this.state.tellphone}</strong></td>
                            </tr>
                            <tr>
                                <td className="col-md-3 pet_cell"></td>
                                <td className="col-md-3 pet_cell">
                                    <input className="setting" type="submit" value="保 存" style={{float: "left"}}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <hr/>
            </div>
        )
    }
}