/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'
import Agreement from './component/agreement'
import Input from './component/input'
import Select from './component/select'
import TextArea from './component/textarea'
import AddImage from './component/addImage'
import PublishButton from './component/publishButton'
import Http from '../http'
import ImageItem from './component/imageItem'


export default class Child extends React.Component {

// <AddImage ref="img"/>
    constructor(props) {
        super(props);
        this.state = {
            target_amount: "",
            divide_num: "1",
            list_title: "",
            list_describe: "",
            links: []
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        Http.post("http://localhost:8080/MicroPower/MircoPowerReact",
            this.state,
            this.callBackFun.bind(this),
            this.error.bind(this)
        );
        console.log(this.state)
    }

    handleAmountChange(e) {
        this.setState({
            target_amount: e.currentTarget.value
        })
    }

    handleDivideChange(event) {
        this.setState({
            divide_num: event.target.value
        });
        console.log("divide:" + this.state.divide_num)
    }

    handleTitleChange(event) {
        this.setState({
            list_title: event.target.value
        });
    }

    handleDescribeChange(event) {
        this.setState({
            list_describe: event.target.value
        });
    }

    callBackFun(result) {

    }

    error() {
        alert("errror");
        //console.log(this.props.submit)
    }

    handleUploadImg(e) {
        e.preventDefault()
        Http.post("http://localhost:8080/MicroPower/UploadImgServlet",
            e.target,
            this.callBackImg.bind(this),
            this.error.bind(this)
        );
    }

    callBackImg(result) {
        //http://localhost:8080/MicroPower/UploadImgServlet
        this.setState({
            links: [...this.state.links, result.link]
        })
    }

    render() {
        let options = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ]
        let select = {
            before: "共",
            after: "期",
            labelName: "分期期数",
            ref: 'targetNum'
        }
        let id=0
        return (
            <div>
                <div className="item">
                    <h2 className="text-center">助力儿童</h2>
                    <form className="form-horizontal publishForm">
                        <div id="baseform" className="form-container">
                            <Input htmlFor="目标金额" placeholder="您想要筹多少钱？" onChange={this.handleAmountChange.bind(this)}/>
                            <Select items={select} options={options} onChange={this.handleDivideChange.bind(this)}/>
                            <Input htmlFor="筹款标题" placeholder="填写筹款项目标题？" onChange={this.handleTitleChange.bind(this)}/>
                            <TextArea placeholder="建议详细描述受助人的基本情况：如家庭背景、经济状况、患病经历等。"
                                      onChange={this.handleDescribeChange.bind(this)}/>
                            <AddImage onChange={this.handleUploadImg.bind(this)} all={
                                this.state.links.map(link => (
                                    <ImageItem src={link} key={id++}/>
                                ))
                            }/>
                        </div>
                        <PublishButton onClick={this.handleSubmit.bind(this)}/>
                    </form>
                </div>
                <Agreement />
            </div>
        )
    }
}