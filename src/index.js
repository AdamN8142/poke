import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../src/Reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render
( <Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
