/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'

const Help = () => (
    <div className="main">
        <h2 className="text-center">您需要什么帮助?
        </h2>
        <br/>
        <div className="help-search-form">
            <form action="" method="get">
                <div className="input-group input-group-lg">
                    <input type="text" name="help_key" className="form-control" placeholder="请输入您的问题关键字" />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">搜索</button>
                </span>
                </div>
            </form>
        </div>
        <br/>
        <div className="search_hot">
            <ul>
                <li>热门搜索:</li>
                <li><a href="">怎样登录</a></li>
                <li><a href="">怎样发起助力</a></li>
                <li><a href="">支持次数</a></li>
                <li><a href="">审核通过</a></li>
                <li><a href="">修改助力</a></li>
                <li><a href="">发起助力的规范</a></li>
                <li><a href="">助力成功后会收费吗</a></li>
            </ul>
        </div>
        <hr/>
    </div>
)
export default Help