/**
 * Created by Administrator on 2017/4/11.
 */
import React from 'react';
export default class CopyRight extends React.Component {
    render() {
        return (<div className="copyright">
            <div className="container">
                <div className="copy-main">
                    <p>
                        Copyright &copy; 2017微捐赠 - 江西师范大学
                        <a href="#"> <img src="images/copyright.png" alt="" className="img-responsive"/></a>
                    </p>
                </div>
            </div>
        </div>);
    }
}