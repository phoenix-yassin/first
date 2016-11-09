# freemarker 基础教程

### freemarker模板文件主要有一下四个部分组成:

* 文本: 直接输出部分;
* 注释: <#-- balabala --> 内容不会输出到页面
* 差值: ${balabala} 或 #{balalbala} 其输出是 balabala数据的值
* FTL指令: freemarker指令

### 下面是一个freemarker模板的例子,包含上述四部分:
```
<html><br> 
<head><br> 
<title>Welcome!</title><br> 
</head><br> 
<body><br> 
<#-- 注释部分 --><br> 
<#-- 下面使用插值 --> 
<h1>Welcome ${user} !</h1><br> 
<p>We have these animals:<br> 
<u1><br> 
<#-- 使用FTL指令 --> 
<#list animals as being><br> 
   <li>${being.name} for ${being.price} Euros<br> 
</#list><br> 
<u1><br> 
</body><br> 
</html> 
```

## freemarker 指令
freemarker 指令类似html标签

- 开始标签与结束标签: <#directive-name parameter></#directive-name parameter>
- 空标签:<#direcitve-name />
注意: 如果是用户自定义指令, 而不是系统指令,应该用@代替

## freemarker 插值
FreeMarker的插值有如下两种类型:1,通用插值${expr};  2,数字格式化插值:#{expr}或#{expr;format}  
* 通用插值 

* 数字格式化插值 
