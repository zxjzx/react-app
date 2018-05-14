import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./common/Header";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App name="Runoob" />

    </div>,
    document.getElementById('root')
);

ReactDOM.render(
    <div>
        <Header />

    </div>,
    document.getElementById('header')
);
registerServiceWorker();



