const express = require('express');
let Router = express.Router();
const mongodb = require('mongodb');
// const bodyParser = require('body-parser');

//获取Mongo客户端
const MongoClient = mongodb.MongoClient;
// //创建应用
// let app = express();
// //静态资源服务器
// app.use(express.static('./'));
 

//获取数据库_id的数据格式
var ObjectId = require('mongodb').ObjectId;

//渲染商品列表
Router.get('/plist',(req,res)=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('keke');

        // 使用集合
         let user = db.collection('good-list');

        user.find().toArray((err,result)=>{//查询所有
            // console.log(result);
            res.send(result);
        });
        database.close();//关闭数据库

    });

});
//删除单条商品
Router.get('/dellist',(req,res)=>{
    let id = ObjectId(req.query.idd);// 获取url里的参数
    MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('keke');

        // 使用集合
         let user = db.collection('good-list');

        user.deleteOne({'_id':id},(err,result)=>{
            if(result){
                res.send({
                    code:1,
                    data:[],
                    msg:'删除成功'
                // })else{
                //     res.send({
                //         code:0,
                //         data:[],
                //         msg:'删除失败'
                 })
            }
        });
        database.close();
    });
        
});
//添加商品
Router.get('/addlist',(req,res)=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('keke');

        // 使用集合
         let user = db.collection('addlist');

        user.insert([{"url":"www.baidu.com","adadsa":"sadasdas","dasdsadsa":"dasdsadas"}]).toArray((err,result)=>{//查询所有
            // console.log(result);
            res.send(result);
        });
        database.close();//关闭数据库

    });

});
//删除单条用户名
Router.get('/deluser',(req,res)=>{
    let id = ObjectId(req.query.idd);// 获取url里的参数
    MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('keke');

        // 使用集合
         let user = db.collection('user');

        user.deleteOne({'_id':id},(err,result)=>{
            console.log(result);
            if(result){
                res.send({
                    code:1,
                    data:[],
                    msg:'删除成功'
                })
            }else{
                    res.send({
                        code:0,
                        data:[],
                        msg:'删除失败'
                 })
        }
    });
        database.close();
    });
  
});
//渲染用户名表
Router.get('/duser',(req,res)=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('keke');

        // 使用集合
         let user = db.collection('user');

        user.find().toArray((err,result)=>{//查询所有
            // console.log(result);
            res.send(result);
        });
        database.close();//关闭数据库

    });

});
//渲染订单表
Router.get('/qorder',(req,res)=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('keke');

        // 使用集合
         let user = db.collection('order');

        user.find().toArray((err,result)=>{//查询所有
            // console.log(result);
            res.send(result);
        });
        database.close();//关闭数据库

    });

});
//渲染商品分类
Router.get('/tfica',(req,res)=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('keke');

        // 使用集合
         let user = db.collection('fica');

        user.find().toArray((err,result)=>{//查询所有
            // console.log(result);
            res.send(result);
        });
        database.close();//关闭数据库

    });

});
//删除单条商品分类
Router.get('/delfica',(req,res)=>{
    let id = ObjectId(req.query.idd);// 获取url里的参数
    MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('keke');

        // 使用集合
         let user = db.collection('fica');

        user.deleteOne({'_id':id},(err,result)=>{
            console.log(result);
            if(result){

                res.send({
                    code:1,
                    data:[],
                    msg:'删除成功'
                // })else{
                //     res.send({
                //         code:0,
                //         data:[],
                //         msg:'删除失败'
                 })
            }
        });
        database.close();
    });
});    


module.exports = Router;
// app.listen(2333,()=>{
//     console.log('server is running on http://localhost:2333');
// })