function home() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: "get",
            url: 'http://localhost:3000/login/home',
            async: true,
            success: function(data) {
                resolve(data);
            }
        });
    })
}
function xieruTable(data){
    console.log(data);
    var html = data.product.map(function(item,index){
        return `
            <tr>
                <td>${index+1}</td>
                <td>${item.username}</td>
                <td>${item.password}</td>
                <td>${item.age}</td>
                <td>${item.sex}</td>
                <td>${item.tel}</td>
                <td>${item.txt}</td>
            </tr>
        `
    }).join("")
    $("#tbody").html(html);
}
home().then(xieruTable)
var cookie=$.cookie('username');
console.log(cookie);
$(".nav_r").html(
    `<p>您好：${cookie}</p>
        <ul class="nav_b">
            <li class="nav_b1"><a>我的信息</a></li>
            <li class="nav_b2"><a>注销</a></li>
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