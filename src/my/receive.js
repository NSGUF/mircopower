/**
 * Created by ZhifengFang on 2017/6/8.
 */
import React from 'react'
import Nav from './component/settingNav'
import Http from '../http'
import {Link} from 'react-router-dom'
export default class Receive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addressInfo: []
        }
    }

    componentDidMount() {
        Http.post("http://localhost:8080/MicroPower/ShowAddressServlet", {flag:"receive"}, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        this.setState({
            addressInfo:result
        })
        console.log(this.state)
    }

    error() {
        alert("show setting errror");
    }

    render() {
        let id=0
        return (
            <div className="item-setting">
                <div className="container">
                    <h2 className="text-center">个人设置</h2>
                    <Nav/>
                    <hr/>
                    <table>
                        <tbody>
                        <tr>
                            <td className="col-md-3 pet_cell">收件人姓名</td>
                            <td className="col-md-3 pet_cell">详细地址</td>
                            <td className="col-md-3 pet_cell">手机号</td>
                            <td className="col-md-3 pet_cell"> 操作</td>
                        </tr>
                        {
                            this.state.addressInfo.map(address => (
                                <tr key={id++}>
                                    <td className="col-md-3 pet_cell">{address.name}</td>
                                    <td className="col-md-3 pet_cell">{address.detail}</td>
                                    <td className="col-md-3 pet_cell">{address.cellphone}</td>
                                    <td className="col-md-3 pet_cell"></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td className="col-md-3 pet_cell"></td>
                            <td className="col-md-3 pet_cell"></td>
                            <td className="col-md-3 pet_cell"></td>
                            <td className="col-md-3 pet_cell">
                                <Link to="/my/add/receive">
                                    <input className="button-green" type="button" value="添加收件地址"/>
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <hr/>
            </div>
        )
    }
}