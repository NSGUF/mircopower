/**
 * Created by Administrator on 2017/4/11.
 */
import React from 'react';
import {NavLink } from 'react-router-dom'
export default class LiItem extends React.Component {
    handlerClick() {
        scrollTo(0, 0)
    }

    render() {
        let id = 0;
        return (
            <li key={id++}>
                <NavLink  to={this.props.infoLink} activeClassName="active" onClick={this.handlerClick()}>
                    {this.props.infoName}
                </NavLink >
            </li>
        );
    }
}
