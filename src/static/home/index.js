/**
 * Created by zxj on 2018/5/14
 * Description:
 */
import React, {Component} from 'react';
import './home.css';
import logo from './logo.svg';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        //TODO
    }

    render() {
        return (
            <div>
                <h2>首页</h2>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </div>
        )
    }
}