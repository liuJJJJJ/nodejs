onst express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

//获取Mongo客户端
const MongoClient = mongodb.MongoClient;
//创建应用
let app = express();
//静态资源服务器
app.use(express.static('./'));

//路由
//注册
// 路由
// 注册
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('./priduct-category',urlencodedParser ,(req,res)=>{
    let {username,password,gender} = req.body;

    MongoClient.connect('mongodb://127.0.0.1::27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('usesu');

        // 使用集合
        let user = db.collection('user');


        // 插入数据
        user.find({}),(err,result)=>{
            let data;
            if(err){
                data={
                    code:0,
                    data:[],
                    msg:err
                }
            }else{
                data = {
                    code:1,
                    data:result.ops,
                    msg:'插入成功'
                }
            }

            res.send(data);
        });
       

        // 关闭数据库，避免资源浪费
        database.close();

    });
})


app.listen(2333,()=>{
    console.log('server is running on http://localhost:2333');
})