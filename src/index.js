import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App name="Runoob" />
        <Test name="test" />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
