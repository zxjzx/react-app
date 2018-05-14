import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes'
import { Router, Route, Link } from 'react-router'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 这个绑定是必要的，使`this`在回调中起作用
        // this.handleClick = this.handleClick.bind(this);
    }

  render() {
      console.log(this);
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>


            <h2>路由页面如下</h2>

            {/*路由配置*/}
            <Routes />
        </div>

    );
  }

}

export default App;
