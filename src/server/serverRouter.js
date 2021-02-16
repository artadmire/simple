const express = require('express');
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Document from '../Document';
import App from '../App';
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from  '../core/routes';
import store from '../store';
import { Provider } from  'react-redux';
import { Js } from '../store/action'

const router = express.Router();

router.get("*", async function (req, res) {
  let data = {}, getData = null;
  routes.some((route) => {
    const match = matchPath(req.path, route);
    if(match) {
      getData = (route.component || {}).getData;
    }
    return match;
  })
  try {
    if(typeof getData === 'function') {
      data = await getData();
      store.dispatch(Js(data.data));
    }
  } catch (error) {
    console.log(error, 'error');
  }
  const appString = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter 
        location={req.url}
        context={data}
      >
        <App/>
      </StaticRouter>
    </Provider>
  )
  const html = ReactDOMServer.renderToStaticMarkup(
    <Document data={data}>
      {appString}
    </Document>
  )
  res.status(200);
  res.send(html);
});

module.exports = router