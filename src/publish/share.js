/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'
import Input from './component/input'
import TextArea from './component/textarea'
import AddImage from './component/addImage'
import Http from '../http'
import ImageItem from './component/imageItem'
import PublishButton from './component/publishButton'


export default class Share extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            describe: "",
            links: [],
            minLinks: []
        }
    }

    handleSubmit(e) {
        if (this.state.title === "") {
            alert("请输入标题!")
        } else if (this.state.describe === "") {
            alert("请输入详情!")
        } else if (this.state.links.length === 0) {
            alert("至少选择一张图片!")
        }
        e.preventDefault()
        Http.post("http://localhost:8080/MicroPower/ShareServlet",
            this.state,
            this.callBackFun.bind(this),
            this.error.bind(this)
        );
        console.log(this.state)
    }

    handleChange(name, e) {
        switch (name) {
            case "title":
                if (e.target.value.length > 150) {
                    e.target.value = e.target.value.substr(0, 150)
                    alert("不能超过150")
                }
                this.setState({
                    title: e.target.value
                });
                break;
            case "describe":
                if (e.target.value.length > 500) {
                    e.target.value = e.target.value.substr(0, 500)
                }
                this.setState({
                    describe: e.target.value
                });
                break;
            case "img":
                e.preventDefault()
                Http.post("http://localhost:8080/MicroPower/UploadImgServlet",
                    e.target,
                    this.callBackImg.bind(this),
                    this.error.bind(this)
                );
                break;
            default:
                alert("child handleChange error")
        }

    }


    callBackFun(result) {
        if (result.flag === true) {
            this.props.history.push("/finish")
        }else{
            alert("发布失败！")
        }

    }

    error() {
        alert("errror");
        //console.log(this.props.submit)
    }

    callBackImg(result) {
        //http://localhost:8080/MicroPower/UploadImgServlet
        this.setState({
            links: [...this.state.links, result.link],
            minLinks: [...this.state.minLinks, result.minLink]
        })
    }

    render() {
        let id = 0
        return (
            <div>
                <div className="item">
                    <h2 className="text-center">分享见证</h2>
                    <form className="form-horizontal">
                        <div id="baseform" className="form-container">
                            <Input htmlFor="分享标题" placeholder="填写分享标题（150字以内）"
                                   onChange={this.handleChange.bind(this, "title")}/>
                            <TextArea placeholder="建议详细描述受助人的基本情况：如家庭背景、经济状况、患病经历等。（500字以内）"
                                      onChange={this.handleChange.bind(this, "describe")}/>
                            <AddImage onChange={this.handleChange.bind(this, "img")} all={
                                this.state.links.map(link => (
                                    <ImageItem src={link} key={id++}/>
                                ))
                            }/>
                        </div>
                        <PublishButton onClick={this.handleSubmit.bind(this)}/>
                    </form>
                </div>
            </div>
        )
    }
}