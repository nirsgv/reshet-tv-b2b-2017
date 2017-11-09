import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

let baseUrl;
if(window.location.hostname==="localhost") {
    window.ENV = "DEV";
    baseUrl = 'http://localhost:1337/__sites/b2b/?json';
    window.path_prefix = "/__sites/b2b";
} else if (window.location.hostname==="apps2.reshet.tv"){
    window.ENV = "STAGE";
    baseUrl = 'http://apps2.reshet.tv/b2b-stage/?json';
    window.path_prefix = "/b2b-stage";
} else {
    window.ENV = "PROD";
    baseUrl = 'js/data.json';
    window.path_prefix = "/b2b-stage";
}

ReactDOM.render(
    <App baseUrl={baseUrl}/>,
    document.getElementById('root')
);

registerServiceWorker();
