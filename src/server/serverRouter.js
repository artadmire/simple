const express = require('express')
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Document from '../components/Document'
import App from '../components/App'
import { StaticRouter, matchPath } from 'react-router-dom'
import routes from  '../core/routes'

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
    }
  } catch (error) {}
  const appString = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={data}
    >
      <App/>
    </StaticRouter>
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