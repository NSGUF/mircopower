/**
 * Created by ZhifengFang on 2017/5/21.
 */
import React from 'react'
import ImageItem from './imageItem'

export default class AddImage extends React.Component{
    render(){
        return(
            <div className="form-group form-group-lg">
                <div className="col-md-9">
                    <div className="wjz-uploader clearfix">
                        <div className="uploader-list main-images-list"></div>
                        <div className="webPicPicker webuploader-container">
                            <div id="reviewPicker"
                                 className="webuploader-pick webuploader-pick-hover left">
                                <ImageItem {...this.props}/>
                            </div>
                        </div>
                    </div>
                    <div className="help-block">
                        微爱通道发起的医疗救助项目，建议上传患者治疗中的照片、患者患病前后生活照对比、医院诊断证明<br /> 等照片，提高项目可信度。
                    </div>
                </div>
            </div>
        )
    }
}