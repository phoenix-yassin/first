#站点启用https#

##图解 HTTPS 通信过程

##HTTPS其实是有两部分组成：HTTP + SSL / TLS，也就是在HTTP上又加了一层处理加密信息的模块
。服务端和客户端的信息传输都会通过TLS进行加密，所以传输的数据都是加密后的数据。具体是如何进行加密，解密，验证的，且看下图:
![HTTPS 通信过程](http://cdn.liqwei.com/www/201211/20121130144420002.png '')

1. 客户端发起HTTPS请求

  用户在浏览器里输入一个https网址，然后连接到server的443端口。
2. 服务端配置

  已经准备好了一套数字证书，可以自己制作，也可以向组织申请。（自己制作的证书需要客户端验证才可以继续访问，而使用受信任的公司申请的证书
  则不会弹出提示框或者提示信息）
3. 服务器端向客户端传送证书

  这个证书就是公钥了，包含颁发机构、有效期等信息
4. 客户端解析证书
  
  首先检查收到的公钥的有效性，如果发现异常，会弹框或者输出信息，提示公钥存在问题； 其次， 如果证书没有问题，
  就用公钥对一个随机值进行加密。
5. 客户端向服务器端传送加密信息



  

##SSL & TSL
+ ssl(secure sockets layer)
+ TSL(transport secure layer)

##SSL协议的工作流程

> 服务器认证阶段：

1）客户端向服务器发送一个开始信息“Hello”以便开始一个新的会话连接；

2）服务器根据客户的信息确定是否需要生成新的主密钥，如需要则服务器在响应客户的“Hello”信息时将包含生成主密钥所需的信息；

3）客户根据收到的服务器响应信息，产生一个主密钥，并用服务器的公开密钥加密后传给服务器；

4）服务器恢复该主密钥，并返回给客户一个用主密钥认证的信息，以此让客户认证服务器。


##对称加密 & 非对称加密
+ 对称加密：
+ 非对称加密 ： RSA，ECDHE（ECDHE 密钥交换默认都是指 ECDHE_RSA），DH，DHE，RSA 


## Mixed content
+ https中的http资源称，不通的浏览器处理规则不一样。
+ mixed content规范（现代浏览器都遵守了该规范），将mixed content 分为：optionally-blockable和blockable资源：optionally-blocked资源--危险性
小的资源，包括多媒体资源，prefetched资源；blockable资源--除了optionally-blocked资源，其余的都是blockable。现代浏览器默认对于js、css等
http资源，将会不加载，在控制台输出错误信息。
+ 早期的ie请求Mixed content 时，会弹出“是否之查看安全传送的网页内容？”的模特对话框，选择“是”，此类资源不加载；反之，所有的资源的都会加载.
+ 比较新的ie，用了比价人性化的处理方式。默认加载mixed content，对于optionally-blockable资源，会根据用户的选择加载。
+ 移动浏览器

##CSP( Content Security Policy)
> CSP，全称是 Content Security Policy，它有非常多的指令，用来实现各种各样与页面内容安全相关的功能。
这里只介绍两个与 HTTPS 相关的指令，更多内容可以看我之前写的《Content Security Policy Level 2 介绍》。
+ block-all-mixed-content
+ udgrade-insecure-requests

##HSTS（http strict transport security）

> 在网站全站 HTTPS 后，如果用户手动敲入网站的 HTTP 地址，或者从其它地方点击了网站的 HTTP 链接，
依赖于服务端 301/302 跳转才能使用 HTTPS 服务。而第一次的 HTTP 请求就有可能被劫持，导致请求无法到达服务器，
从而构成 HTTPS 降级劫持。(慢，不安全）
+ 301
+ 302重定向又称之为302代表暂时性转移(Temporarily Moved )

