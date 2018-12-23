//把路由封装成模块
const express = require('express');

// 引入单独路由模块
const goodlistsRouter = require('./goodlists.js');


let Router = express.Router();

// 关于用户的路由


// 关于商品的路由
Router.use('/goodlists',goodlistsRouter);

// 关于商品分类的路由





module.exports = Router;