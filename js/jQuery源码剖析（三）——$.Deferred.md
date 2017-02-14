## jQuery源码剖析（三）——$.Deferred


### 什么是Deferred
如下面代码实现所示:
```
function read(path) {
  var defer = $.Deferred();
  setTimeout(function() {
    defer.resolve();
  },3000)
  return defer;
}

read('aaa.html')
  .done(function(content){console.log(content);})
  .fail(function(){console.log('读取失败');})
  .progress(function () {console.log('读取中...');})
```


### deferred对象的方法
* 生成Deferred对象
var deferred = $.Deferred();

* Deferred对象的状态

  1. pending:表示操作还没有完成
  2. resolved:表示操作成功
  3. rejected:表示操作失败

state方法来查看返回的状态:

  1. $.Deferred().state();
  1. $.Deferred().resolve().state();
  1. $.Deferred().rejected().state();

* 改变状态的方法
```
var deferred = $.Deferred();
defterred.resolve();
```

* 绑定回调函数
Deferred对象在状态改变时会触发回调函数
 resolved-->done; rejected-->fail; 永远都会触发 -->always



