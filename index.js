const path  = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser');
const api = require('./route/api');
const app = express();
app.use(bodyParser.json())// 处理post请求参数，json
app.use(bodyParser.urlencoded())// 处理post请求参数，表单
app.use('/api', api);
app.use(webpackDevMiddleware(webpack(webpackDevConfig)))
app.use(express.static(path.join(__dirname, '/src')))
app.listen(8081, () => {
  console.log('listen on port 8081')
})

