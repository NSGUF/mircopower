/**
 * Created by ZhifengFang on 2017/5/15.
 */
/**
 * Created by ZhifengFang on 2017/4/11.
 */
import React from 'react';
import Banner from './banner';
import About from './about';
import TestImo from './testImo';
import Dream from './dream';
import Info from './info';


export default class Middle extends React.Component {

    render() {
        let aboutInfo = [
            {
                aboutTitle: "一对一助力儿童",
                aboutDetail: "也许您的资助会改变他们的命运。请伸出您关爱的双手，让同一片阳光下的孩子拥有幸福的童年和美好的明天。"
            },
            {
                aboutTitle: "求助捐赠",
                aboutDetail: "提供一个为有需要的贫困山区儿童捐赠二手物品的平台，爱心人士可以捐赠出生活用品，衣物，书籍，学习用品等等。"
            }, {
                aboutTitle: "我要捐赠",
                aboutDetail: "爱心人士可在此发布自己想要捐赠的物品，有需要的人会与他联系。"
            }];
        return (
            <div>
                <Banner/>
                <About items={aboutInfo}/>
                <TestImo/>
                <Dream/>
                <Info/>
            </div>
        );
    }
}
