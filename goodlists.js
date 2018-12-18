const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

//获取Mongo客户端
const MongoClient = mongodb.MongoClient;
//创建应用
let app = express();
//静态资源服务器
app.use(express.static('./'));



app.get('/plist',(req,res)=>{
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

// app.get('/dellist?_id',(req,res)=>{

//     MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
//         //连接成功后执行这个回调函数
//         if(err) throw err;

//         // 使用某个数据库，无则自动创建
//         let db = database.db('keke');

//         // 使用集合
//          let user = db.collection('good-list');

//         user.remove({'_id':'_id'}).toArray((err,result)=>{
//             console.log(result);
//             if(result){
//                 res.send({
//                     code:1
//                     data:[],
//                     msg:'删除成功'
//                 // })else{
//                 //     res.send({
//                 //         code:0,
//                 //         data:[],
//                 //         msg:'删除失败'
//                      })
//                 }
//             }
//         });
//         database.close();

//     });

// });

app.get('/duser',(req,res)=>{
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

app.get('/qorder',(req,res)=>{
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

app.get('/tfica',(req,res)=>{
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


app.listen(2333,()=>{
    console.log('server is running on http://localhost:2333');
})