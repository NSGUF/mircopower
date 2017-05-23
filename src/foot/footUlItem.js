/**
 * Created by ZhifengFang on 2017/4/11.
 */
import React from 'react';
import LiItem from './liItem';
export default class FootUlItem extends React.Component {
    render() {
        let id=0;
        let items = [];
        if (this.props.items.length !== 0) {
            this.props.items.forEach(
                item => {
                    items.push(<LiItem infoLink={item.infoLink} key={id++} infoName={item.infoName}/>);
                }
            );
        }
        return (
            <ul className="ftr-categ">
                {items}
            </ul>
        );
    }
}