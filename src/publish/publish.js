/**
 * Created by ZhifengFang on 2017/5/17.
 */
import React from 'react'
import {Link} from 'react-router-dom'

export default class Publish extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            IsClick: false
        }
    }
    handlerClick(){
        this.setState({
            IsClick:!this.state.IsClick
        })
    }
    render(){
        let re=this.state.IsClick?{display: 'block'}:{display: 'none'}
        return(
            <div className="publish-banner">
                <div className="container">
                    <div className="banner-info">
                        <h2>发起项目</h2>
                        <p>申请微爱通道的筹款项目，选择其他模板将强制下线处理。</p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/banner1.png" width="60px" height="60px" alt="一对一助力儿童"/><br />
                        <p>
                            <Link to="/child">助力儿童</Link>
                        </p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/banner2.png" width="60px" height="60px" alt="微捐赠"/><br />
                        <p>
                            <span onClick={this.handlerClick.bind(this)}>微捐赠</span>
                        </p>
                    </div>
                    <div className="item-drop">
                        <img src="images/publish/banner3.png" width="60px" height="60px" alt="分析见证"/><br />
                        <p>
                            <Link to="/publish/share">分享见证</Link>
                        </p>
                    </div>
                    <div className="publish-center" id="center" style={re}>
                        <div className="triangle-center"></div>
                        <div className="banner-item">
                            <li><Link to="/publish/donation">我要捐赠</Link></li>
                            <br />
                            <p>绵薄物资，贡献大爱力量</p>
                        </div>
                        <div className="banner-item">
                            <li><Link to="/publish/need">求助捐赠</Link></li>
                            <br />
                            <p>一丝关怀，驱散心中忧虑</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}