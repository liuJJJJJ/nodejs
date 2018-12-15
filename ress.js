const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

//获取Mongo客户端
const MongoClient = mongodb.MongoClient;
//创建应用
let app = express();
//把当前目录当做静态资源服务器
app.use(express.static('./'));


// 路由
// let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/plist',(req,res)=>{


    MongoClient.connect('mongodb://127.0.0.1:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('usesu');

        // 使用集合
         let user = db.collection('user');

        user.find().toArray((err,result)=>{
            console.log(result);
            res.send(result);
        });
       

        database.close();

    });

});


app.listen(2333,()=>{
    console.log('server is running on http://localhost:2333');
});