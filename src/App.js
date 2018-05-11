import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button type="button" onClick={this.handleClick.bind(this)}>点击我</button>
      </div>
    );
  }

    handleClick(){
      console.log(this);
      // alert("弹窗")
  }
}

export default App;
