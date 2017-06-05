/**
 * Created by Administrator on 2017/4/11.
 */
import React from 'react';
import {Link} from 'react-router-dom'
export default class LiItem extends React.Component {
    handlerClick() {
        scrollTo(0, 0)
    }

    render() {
        let id = 0;
        return (
            <li key={id++}>
                <Link to={this.props.infoLink} className={this.props.select?"active":""} onClick={this.handlerClick()}>
                    {this.props.infoName}
                </Link>
            </li>
        );
    }
}
