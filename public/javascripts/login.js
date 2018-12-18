$('#username').blur(function(){
    var username=$("#username").val();
    var password=$("#password").val();
    var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
    if(username==''){
        $('#nameyz').css({"color":"red","display":"block"});
        $('#nameyz').html("用户名不能为空...")
        return;
    }else if(!uPattern.test(username)){
        $('#nameyz').css({"color":"red","display":"block"});
        $('#nameyz').html("用户名不正确...")
        return;
    }else{
        $.ajax({
        type:"post",
        data:{
            username:$("#username").val()
        },
        url:"http://localhost:3000/login/dl",
        async:true,
        success:function(data){
            if(data=="ok"){
                $('#nameyz').css({"color":"green","display":"block"});
                $('#nameyz').html("用户名正确");
            }else{
                $('#nameyz').css({"color":"red","display":"block"});
                $('#nameyz').html("用户名不存在");
            
            }
        }
    });
    }
})


$('#password').blur(function(){
    var username=$("#username").val();
    var password=$("#password").val();
    var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
    if(password==''){
        $('#passyz').css({"color":"red","display":"block"});
        $('#passyz').html("密码不能为空...")
        return;
    }
    else if(!uPattern.test(password)){
        $('#passyz').css({"color":"red","display":"block"});
        $('#passyz').html("密码不正确...")
        return;
    }
    else{
        $.ajax({
        type:"post",
        data:{
            username:$("#username").val(),
            password:$("#password").val()

        },
        url:"http://localhost:3000/login/dlmm",
        async:true,
        success:function(data){
            if(data=="ok"){
                $('#passyz').css({"color":"green","display":"block"});
                $('#passyz').html("密码正确");
            $("#login0").click(function(){
                alert("登陆成功")
                $.cookie('username', $("#username").val(),{ path: '/' });
                window.location.href="http://localhost:3000/html/home.html"

            })

            }else{
                $('#passyz').css({"color":"red","display":"block"});
                $('#passyz').html("密码错误");
            
            }
        }
    });
    }
})