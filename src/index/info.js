/**
 * Created by ZhifengFang on 2017/4/12.
 */
import React from 'react';

export default class Info extends React.Component {
    render() {
        return (
            <div className="ab-info">
                <div className="container">
                    <div className="ab-info-main">
                        <div className="col-md-6 ab-info-left">
                            <h3>
                                我们的使命<span className="ab-info-clr">凝聚爱心，传递阳光</span>
                            </h3>
                            <p>微捐赠旨在帮助身处困境的人摆脱困难，拥抱生活的希望。</p>
                            <span className="ab-line"></span>
                        </div>
                        <div className="col-md-6 ab-info-right">
                            <p>微捐赠可以汇聚更多人的力量，支持者的支持金额通常较小，不会对支持者的生活带来很大的影响，容易等到朋友间的反馈和支持，所以更容易召集大家的参与。</p>
                            <a href="footMedia">更多</a>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}