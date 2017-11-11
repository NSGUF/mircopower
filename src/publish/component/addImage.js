/**
 * Created by ZhifengFang on 2017/5/21.
 */
import React from 'react'

export default class AddImage extends React.Component {
    render() {
        return (
            <div className="form-group form-group-lg">
                <div className="col-md-9">
                    <div className="wjz-uploader clearfix">
                        <div className="uploader-list main-images-list"></div>
                        <div className="webPicPicker webuploader-container">
                            <div id="reviewPicker"
                                 className="webuploader-pick webuploader-pick-hover left">
                                {this.props.all}
                                <div className="user-avatar left">
                                    <div className="user-avatar">
                                        <img ref="img" alt="添加图片" src="images/publish/addImg.png"/>
                                    </div>
                                    <div className="changeHead">
                                        <input type="file" name="img" accept="image/jpeg,image/png,image/bmp"
                                               onChange={this.props.onChange}/>
                                    </div>
                                </div>
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