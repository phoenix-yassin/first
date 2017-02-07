### Git 与其他系统 - Git 与 Subversion ###

[git 与 svn 协同](https://git-scm.com/book/zh/v1/Git-%E4%B8%8E%E5%85%B6%E4%BB%96%E7%B3%BB%E7%BB%9F-Git-%E4%B8%8E-Subversion )

[git svn clone error"Malformed XML: no element found" ](http://stackoverflow.com/questions/747075/how-to-git-svn-clone-the-last-n-revisions-from-a-subversion-repository)


* checkout a specific revision 

`git svn clone -rN svn://some/repo/branch/some-branch`
* enter it and get all commits since revision 'N'

    `cd some-branch`
    `git svn rebase`
* new ubuntu withou git-svn, so we should install it. But git-svn is dependent with  perlapi-5.14.2, 
      * apt-get install perl-base=5.14.2-6ubuntu2.5
      * http://packages.ubuntu.com/zh-cn/precise/perl-base
