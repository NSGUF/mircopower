/**
 * Created by ZhifengFang on 2017/5/21.
 */
import React from 'react'

export default class ImageItem extends React.Component{
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
        return(
            <div className="user-avatar" key={id++}>
                <div className="user-avatar">
                    <img ref="img" alt="添加图片" src="images/publish/addImg.png" />
                </div>
                <div className="changeHead">
                    <input type="file" accept="image/jpeg,image/png,image/bmp"  {...this.props}
                           value={this.state.value} onChange={this.handleChange.bind(this)} ref='addImg'/>
                </div>
            </div>
        )
    }
}