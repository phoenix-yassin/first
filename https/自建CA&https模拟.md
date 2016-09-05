# 自建CA&https模拟 #

### 文以两台服务器，分别扮演CA及Web网站的角色，详细论述自建CA搭建加密网站的过程。

### 实验环境：

> * CA: OS:Centos6.6 IP:172.16.10.10 主机名称： ca.test.net
* Web Server: OS:Centos7.2 IP:172.16.20.20 主机名称： web.test.net

（本文主要描述如何搭建https的网站，因而拟定web server已建好名为web.test.net的虚拟主机站点）

### 整个过程大体可分为：

##### （1） 为服务器申请数字证书

*  a. 创建私有CA
*  b. 在web服务器上创建证书签署请求
*  c. CA签发证书

##### （2） 配置httpd/nginx支持使用ssl,支持使用从CA签发的证书

##### （3） 测试主机https访问，完成SSL服务器搭建

##### [Multiple Names on One Certificate] (http://apetec.com/support/GenerateSAN-CSR.htm)
