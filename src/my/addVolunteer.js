/**
 * Created by ZhifengFang on 2017/6/8.
 */
import React from 'react'
import Http from '../http'
import TextArea from '../publish/component/textarea'
import AddImage from '../publish/component/addImage'
import ImageItem from '../publish/component/imageItem'

export default class AddVolunteer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            wallet_id: "images/publish/addImg.png",
            id_before: "images/publish/addImg.png",
            id_after: "images/publish/addImg.png",
            info: "",
            links: [],
        }
    }

    handleSubmit(e) {
        if (this.state.ws === "") {
            alert("请添加待审核人的支付宝或微信二维码!")
        } else if (this.state.id_before === "") {
            alert("请添加待审核人身份证前图片!")
        } else if (this.state.id_after === "") {
            alert("请添加待审核人身份证后图片!")
        } else if (this.state.info === "") {
            alert("请填写待审核人基本信息!")
        } else if (this.state.images === []) {
            alert("请添加验证待审核人信息的图片（越多越好）")
        } else {
            e.preventDefault()
            Http.post(Http.URL + "/MicroPower/AddVolunteerServlet",
                this.state,
                this.callBackFun.bind(this),
                this.error.bind(this)
            );
            console.log(this.state)
        }
    }

    handleChange(name, e) {
        e.preventDefault()
        switch (name) {
            case "wallet_id":
                Http.post(Http.URL + "/MicroPower/UploadImgServlet",
                    e.target,
                    this.callBackWallet.bind(this),
                    this.error.bind(this)
                );
                break;
            case "id_before":
                Http.post(Http.URL + "/MicroPower/UploadImgServlet",
                    e.target,
                    this.callBackBefore.bind(this),
                    this.error.bind(this)
                );
                break;
            case "id_after":
                Http.post(Http.URL + "/MicroPower/UploadImgServlet",
                    e.target,
                    this.callBackAfter.bind(this),
                    this.error.bind(this)
                );
                break;
            case "info":
                this.setState({
                    info: e.target.value
                });
                break;
            case "links":
                Http.post(Http.URL + "/MicroPower/UploadImgServlet",
                    e.target,
                    this.callBackLinks.bind(this),
                    this.error.bind(this)
                );
                break;
            default:
                alert("addVolunteer handleChange error")
        }

    }

    callBackWallet(result) {
        this.setState({
            wallet_id: result.link
        })
    }

    callBackBefore(result) {
        this.setState({
            id_before: result.link
        })
    }

    callBackAfter(result) {
        this.setState({
            id_after: result.link
        })
    }

    callBackLinks(result) {
        this.setState({
            links: [...this.state.links, result.link]
        })
    }

    callBackFun(result) {
        if (result.flag === true) {
            alert("添加成功！")
            this.props.history.push("/my/volunteer")
        } else {
            alert("添加失败！")
        }
    }

    error() {
        alert("addReceive error");
        //console.log(this.props.submit)
    }

    render() {
        let id = 0
        return (
            <div className="item">
                <h2 className="text-center">志愿者信息</h2>
                <form className="form-horizontal ">
                    <div className="form-container">
                        <table>
                            <tbody>
                            <tr className="tr-id">
                                <td className="col-md-1 control-label ">身份证正面</td>
                                <td id="reviewPicker" className="col-md-1">
                                    <div className="user-avatar">
                                        <img id="head_portrait" alt="" src={this.state.id_before}/>
                                        <span>点击添加</span>
                                    </div>
                                    <div className="changeHead">
                                        <input type="file" accept="image/jpeg,image/png,image/bmp"
                                               onChange={this.handleChange.bind(this, "id_before")}
                                        />
                                    </div>
                                </td>
                                <td className="col-md-1 control-label">身份证反面</td>
                                <td id="reviewPicker" className="col-md-1">
                                    <div className="user-avatar">
                                        <img id="head_portrait" alt="" src={this.state.id_after}/>
                                        <span>点击添加</span>
                                    </div>
                                    <div className="changeHead">
                                        <input type="file" accept="image/jpeg,image/png,image/bmp"
                                               onChange={this.handleChange.bind(this, "id_after")}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-md-1 control-label">支付宝/微信二维码</td>
                                <td id="reviewPicker" className="col-md-1">
                                    <div className="user-avatar">
                                        <img id="head_portrait" alt="" src={this.state.wallet_id}/>
                                        <span>点击添加</span>
                                    </div>
                                    <div className="changeHead">
                                        <input type="file" accept="image/jpeg,image/png,image/bmp"
                                               onChange={this.handleChange.bind(this, "wallet_id")}
                                        />
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <TextArea placeholder="建议详细描述审核人的基本情况：如个人详情、个人经历等。（500字以内）"
                                  onChange={this.handleChange.bind(this, "info")}
                        />
                        <AddImage onChange={this.handleChange.bind(this, "links")} all={
                            this.state.links.map(link => (
                                <ImageItem src={link} key={id++}/>
                            ))
                        }/>
                    </div>
                    <div className="col-md-12 text-center">
                        <input className="button-green" type="button" value="添加审核"
                               onClick={this.handleSubmit.bind(this)}/>
                    </div>
                </form>
            </div>
        )
    }
}