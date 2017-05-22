/**
 * Created by ZhifengFang on 2017/4/12.
 */
import React from 'react';
import DreamItem from './dreamItem';
export default class Dream extends React.Component{
    render(){
        let dreamInfo=[
            {itemName: '注册用户', itemNumber: 1210},
            {itemName: '助力清单', itemNumber: 2310},
            {itemName: '支持次数', itemNumber: 3121},
            {itemName: '分享次数', itemNumber: 4312}
        ];
        let items = [];
        let id=0
        if (dreamInfo.length !== 0) {
            dreamInfo.forEach(item => {
                items.push(<DreamItem itemNumber={item.itemNumber} itemName={item.itemName} key={id++}/>)
            });
        }
        return (
            <div className="dreams">
                <div className="container">
                    <div className="dream-main">
                        <div className="dream-top">
                            <h3>微助力</h3>
                            <p>与爱同行，凝聚力量，共渡难关</p>
                        </div>
                        <div className="dream-bottom">
                            {items}
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}