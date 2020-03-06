import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import './components/App.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(<HashRouter>
                  <App />
                </HashRouter>, document.getElementById('root'));

serviceWorker.unregister();
