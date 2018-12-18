function find() {
    return new Promise(function(resolve, reject) {
        $("#btn_so").click(function(){
            // $("#tbody").empty();
            $.ajax({
                type:"post",
                async:true,
                url:"http://localhost:3000/login/find",
                data:{
                    name:$("#input_so").val()
                },
                success:function(data){
                    resolve(data);
                }
            })
        })
    })
}
function xieruTable(data){
    console.log(data)
    var html = data.product.map(function(item,index){
        return `
            <tr>
                <td>${index+1}</td>
                <td>${item.name}</td>
                <td>${item.color}</td>
                <td>${item.price}</td>
                <td>${item.memory}</td>
                <td><img src="${item.imgurl}"/ style="width:32px;height:32px;"></td>
            </tr>
        `
    }).join("")
    $("#tbody").html(html);
}
find().then(xieruTable)
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