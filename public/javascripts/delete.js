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
            <tr id="${item._id}">
                <td>${index+1}</td>
                <td>${item.username}</td>
                <td>${item.password}</td>
                <td>${item.age}</td>
                <td>${item.sex}</td>
                <td>${item.tel}</td>
                <td>${item.txt}</td>
                <td ><button class="delete">&times;</button></td>
            </tr>
        `
    }).join("")
    $("#tbody").html(html);
        $("tr").click(function(e){
            if(e.target.className=="delete"){
                $.ajax({
                    url: 'http://localhost:3000/login/delete',
                    type: 'post',
                    data:{_id:this.id},
                    async:true,
                    success:function(data){
                    alert(data);
                    window.location.reload();
                    }
                })
            }else{
                return;
            }
        })
    
    
}

home().then(xieruTable)

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
