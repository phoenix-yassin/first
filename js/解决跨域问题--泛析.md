[JavaScript 跨域漫游](http://www.cnblogs.com/HCJJ/p/6128457.html)


## 1. 跨域简介

* 跨域实际是浏览器基于安全策略做出的"同源策略限制";
* "同源策略"的基本规则: 如果 protocol host port 等, 若有一个不同, 浏览器会限制不同域之间的通信;
* 来自about:blank，javascript:和data:URLs中的内容，继承了将其载入的文档所指定的源，因为它们的URL本身未指定任何关于自身源的信息，所以也并不会跨域
* 同源策略的影响:
    * cookie, storage, indexDB无法读取
    * dom节点无法操作
    * ajax无法请求
* 解决方法
    * iframe:iframe的src资源不受同源策略限制
    * 协作(CORS,jsonp,ningx方向代理,websocket):需要前后端配合实现
    * 其他(古老的flash技术)

## 2. iframe + window.name
//TODO

## 3. iframe + postMessage

```
http://test.com/index.html

<div style="width:200px; float:left; "></div>
<div id="color">Frame Color</div>
<div> <iframe id="child" src="http://lslib.com/lslib.html"></iframe></div>
window.onload = function(){
  window.frame[0].postMessage('getColor', 'http://lslib.com/');
}
```

```
window.addEventListener('message',function(e){
    if(e.source!=window.parent) return;
    var color=container.style.backgroundColor;
    window.parent.postMessage(color,'*');
},false);
```

## 4. JSONP(javascript object notation with pandding)

* 客户端页面注册一个函数,名称为fn1
* script加载一个请求,`http://***/*.js?cb=fn1`
* 服务器接收到请求,把计算的结果当作param, 形成fn1(param)的一段js语法文档, 返回给客户端
* 客户端解析script标签, 执行返回的js文档,调用预先定义的fn1函数


## 5. CORS

* CORS(corss-origin resource sharing),W3C标准化的跨域方案
* 服务器协同
`java:`
```
response.setHeader("Access-Control-Allow-Origin", "*")
```

## 6. 反向代理
前端保持同域请求, 后台将请求代理成跨域的请求, 如以下nginx配置

```
server {
    listen       80;
    server_name  example.com;
    index        index.htm index.html;
    location /htmlrpt{
        proxy_pass      sample.com/htmlrpt; // 如果是 htmlrpt 目录下的资源，则转向 sample.com/htmlrpt 这个域名下请求。
        proxy_redirect  off;
        proxy_set_header        Host            $host;
        proxy_set_header        X-Real-IP       $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location /{
        root    D:\\workspace\\git\\src\\main\htmlrpt;
    }

}
```

## 6. WebSocket

```
var conn = new webSocket();
conn.onopen = function(){

}
conn.onmessage = function(){

}
conn.send('abafasdf');
conn.onerror = function(){

};
```
