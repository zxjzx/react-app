/**
 * Created by Administrator on 2018/5/14
 * Description:
 */
import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        //TODO
    }

    componentDidMount() {
        //TODO
    }

    render() {
        return (
            <div className="layui-header">
                <div className="layui-logo">我的网站-工作内容</div>
                <ul className="layui-nav layui-layout-left">
                    <li className="layui-nav-item"><a href="">控制台</a></li>
                    <li className="layui-nav-item"><a href="">管理</a></li>
                    <li className="layui-nav-item"><a href="">用户</a></li>
                    <li className="layui-nav-item">
                        <a href=" ">其它系统</a>
                        <dl className="layui-nav-child">
                            <dd><a href="">邮件管理</a></dd>
                            <dd><a href="">消息管理</a></dd>
                            <dd><a href="">授权管理</a></dd>
                        </dl>
                    </li>
                </ul>
                <ul className="layui-nav layui-layout-right">
                    <li className="layui-nav-item">
                        {/*<a href="javascript:;">
                            <img src="http://t.cn/RCzsdCq" className="layui-nav-img">
                                贤心
                        </a>*/}
                        <dl className="layui-nav-child">
                            <dd><a href="">基本资料</a></dd>
                            <dd><a href="">安全设置</a></dd>
                        </dl>
                    </li>
                    <li className="layui-nav-item"><a href="">退了</a></li>
                </ul>
            </div>
        )
    }
}