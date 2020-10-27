import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Approuter from './routers/Approuter';
import configureStore from './store/createStore';

const store = configureStore();

const jsx = (
  <Provider store={store}>
     <Approuter />
  </Provider>
);

ReactDOM.render(jsx,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
