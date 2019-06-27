$(function(){
  var $uname=$("input[name=uname]");
  var $upwd=$("input[name=upwd]");
  $uname.parent().click(function(){
    $("#s1").css("left",-62);
  });
  $upwd.focus(function(){
    $("#s2").css("left",-62);
  }).parent().click(function(){
    $("#s2").css("left",-62);
  });
  $(".login-btn button").click(function(){
    $.ajax({
      url:`http://localhost:8080/user/login?uname=${$uname.val()}&upwd=${$upwd.val()}`,
      type:"get",
      dataType:"json",
      success:function(result){
        if(result==1){
          alert("登录成功");
          location.href="http://127.0.0.1:5500/public/index.html";
        }else{
          alert("用户名密码错误");
        }
      }
    });
  });
})