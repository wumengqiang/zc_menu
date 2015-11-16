"user strict";
var area = {
    east : [
        {id:"shanghai",name:"上海",url:"",img:"./img/shanghai.png"},
        {id:"hangzhou",name:"杭州",url:"",img:"./img/hangzhou.png"},
        {id:"nanjing", name:"南京",url:"",img:"./img/nanjing.png"},
        {id:"suzhou",  name:"苏州",url:"",img:"./img/suzhou.png"},
    ],
    south : [
        {id:"guangzhou",name:"广州",url:"",img:"./img/guangzhou.png"},
        {id:"xiamen",   name:"厦门",url:"",img:"./img/xiamen.png"},
        {id:"haikou",   name:"海口",url:"",img:"./img/haikou.png"},
        {id:"shenzhen", name:"深圳",url:"",img:"./img/shenzhen.png"},
    ],
    west : [
        {id:"chongqing",name:"重庆",url:"",img:"./img/chongqing.png"},
        {id:"chengdu",name:"成都",url:"",img:"./img/chengdu.png"},
        {id:"xian",name:"西安",url:"",img:"./img/xian.png"},
    ],
    north : [
        {id:"beijing",name:"北京",url:"",img:"./img/beijing.png"},
        {id:"tianjin",name:"天津",url:"",img:"./img/tianjin.png"},
        {id:"zhengzhou",name:"郑州",url:"",img:"./img/zhengzhou.png"},
    ],
    middle : [
        {id:"wuhan",name:"武汉",url:"",img:"./img/wuhan.png"},
        {id:"changsha",name:"长沙",url:"",img:"./img/changsha.png"},
        {id:"nanchang",name:"南昌",url:"",img:"./img/nanchang.png"},
          
    ],
};

//fastclick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
    }, false);
}

function load(menuName){
    menuName = menuName || "north";  
    var cities  = area[menuName];
    var menu = document.getElementsByClassName("active")[0];
    menu.className = "item";
    menu = document.getElementById(menuName);
    menu.className = "item active";
    var target  = document.getElementsByClassName("content")[0];
    var content = "";
    for(var i = 0;i< cities.length ;i++){
       content += ('<div onclick="redirectTo('+cities[i].url+')" class="city"><div class="img" style="background-image:url(\''+cities[i].img+'\') "></div><span>'+cities[i].name+'</span><img class="arrow" src="./img/arrow.png"/></div>');
    }
    target.innerHTML = content;
}
function redirectTo(url){
    if(url){
        window.location = url;
    }
}
