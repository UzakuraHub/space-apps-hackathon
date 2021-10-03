import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
serviceWorker.register();
