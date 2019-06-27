(function(){
//1.搜索框的顶部动态下拉
//滚轮监听
window.onscroll=function(){
  //获取当前滚动条离顶部的距离
  var target = document.documentElement.scrollTop;

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
})()