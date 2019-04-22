const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
var router=express.Router();
//添加路由
//1.用户注册
router.post('/reg',(req,res)=>{
  var $uname=req.body.uname;
  var $upwd=req.body.upwd;
  var $phone=req.body.phone;
  //验证数据是否为空
  if(!$uname){
    res.send("用户名不存在");
	return;
  }
  if(!$upwd){
    res.send("登录密码不存在");
	return;
  }
  if(!$phone){
    res.send("手机号不存在");
	return;
  }
  //把数据插入数据库，执行SQL语句
  var sql="INSERT INTO xtw_user SET ?";
  pool.query(sql,[req.body],(err,result)=>{
    if(err) throw err;
	if(result.affectedRows>0){
	  res.send("1");
	}else{
	  res.send("0");
	}
  });
});
//2.用户登录
router.get('/login',(req,res)=>{
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	//验证数据是否为空
  if(!$uname){
	res.send("用户名不能为空");
	return;
  }
  if(!$upwd){
    res.send("密码不能为空");
	return;
  }
  //查询数据库是否存在数据，执行SQL语句
  var sql="SELECT uname,upwd FROM xtw_user WHERE uname=? AND upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send("1");
	}else{
	  res.send("0");
	}
  });
});


//导出路由器
module.exports=router;














