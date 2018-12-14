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
                $('#nameyz').css({"color":"red","display":"block"});
                $('#nameyz').html("用户名已存在...");
            }else{
                $('#nameyz').css({"color":"green","display":"block"});
                $('#nameyz').html("用户名可用...");
            }
        }
    });
    }
})


$('#password').blur(function(){
    var username=$("#username").val();
    var password=$("#password").val();
    var patrn=/^(\w){6,20}$/; 
    if(password==''){
        $('#passyz').css({"color":"red","display":"block"});
        $('#passyz').html("密码不能为空...")
        return;
    }
    else if(!patrn.test(password)){
        $('#passyz').css({"color":"red","display":"block"});
        $('#passyz').html("密码格式不正确...")
        return;
    }
    else{
        $('#passyz').css({"color":"green","display":"block"});
        $('#passyz').html("密码格式正确...")
        $("#password1").blur(function(){
            if(password==$("#password1").val()){
                $('#passyz2').css({"color":"green","display":"block"});
                $('#passyz2').html("密码两次输入一致...");
                $("#register1").click(function(){
                    $.ajax({
                        type:"post",
                        data:{
                            username:$("#username").val(),
                            password:$("#password").val()
                        },
                        url:"http://localhost:3000/login/login",
                        async:true,
                        success:function(data){
                            if(data=='ok'){
                                alert("注册成功")
                                window.location.href="http://localhost:3000/html/login.html" 
                            }
                        }
                    });
                });
            }else{
                $('#passyz2').css({"color":"red","display":"block"});
                $('#passyz2').html("两次密码不一致...")
            }
        });      
    }
})