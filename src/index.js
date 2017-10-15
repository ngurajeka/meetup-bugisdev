import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootswatch/flatly/bootstrap.min.css';
import './css/style.css';

// eslint-disable-next-line
import jquery from 'jquery';
// eslint-disable-next-line
import bootstrap from 'bootstrap';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
