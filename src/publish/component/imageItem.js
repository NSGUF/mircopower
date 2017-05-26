/**
 * Created by ZhifengFang on 2017/5/21.
 */
import React from 'react'

export default class ImageItem extends React.Component {
    render() {
        let id = 0
        return (
            <div className="user-avatar left" key={id++}>
                <div className="user-avatar">
                    <img ref="img" alt="添加图片" src={this.props.src}/>
                </div>
            </div>
        )
    }
}