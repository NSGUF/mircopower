/**
 * Created by ZhifengFang on 2017/5/21.
 */
import OptionItem from './optionItem'
import React from 'react'
export default class Select extends React.Component{
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

    render(){
        let id=0
        return (
            <div className="form-group form-group-lg">
                <label htmlFor="raisefundsNumber" className="col-md-1 control-label">{this.props.labelName}</label>
                <div className="col-md-9 wjz-slider-row">

                    <div className="clearfix"></div>
                    <div className="wjz-slider clearfix">
                        {this.props.before}<strong id="liderVal">
                        <select id="dayslider" name="divid_num"  {...this.props}  value={this.state.value} onChange={this.handleChange}>
                            {this.props.options.map(option=>(
                                <OptionItem optionName={option} key={id++}/>
                            ))}
                        </select></strong>{this.props.after}
                    </div>
                </div>
            </div>
        )
    }
}


