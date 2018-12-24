var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
var mongoose=require('mongoose');
const multer=require('multer');
const fs=  require('fs');
const path=require('path');
var upload = multer({ dest: 'images/' })
/* Index */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
    db.query(function(db){
        db.collection("goods").insertMany([req.body], function(err, result) {
            // console.log(result)
            res.send("ok");
        })
    })
});
/*login */
router.post('/dl', function(req, res, next) {
    db.query(function(db){                             
        db.collection('goods').find({"username":req.body.username}).toArray(function(err,docs){   
            if(docs.length>0){
                res.send("ok");
            }else{
                res.send("no");
            }
        });
    });
});
/*register*/
router.post('/dlmm', function(req, res, next) {
    db.query(function(db){
        db.collection("goods").find({"username":req.body.username}).toArray(function(err, docs){
            // console.log(docs[0].password,req.body.username)
            if(docs[0].password==req.body.password){
                res.send("ok");
            }else{
                res.send("no");
            }
        })
    })
});

// 增加路由
router.post('/add', function(req, res, next) {
    db.query(function(db){
        db.collection("biao").find({"name":req.body.name}).toArray(function(err, docs) {
            if(docs.length>0){
                res.send("no");
            }else{
                var db=require('../lib/db.js');
                db.query(function(db){
                    db.collection("biao").insertMany([req.body], function(err, result) {
                        console.log("ok");
                        res.send('ok');
                    })
                })
            }
        })
    })
});

//上传图片
router.post('/img',upload.single('test'),(req,res)=>{//保存图片的formdata 对象的key值
    console.log(req.file)
    fs.readFile(req.file.path,(err,data)=>{
        if (err) { return res.send('上传失败')}
        //为了保障图片不被覆盖 采用 时间戳+随机方式生成文件名
        let name=new Date().getTime()+parseInt(Math.random(0,1)*10000)+path.extname(req.file.originalname);
        console.log(name)
        fs.writeFile(path.join(__dirname,'../public/images/'+name), data, (err)=>{
            //保存数据库的应该是  相对的图片路径
            if (err) {console.log(err)}
            res.send({err:0,msg:'上传ok',data:'/images/'+name})
        });

    });

});

// 主页路由
router.get('/home', function(req, res, next) {
        db.query(function(db){
            db.collection("biao").find({}).toArray(function(err, docs) {
                console.log(docs)
                res.json({
                product: docs
            });
        });
    })
});
// 查询路由
router.post('/find', function(req, res, next) {
    console.log(req.body.name);
        db.query(function(db){
            db.collection("biao").find({"name":req.body.name}).toArray(function(err, docs) {
                console.log(docs);
                res.json({
                product: docs
                });
            });
        })
});
// 删除路由
router.post('/delete', function(req, res, next) {
    console.log(mongoose.Types.ObjectId(req.body._id));

        db.query(function(db){
            db.collection("biao").deleteOne({"_id": mongoose.Types.ObjectId(req.body._id)}, function(err, result) {
                res.send('删除成功');

              });    
            
        })
});
// 更新路由
router.post('/update', function(req, res, next) {
    console.log(req.body);
        db.query(function(db){
            db.collection("biao").updateOne({
                    "_id": mongoose.Types.ObjectId(req.body._id)
                  }, {
                    $set: {
                        name:req.body.name,
                        color:req.body.color,
                        price:req.body.price,
                        memory:req.body.memory,
                        imgurl:req.body.imgurl
                    }
                  }, function(err, result) {
                    if (err) {
                      console.log('Error:' + err);
                      return;
                    }else{
                    res.send('修改成功');
                    }
            });
            
        })
});

module.exports = router;
