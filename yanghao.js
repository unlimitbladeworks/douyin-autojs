//手动打开抖音主页，再执行脚本
width = device.width;
height = device.height;
var x = width / 2;
var y = height / 2;
console.log("屏幕分辨率为%s * %s", width, height);
setScreenMetrics(device.width, device.height);

function go(){
    var i = 0;
    while(i < 100) {
       var t= random(4000,12000);
       toast(t+"s sleep");
       sleep(t);
       //随机双击
       if (i === 10%random(2,5)){
           click(x,y);
           sleep(50);
           click(x,y);
           sleep(50);
       };
       swipe(x, y, x, 0, 300);
   };
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};    

go();