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

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        })
    }

    handleChange(e) {
        this.setState({
            value: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className="form-group form-group-lg">
                < label htmlFor={this.props.labelName} className="col-md-1 control-label"> {this.props.labelName}
                </label>
                <div className="col-md-9">
                    <div className="input-group">
                        <input type="text" id="raiseGoods" className="form-control	text_validata"
                               {...this.props}  value={this.state.value} onChange={this.handleChange}  placeholder={this.props.placeHolder}/>
                    </div>
                </div>
            </div>
        )
    }
}