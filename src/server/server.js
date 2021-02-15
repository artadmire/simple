/** 
 * https://www.babeljs.cn/docs/babel-register
 * https://babeljs.io/docs/en/babel-preset-react#via-node-api
 */
// 处理css
 require('css-modules-require-hook/preset');
// 处理图片
const assethook = require('asset-require-hook');
assethook({
    extensions: ['png', 'jpg']
});
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
})

const express = require('express');
const app = express();
const serverRouter = require('./serverRouter');
const apiRouter = require('./apiRouter')

app.use('/api/', apiRouter);
// build 路径放前面
app.use('/build' ,express.static('build'));
app.use("/", serverRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
