/**
 * Created by ZhifengFang on 2017/5/21.
 */
import React from 'react'

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div className="form-group form-group-lg">
                <label htmlFor={this.props.htmlFor} className="col-md-1 control-label"> {this.props.htmlFor}
                </label>
                <div className="col-md-9">
                    <div className="input-group">
                        <input type="text" id="raiseGoods" className="form-control	text_validata"
                               {...this.props}   onChange={this.props.onChange}  placeholder={this.props.placeholder}/>
                    </div>
                </div>
            </div>
        )
    }
}