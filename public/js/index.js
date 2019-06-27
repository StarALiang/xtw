window.onload = function () {
//1.轮播
(function(){
  var lunbo = document.querySelector('.lunbo');
  var lunbo_imgs = document.querySelectorAll('.lunbo_li');
  var lunbo_tab_lis = document.querySelectorAll('.lunbo_tab li');
  var prev = document.querySelector('.lunbo_prev');
  var next = prev.nextElementSibling;
  var index = 1;
  var interval = 4000;
  //图片显示控制
  function animate(index){
    for (var i=0;i<lunbo_imgs.length;i++){
      lunbo_imgs[i].style.zIndex='0';
    }
    lunbo_imgs[index-1].style.zIndex='1';
  } 
  //底部按钮控制
  function showButton(index){
    for (var i=0;i < lunbo_tab_lis.length;i++) {
      lunbo_tab_lis[i].className=''
    };
    lunbo_tab_lis[index-1].className='active';
  }
  //定时器
  function play() {
    timer = setTimeout(function () {
      next.onclick();
      play();
    }, interval);
  }
  function stop() {
    clearTimeout(timer);
  };
  //左右箭头事件绑定
  prev.onclick=function(){
    if (index===1){
      index = 3;
    }else{
      index-=1
    }
    animate (index);
    showButton(index);
  }
  next.onclick=function(){
    if (index===3){
      index = 1;
    }else{
      index+=1
    }
    animate (index);
    showButton(index);
  }
  //底部按钮事件绑定
  for (var i = 0; i < lunbo_tab_lis.length; i++) {
    //绑定每个按钮的下标所对应的位置
    lunbo_tab_lis[i].coo=i+1;
    //绑定点击当前按钮的事件
    lunbo_tab_lis[i].onclick=function(){
      if(this.className == 'active') {
        return;
      }
      index=parseInt(this.coo);
      animate (index);
      showButton(index);
    }
  };
  lunbo.onmouseover=stop;
  lunbo.onmouseout=play;
  play();
})()
//2.超级单品倒计时
  //获取界面设置的时间
  var time_hour = document.querySelector('.djs_time .time_hour');
  var time_minit = document.querySelector('.djs_time .time_minit');
  var time_second = document.querySelector('.djs_time .time_second');
  function countDown(times){
    var timer=setInterval(function(){
      var hour=0,minute=0,second=0;//时间默认值
      if(times > 0){
        hour = Math.floor(times / (60 * 60));
        minute = Math.floor(times / 60) - (hour * 60);
        second = Math.floor(times) -  (hour * 60 * 60) - (minute * 60);
      }
      //当数值小于个位数时，数值前加0
      if (hour <= 9) hour = '0' + hour;
      if (minute <= 9) minute = '0' + minute;
      if (second <= 9) second = '0' + second;
      //绑定到界面
      time_hour.innerHTML=hour;
      time_minit.innerHTML=minute;
      time_second.innerHTML=second;
      times--;
    },1000);
    if(times<=0){
      clearInterval(timer);
    }
  }
  var times=parseInt(time_hour.innerHTML*3600)+parseInt(time_minit.innerHTML*60)+parseInt(time_second.innerHTML);
  countDown(times);
//3.超级单品侧边栏定位监听
  var happy_summer=document.querySelector('.happy_summer');
  //函数封装
  var mTop=function(){
    //获取当前滚动条离顶部的距离
    var target = document.documentElement.scrollTop;
    //判断当前位置距顶部的距离，以改变定位方式
    if(target>613){
      happy_summer.style.position='fixed';
      happy_summer.style.top='156px';
    }else{
      happy_summer.style.position='absolute';
      happy_summer.style.top='0';
    }
//4.回顶部按钮监听
    var mTop=document.querySelector('.happy_summer .h_zd');
    //按钮显示与隐藏
    if(target>2300){
      mTop.style.display='block';
    }else{
      mTop.style.display='none';
    }
    //回顶部事件绑定
    mTop.onclick = function () {
      // 防止还在回顶部的过程中重复设置定时器
      // 需要先清除定时器
      clearInterval(timer);
      // 获取当前屏幕滚动位置
      var target = document.documentElement.scrollTop || document.body.scrollTop;
      var timer = setInterval(function () {
        target -= target / 35;
        window.scrollTo(0, target);
        if (target < 1) {
          clearInterval(timer);
        }
      }, 8);
    }
  }
  //加载时调用
  mTop();
  //滚轮监听
  window.onscroll=function(){
    //时刻监听调用回顶部按钮
    mTop();
//5.搜索框的顶部动态下拉
    var target = document.documentElement.scrollTop;
    var hd_search=document.querySelector('.hd_header_right').firstElementChild;
    var hd_logo=document.querySelector('.hd_fixed_logo');
    var search_imgs=document.querySelectorAll('.hd_search_btn img');
    //判断当前位置距顶部的距离，以改变定位方式
    if(target>700){
      hd_search.className='hd_search_fixed';
      hd_search.style.top='0';
      hd_logo.style.display='block';
      search_imgs[0].style.display='none';
      search_imgs[1].style.display='block';
    }else{
      hd_search.className='hd_head_search';
      hd_logo.style.display='none';
      search_imgs[0].style.display='block';
      search_imgs[1].style.display='none';
    }
  }
};