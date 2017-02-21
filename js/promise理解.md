#promise#
>Promise 对象用于异步计算. 一个Promise对象代表一个值, 该值可以在当前或未来可用, 或永远不可用.

##语法
```
new Promise(/* executor */ function(resolve, reject){...});
```
####参数
该函数带两个参数:resolve和reject. executor函数会被立刻调用, resolve和reject在 executor函数 执行中被调用, 当调用resolve时,会执行promise;当调用reject时,会拒绝promise.

##描述
promise是一个值代理, 在创建时结果可能未知.它允许你为异步操作结果"成功"或"失败"绑定方法.

promise有以下三个状态:

* pending:初始状态;
* fulfilled:操作被成功完成;
* rejected:操作失败;

pending状态的pomise对象可以通过一个值转换为fulfilled或者rejected状态.当状态发生装换时,对应的绑定方法会被立刻可以执行.
![promise状态转换图](https://mdn.mozillademos.org/files/8633/promises.png)


##例子1--ajax模拟
```javascript
function get(url) {
  return new Promise(resolve,reject){
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if(req.stats === 200){
        resolve(req.response);
      }else{
        reject(Error(req.statusText));
      }
    }
    req.onerror = function() {
      reject(Error('Network Err!'));
    }

    req.send();
  }
}


get('http://****/'),then(function(res) {
  console.log('success:' + res);
}, function(error) {
  console.log('failed:'  + error);
})
```

##例子2--setTimeout模拟
```
new Promise(function(resolve,reject) {
  setTimeout(function() {
    resolve(10)
  }, 10);
}).then(function(num) {console.log(num); return num*2})
  .then(function(num) {console.log(num); return num*2})
  .then(function(num) {console.log(num);} )
```

