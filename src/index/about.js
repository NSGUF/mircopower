/**
 * Created by ZhifengFang on 2017/4/12.
 */
import React from 'react';
import AboutItem from './aboutItem';
export default class About extends React.Component {
    render() {
        let id=0
        let items = [];
        if (this.props.items.length !== 0) {
            this.props.items.forEach(item => {
                items.push(<AboutItem aboutTitle={item.aboutTitle} key={id++} aboutDetail={item.aboutDetail}/>);
            });
        }
        return (
            <div className="about" id="about">
                <div className="container">
                    <div className="col-md-6 about-left">
                        <h3>浏览项目</h3>
                        <h5>唯有爱，让感动常在</h5>
                        <p>伸出您的援手，爱心接力，让希望点亮生命；携手同行，让真情无处不在</p>
                        <div className="about-grid">
                            {items}
                        </div>
                    </div>
                    <div className="col-md-6 about-right">
                        <img src="images/index/about.png" alt="" className="img-responsive"/>
                        <p>
                            微助力-基于社交的全民众筹平台，提供大病救助、留守儿童关爱、野生动物保护三大频道。为助力发起者提供快速的发起通道，多样的社交传播途径，完善的资金管理；为项目支持者提供急需帮助的众筹项目，透明的项目信息，便捷的支付方式，打造高效、便捷的全民众筹平台，帮助更多的资金上急需帮助的人摆脱困境。</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}