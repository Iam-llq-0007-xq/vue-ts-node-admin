const express = require('express');
const proxy = require('http-proxy-middleware').createProxyMiddleware
const _ = require('lodash');
const path = require('path');
const history = require('./servers/history');
require('dotenv').config();

const port = process.env.SERVER_PORT || 8003;
const prefix = '';
const _apiMatcher = (suffix) => `(${prefix}/${suffix})|${prefix}/**/${suffix}`;

const app = express();
app.use(history);
app.use(express.static('dist/web/v1.0'));

app.use(
  _apiMatcher('api'),
  proxy({
    target: process.env.TARGET_URL,
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: _.invert({
      '/': `^${prefix}(.*)api/`
    })
  })
)

app.listen(port, () => {
  console.log('server running on port: ', port);
});
