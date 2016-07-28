## 解决sublimeText3无法安装插件问题--There are no packages available for installation ##

>据说是IPv6的原因，如果我们的Intent服务提供者（ISP）不支持IPv6就会引发上述错误，原文如下：
This error is happened with IPv6 problem. If your Internet Service Provider (ISP) does not support for IPv6 you got this error.

![package control error](http://img.blog.csdn.net/20150707085034261?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center 'pic 1')

### 解决办法（windows平台）

上面链接中给出的解决办法原文如下：
>Step 1:
>>Get IPv4 address of sublime.wbond.net
Try this command line on terminal ping sublime.wbond.net
Now you can get IPv4 address of sublime.wbond.net.

>Step 2:
>>Now open hosts file from C:\Windows\system32\drivers\etc\ folder and add this line (replcae {IPv4 address})
{IPv4 address} sublime.wbond.net.
All is ok. Let's play with Package controller.

从上面的描述可以知道首先需要获取sublime.wbond.net网站的IPv4地址，然后修改hosts文件就行了。
如果在终端使用ping命令时遇到如下错误

![err img][err img]

可以到这里（在线Ping工具）查寻其IP地址：[http://serve.netsh.org/pub/ping.php](http://serve.netsh.org/pub/ping.php '在线ping工具')

然后修改hosts文件就可以了，在hosts文件中添加一行，其中IP是ping命令得到的，如下所示：
![ping host](http://img.blog.csdn.net/20141101110103734?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvemh5aDE5ODY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center "ping host")
修改hosts文件后，请刷新dns配置，用以下命令：
> ipconfig /flushdns


[err img]: http://img.blog.csdn.net/20141101105818912?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvemh5aDE5ODY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center
________________________

