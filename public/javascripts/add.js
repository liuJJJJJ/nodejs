
$("#btn").click(function(){
    $.ajax({
        type:"post",
        data:{
            username:$("#username").val(),
            password:$("#password").val(),
            age:$("#age").val(),
            sex:$("#sex").val(),
            tel:$("#tel").val(),
            txt:$("#txt").val()
        },
        url:"http://localhost:3000/login/add",
        async:true,
        success:function(data){
            if(data=="no"){
                alert("该用户已存在")
            }else{
                alert("添加成功")
            window.location.href="http://localhost:3000/html/home.html"
            }
        }
    });
});
var cookie=$.cookie('username');
$(".nav_r").html(
    `<p>您好：${cookie}</p>
        <ul class="nav_b">
            <li class="nav_b1">我的信息</li>
            <li class="nav_b2">注销</li>
        </ul>`
    );
$(".nav_r").mouseover( function () {
    $(".nav_b").css({"display":"block"});
    $('.nav_b2').click(function(){
        window.location.href="http://localhost:3000/html/login.html"
    });
    $(".nav_r").mouseout(function(){
        $(".nav_b").css({"display":"none"});
    })
})