/**
 * Created by ZhifengFang on 2017/4/11.
 */
import React from 'react';
import Foot from './foot';
import Mine from './mine';
import {HashRouter,  Route} from 'react-router-dom';
import ReactDOM from 'react-dom'
import About from './foot/about'
import Connect from './foot/connect'
import Middle from './index/middle'
import Help from './foot/help'
import Join from './foot/join'
import Terms from './foot/terms'
import Privacy from './foot/privacy'
import Media from './foot/media'
import Publish from './publish/publish'
import Login from './login'
import Child from './publish/child'
import Finish from './publish/finish'
import Phone from './phone'
import Donation from './publish/donation'
import Need from './publish/need'
import Share from './publish/share'
import ShowHelp from './show/help'
import ShowBetter from './show/better'
import ShowDonation from './show/donation'
import ShowShare from './show/share'
import AppLoad from './foot/appLoad'
import Setting from './my/setting'
import HelpDetail from './show/helpDetail'

var footInfo = [
    {infoHead: "信息", infoDetail: [{infoLink: "http://jwc.jxnu.edu.cn", infoName: "江西师范大学"}]},
    {
        infoHead: "关于微助力",
        infoDetail: [
            {infoLink: "/foot/about", infoName: "微助力介绍"},
            {infoLink: "/foot/connect", infoName: "联系我们"},
            {infoLink: "/foot/join", infoName: "加入我们"}]
    },
    {
        infoHead: "用户服务",
        infoDetail: [{infoLink: "/foot/help", infoName: "帮助中心"},
            {infoLink: "/foot/terms", infoName: "使用条款"},
            {infoLink: "/foot/privacy", infoName: "隐私政策"}]
    },
    {
        infoHead: "关注我们",
        infoDetail: [
            {infoLink: "http://weibo.com", infoName: "新浪微博"},
            {infoLink: "/foot/media", infoName: "媒体报道"}]
    },
];
var source = "http://localhost:8080/MicroPower/IsLoginServlet";

class Index extends React.Component {
    render() {
        return (
            <div>
                <Mine source={source}/>
                {this.props.children}
                <Foot items={footInfo}/>
            </div>
        );
    }
}
ReactDOM.render(
    (<HashRouter>
            <Index>
                <Route exact path="/" component={Middle}/>
                <Route path='/foot/about' component={About}/>
                <Route path='/foot/connect' component={Connect}/>
                <Route path='/foot/join' component={Join}/>
                <Route path='/foot/help' component={Help}/>
                <Route path='/foot/terms' component={Terms}/>
                <Route path='/foot/privacy' component={Privacy}/>
                <Route path='/foot/media' component={Media}/>
                <Route path='/publish' component={Publish}/>
                <Route path='/login' component={Login}/>
                <Route path='/child' component={Child}/>
                <Route path='/finish' component={Finish}/>
                <Route path='/phone' component={Phone}/>
                <Route path='/donation' component={Donation}/>
                <Route path='/need' component={Need}/>
                <Route path='/share' component={Share}/>
                <Route path="/show/help" component={ShowHelp}/>
                <Route path="/show/better" component={ShowBetter}/>
                <Route path="/show/donation" component={ShowDonation}/>
                <Route path="/show/share" component={ShowShare}/>
                <Route path="/help/detail/:id" component={HelpDetail}/>
                <Route path="/app" component={AppLoad}/>

                <Route path="/my/setting" component={Setting}/>
            </Index>
        </HashRouter>
    ), document.getElementById('root'));