/**
 * Created by ZhifengFang on 2017/5/21.
 */
import React from 'react'
export default class PublishButton extends React.Component{
    render(){
        return (
            <div className="form-group form-group-lg">
                <div className="col-md-12 text-center">
                    <input defaultValue="love" type="hidden"/>
                    <input defaultValue="love" type="hidden"/>
                    <input type="hidden" defaultValue="3450945a2325a4ebc66cc7443a5efbf6"/>
                    <input type="hidden" defaultValue=""/>
                    <input type="hidden" defaultValue="1" name="list_category"/>
                    <input type="submit" className="btn btn-primary btn-lg large" defaultValue="发布项目"/>
                    <p className="user-agreement">
                        <input type="radio" id="agree" defaultChecked="checked"/>
                        <span>已阅读并同意<a href="" className="text-success" data-toggle="modal"
                                       data-target="#publish-agreement">《微捐助项目发起条款》</a></span>
                    </p>
                </div>
            </div>
        )
    }
}