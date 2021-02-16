import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from  './store/index';
import { Js } from './store/action';

const root = document.getElementById('root');
if(window.__APP_DATA__) {
  console.log(2)
  store.dispatch(Js(window.__APP_DATA__.data));
}

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, root)
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>, root)