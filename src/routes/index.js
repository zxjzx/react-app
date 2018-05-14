import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化
import home from '../static/home';
import music from '../static/music';
import film from '../static/film';
import react from '../static/react';
import vue from '../static/vue';
import angular from '../static/angular';
const One = () => (
    <div>
        <h2>首页</h2>
    </div>
)

const Lists = ({ match }) => (
    <div>
        <h3>{match.params.ListsId}</h3>
    </div>
)

const List = ({ match }) => (
    <div>
        <h2>我是一个列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/我是第一个哈哈`}>
                    列表下边的第一个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第二个呵呵`}>
                    列表下边的第二个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第三个嘿嘿`}>
                    列表下边的第三个
                </Link>
            </li>
        </ul>
        <Route path={`${match.url}/:ListsId`} component={Lists}/>
        <Route exact path={match.url} render={() => (
            <h3>点击上边的列表项此处显示与url地址一样的...</h3>
        )}/>
    </div>
)

const RouterList = () => (
    <Router>
        <div>
            <div className="layui-side layui-bg-black">
                <div className="layui-side-scroll">
                    <ul className="layui-nav layui-nav-tree"  lay-filter="test">
                        <li className="layui-nav-item"><Link to="/">首页</Link></li>
                        <li className="layui-nav-item"><Link to="/Lists">一个列表</Link></li>
                        <li className="layui-nav-item"><Link to="/music">音乐</Link></li>
                        <li className="layui-nav-item"><Link to="/film">电影</Link></li>
                        <li className="layui-nav-item"><Link to="/react">React</Link></li>
                        <li className="layui-nav-item"><Link to="/vue">Vue</Link></li>
                        <li className="layui-nav-item"><Link to="/angular">Angular</Link></li>

                    </ul>
                </div>
            </div>
            <Route exact path="/" component={home}/>
            <Route path="/Lists" component={List}/>
            <Route path="/music" component={music}/>
            <Route path="/film" component={film}/>
            <Route path="/react" component={react}/>
            <Route path="/vue" component={vue}/>
            <Route path="/angular" component={angular}/>

        </div>



    </Router>
)
export default RouterList


