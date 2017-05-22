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

export default class Child extends React.Component {
    handleSubmit(e) {
        this.props.submit({
            target_amount: this.refs.targetAmount.value,
            divide_num: this.refs.targetNum.value,
            list_title:this.refs.title.value,
            list_describe:this.refs.describe.value,
            img:this.refs.img.value
        });
    }

    componentDidMount() {
        Http.post("http://localhost:8080/MicroPower/MircoPowerReact", this.props.submit, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        this.setState({
            flag: result.flag
        })
        console.log(this.state.flag);
    }

    error() {
        //alert("errror");
        console.log(this.props.submit)
    }

    render() {
        let options = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ]

        return (
            <div>
                <div className="item">
                    <h2 className="text-center">助力儿童</h2>
                    <form className="form-horizontal publishForm"  onSubmit={this.handleSubmit()}>
                        <div id="baseform" className="form-container">
                            <Input labelName="目标金额" placeHolder="您想要筹多少钱？" ref='targetAmount'/>
                            <Select before="共" after="期" options={options} labelName="分期期数" ref='targetNum'/>
                            <Input labelName="筹款标题" placeHolder="填写筹款项目标题" ref="title"/>
                            <TextArea placeHolder="建议详细描述受助人的基本情况：如家庭背景、经济状况、患病经历等。" ref='describe'/>
                            <AddImage ref="img"/>
                        </div>
                        <PublishButton />
                    </form>
                </div>
                <Agreement />
            </div>
        )
    }
}