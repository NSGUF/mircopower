/**
 * Created by ZhifengFang on 2017/5/21.
 */
import React from 'react'
export default class OptionItem extends React.Component {
    render() {
        return (
            <option value={this.props.optionName}>{this.props.optionName}</option>
        )
    }
}
