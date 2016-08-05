# CentOS yum  “Could not retrieve mirrorlist ” ---fixed
> [root@localhost ~]# yum -y install wget   （注：在下载wget命令并安装)

Could not retrieve mirrorlist http://mirrorlist.centos.org/?release=5&arch=i386&repo=os error was 
[Errno 4] IOError: <urlopen error (-3, '\xe5\x9f\x9f\xe5\x90\x8d\xe8\xa7\xa3\xe6\x9e\x90\xe6\x9a\x82\xe6\x97\xb6\xe5\xa4\xb1\xe8\xb4\xa5')>
Error: Cannot retrieve repository metadata (repomd.xml) for repository: base. Please verify its path and try again
>[root@localhost ~]# yum install gcc-c++

Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile 
Could not retrieve mirrorlist http://mirrorlist.centos.org/?release=5&arch=x86_64&repo=addons error was
[Errno 4] IOError: <urlopen error (-3, 'Temporary failure in name resolution')>
Error: Cannot find a valid baseurl for repo: addons

不管是用上面还是用下面那命令都会出现那错误
原因：没有配置resolv.conf
解决方法:
到/etc目录下配置resolv.conf加入nameserver IP,如：
* nameserver 8.8.8.8
* nameserver 8.8.4.4
* search localdomain

保存再次运行上面命令就可以。
