import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux'
import { createStore } from "redux";

import App from './App';
import reducers from './reducers'

let store = createStore(reducers);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
