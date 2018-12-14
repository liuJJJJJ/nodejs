var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
var mongoose=require('mongoose');
/* Index */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
    db.query(function(db){
        db.collection("student").insertMany([req.body], function(err, result) {
            // console.log(result)
            res.send("ok");
        })
    })
});
/*login */
router.post('/dl', function(req, res, next) {
    db.query(function(db){                             
        db.collection('student').find({"username":req.body.username}).toArray(function(err,docs){   
            if(docs.length>0){
                res.send("ok");
            }else{
                res.send("no");
            }
        });
    });
});
/*register*/
// router.post('/dlmm', function(req, res, next) {
//     db.query(function(db){
//         db.collection("student").find({"username":req.body.username}).toArray(function(err, docs){
//             // console.log(docs[0].password,req.body.username)
//             if(docs[0].password==req.body.password){
//                 res.send("ok");
//             }else{
//                 res.send("no");
//             }
//         })
//     })
// });

// 增加路由
router.post('/add', function(req, res, next) {
    db.query(function(db){
        db.collection("biao").find({"username":req.body.username}).toArray(function(err, docs) {
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
    console.log(req.body.username);
        db.query(function(db){
            db.collection("biao").find({"username":req.body.username}).toArray(function(err, docs) {
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
                        username:req.body.username,
                        password:req.body.password,
                        age:req.body.age,
                        sex:req.body.sex,
                        tel:req.body.tel,
                        txt:req.body.txt,
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
