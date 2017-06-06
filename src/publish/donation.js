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


export default class Donation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            trans_cost: "0",
            raise_goods: "衣物",
            close_date: "1",
            describe: "",
            links: [],
            minLinks: [],
            need_or_dona:1
        }
    }

    handleSubmit(e) {
        if (this.state.title === "") {
            alert("请输入捐赠标题!")
        } else if (this.state.describe === "") {
            alert("请输入详情!")
        } else if (this.state.links.length === 0) {
            alert("至少选择一张图片!")
        }
        e.preventDefault()
        Http.post("http://localhost:8080/MicroPower/DonationServlet",
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
                    alert("请输入150以内的数字")
                } else {
                    this.setState({
                        title: e.target.value
                    })
                }
                break;
            case "trans_cost":
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
                    trans_cost: e.target.value
                });
                break;
            case "raise_goods":
                this.setState({
                    raise_goods: e.target.value
                })
                break
            case "close_date":
                this.setState({
                    close_date: e.target.value
                })
                break
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
            alert("发布失败")
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
        let optionsCost = [
            '衣物', '玩具', '书本', '包', '其他'
        ]
        let selectCost = {
            before: "",
            after: "",
            labelName: "物品分类"
        }
        let optionsCloseDate = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
        ]
        let selectCloseDate = {
            before: "",
            after: "天后",
            labelName: "截止时间"
        }
        let id = 0
        return (
            <div>
                <div className="item">
                    <h2 className="text-center">我要捐赠</h2>
                    <form className="form-horizontal publishForm">
                        <div id="baseform" className="form-container">
                            <Input htmlFor="捐赠标题" placeholder="填写捐赠标题"
                                   onChange={this.handleChange.bind(this, "title")}/>
                            <Input htmlFor="回报金额" placeholder="不填表示不需要"
                                   onChange={this.handleChange.bind(this, "trans_cost")}/>
                            <Select items={selectCost} options={optionsCost}
                                    onChange={this.handleChange.bind(this, "raise_goods")}/>
                            <Select items={selectCloseDate} options={optionsCloseDate}
                                    onChange={this.handleChange.bind(this, "close_date")}/>
                            <TextArea placeholder="建议详细描述所捐赠物品的基本情况：如购买时间，使用情况等。"
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