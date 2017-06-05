/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'
import {Link} from 'react-router-dom'

export default class Publish extends React.Component {

    render() {
        return (
            <div className="publish-banner">
                <div className="container">
                    <div className="banner-info">
                        <h2>发起项目</h2>
                        <p>申请微爱通道的筹款项目，选择其他模板将强制下线处理。</p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/help.png" alt="一对一助力儿童" width="80px"/><br />
                        <p>
                            <Link to="/child">助力儿童</Link>
                        </p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/donation.png" alt="我要捐赠" width="80px"/><br />
                        <p>
                            <Link to="/donation">我要捐赠</Link>
                        </p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/need.png" alt="求助捐赠" width="80px"/><br />
                        <p>
                            <Link to="/need">求助捐赠</Link>
                        </p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/share.png" alt="分享见证" width="80px"/><br />
                        <p>
                            <Link to="/share">分享见证</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}