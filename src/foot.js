/**
 * Created by Administrator on 2017/4/11.
 */
import React from 'react';
import FootItem from './foot/footItem';
import CopyRight from './foot/copyRight'

export default class Foot extends React.Component {
    render() {
        let items = [];
        let id = 0;
        if (this.props.items.length !== 0) {
            this.props.items.forEach(
                item => {
                    items.push(<FootItem infoHead={item.infoHead} key={id++} infoDetail={item.infoDetail}/>);
                }
            );
        }
        return (
            <div>
                <div className="footer">
                    <div className="container">
                        {items}
                        <div className="col-md-3 ftr-grd">
                            <div className="col-md-6 ftr-gd4-1 text-center">
                                <img src="images/foot1.png" alt="" className="img-responsive"/>下载APP
                            </div>
                            <div className="col-md-6 ftr-gd4-1 text-center">
                                <img src="images/foot2.png" alt="" className="img-responsive"/>微信公众号
                            </div>
                        </div>
                    </div>
                </div>
                <CopyRight/>
            </div>
        );
    }
}