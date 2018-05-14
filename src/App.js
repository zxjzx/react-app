import React, { Component } from 'react';

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



            <h2>路由页面如下</h2>

            {/*路由配置*/}
            <Routes />
        </div>

    );
  }

}

export default App;
