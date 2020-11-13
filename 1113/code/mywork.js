function fun(a) {
    var b = 0;
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            b++;
        }
    }
    return b;
}
//onmessage      当主线程向子线程 传输信息之后   这个事件的回调函数 就会触发
//  我们动过事件对象上的一个属性 来获取主线程post过来的数据   event.data
self.onmessage = function (event) {
   var result = fun(event.data);
   self.postMessage(result);

}