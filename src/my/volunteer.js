/**
 * Created by ZhifengFang on 2017/6/9.
 */
import React from 'react'
import Nav from './component/settingNav'
import Http from '../http'
import {Link} from 'react-router-dom'
export default class Volunteer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            is_volunteer: 2
        }
    }

    componentDidMount() {
        Http.post(Http.URL+"/MicroPower/IsVolunteerServlet", {}, this.callBackFun.bind(this), this.error);
    }

    callBackFun(result) {
        this.setState({
            is_volunteer: result.flag
        })
        console.log(this.state)
    }

    error() {
        alert("show setting errror");
    }

    render() {
        let items
        if (this.state.is_volunteer === 1) {
            items = (
                <tr>
                    <td className="col-md-3 pet_cell"></td>
                    <td className="col-md-3 pet_cell">待审核</td>
                    <td className="col-md-3 pet_cell"></td>
                    <td className="col-md-3 pet_cell">
                        <Link to="/my/add/volunteer">
                            <input className="button-green" type="button" value="添加审核"/>
                        </Link>
                    </td>
                </tr>
            )
        } else if (this.state.is_volunteer === 2) {
            items = (
                <tr>
                    <td className="col-md-3 pet_cell">未通过审核</td>
                    <td className="col-md-3 pet_cell"></td>
                    <td className="col-md-3 pet_cell"></td>
                    <td className="col-md-3 pet_cell">
                        <Link to="/my/add/volunteer">
                            <input className="button-green" type="button" value="添加审核"/>
                        </Link>
                    </td>
                </tr>
            )
        } else if (this.state.is_volunteer === 3) {
            items = (
                <tr>
                    <td className="col-md-3 pet_cell">已通过审核</td>
                    <td className="col-md-3 pet_cell"></td>
                    <td className="col-md-3 pet_cell"></td>
                    <td className="col-md-3 pet_cell">

                    </td>
                </tr>
            )
        } else if (this.state.is_volunteer === 4) {
            items = (
                <tr>
                    <td className="col-md-3 pet_cell">正在审核</td>
                    <td className="col-md-3 pet_cell"></td>
                    <td className="col-md-3 pet_cell"></td>
                    <td className="col-md-3 pet_cell">
                    </td>
                </tr>
            )
        }
        return (
            <div className="item-setting">
                <div className="container">
                    <h2 className="text-center">个人设置</h2>
                    <Nav/>
                    <hr/>
                    <table>
                        <tbody>
                        {items}
                        </tbody>
                    </table>
                </div>
                <hr/>
            </div>
        )
    }
}