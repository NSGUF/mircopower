/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'
import Input from './component/input'
import Select from './component/select'
import TextArea from './component/textarea'
import AddImage from './component/addImage'
import Http from '../http'
import ImageItem from './component/imageItem'
import PublishButton from './component/publishButton'
import createHistory from 'history/createBrowserHistory'

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            target_amount: "",
            divide_num: "1",
            list_title: "",
            list_describe: "",
            links: [],
            minLinks: []
        }
    }

    handleSubmit(e) {
        if (this.state.target_amount === "") {
            alert("请输入目标金额!")
        } else if (this.state.list_title === "") {
            alert("请输入标题!")
        } else if (this.state.list_describe === "") {
            alert("请输入详情!")
        } else if (this.state.links.length === 0) {
            alert("至少选择一张图片!")
        }
        e.preventDefault()
        Http.post("http://localhost:8080/MicroPower/ChildServlet",
            this.state,
            this.callBackFun.bind(this),
            this.error.bind(this)
        );

        console.log(this.state)
    }

    handleChange(name, e) {
        switch (name) {
            case "amount":
                e.target.value = e.target.value.replace(/\D/g, '')
                if (e.target.value.substr(0, 1) === "0") {
                    e.target.value = ""
                }
                if (Number(e.target.value) > 2000) {
                    if (e.target.value.length === 5) {
                        e.target.value = e.target.value.substr(0, 4)
                    } else {
                        e.target.value = e.target.value.substr(0, 3)
                    }
                    alert("请输入2000以内的数字")
                }
                this.setState({
                    target_amount: e.target.value
                })
                break;
            case "divide":
                this.setState({
                    divide_num: e.target.value
                });
                break;
            case "title":
                if (e.target.value.length > 150) {
                    e.target.value = e.target.value.substr(0, 150)
                    alert("不能超过150")
                }
                this.setState({
                    list_title: e.target.value
                });
                break;
            case "describe":
                if (e.target.value.length > 500) {
                    e.target.value = e.target.value.substr(0, 500)
                }
                this.setState({
                    list_describe: e.target.value
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
        let options = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ]
        let select = {
            before: "共",
            after: "期",
            labelName: "分期期数"
        }
        let id = 0
        return (
            <div>
                <div className="item">
                    <h2 className="text-center">助力儿童</h2>
                    <form className="form-horizontal publishForm">
                        <div id="baseform" className="form-container">
                            <Input htmlFor="目标金额" placeholder="您想要筹多少钱？2000以内"
                                   onChange={this.handleChange.bind(this, "amount")}/>
                            <Select items={select} options={options} onChange={this.handleChange.bind(this, "divide")}/>
                            <Input htmlFor="筹款标题" placeholder="填写筹款标题（150字以内）"
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