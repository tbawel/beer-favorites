import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { logger } from "redux-logger";
import promise from "redux-promise-middleware";
import { Provider } from 'react-redux';
import reducers from './reducers/';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const middleware = applyMiddleware(promise(), logger);
const store = createStore(reducers, middleware);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
