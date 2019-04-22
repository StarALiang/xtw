const express=require('express');
const userRouter=require('./routes/user.js');
const bodyParser=require('body-parser');
//创建web服务器
var server=express();
server.listen(8080);
//托管静态资源
server.use( express.static('public') );
//使用body-parser中间件
server.use( bodyParser.urlencoded({
  extended:false
}) );
//挂载路由器
server.use('/user',userRouter);