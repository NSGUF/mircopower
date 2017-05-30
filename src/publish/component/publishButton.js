/**
 * Created by ZhifengFang on 2017/5/21.
 */
import React from 'react'
export default class PublishButton extends React.Component {
    render() {
        return (
            <div className="form-group form-group-lg">
                <div className="col-md-12 text-center">
                    <input type="button" className="btn btn-primary btn-lg large" defaultValue="发布项目"
                           onClick={this.props.onClick}/>
                </div>
            </div>
        )
    }
}