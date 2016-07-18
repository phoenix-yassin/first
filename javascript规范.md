#javascript规范#
>为规范前端开发代码，提高代码质量，特制定此文档，其中声明，安全和分号这三节是必须执行的，组件类必须遵循注释规范。

##声明##
* 变量声明必须加var关键字，严格控制作用域（按照user strict的要求）
* 建议使用驼峰式命名变量和函数，如：functionNameLikeThis, namespaceNameLikeThis
* 类名的首字母必须大写，后面的单词使用驼峰式命名，如：Widget，Comment，AutoComplete
* 私有变量名和方法名用下划线开头，如：var _funAdd,
* 常量定义单词全部大写，以下划线链接，如：DEV_URL
* 函数参数大于3个时，应该以对象的形式作为参数传递
* 禁止在代码块中声明函数，错误的范例：if(true){function foo(){}}
* 禁止用new来实例化**基本类型**，错误的范例：varx = new Boolean(false)
* 直接定义数组和对象，不使用new关键字，错误的范例：var a = new Array(); var o = new Object()
* 使用**单引号**定义字符串（记住咯 记住咯 记住咯）
* 文件名全部使用小写，文件名分隔符用**中划线**连接，版本连接符用实心点，合并文件的文件名连接符用下划线，如：cart-core.min.js和reset-1.0.1-util.1.0.8.css


##安全(用户输入、地址栏)##
1.  审查用户输入，如：从URL获取参数，使用跳转页面的referer,用于eval或DOM操作的用户数据；
2.  禁止使用iframe实现跨域回调
3.  警惕jquery Xss，禁止这样的写法： $(window.location.hash);
4.  禁止引用站外资源

##安全(用户输入、地址栏)##
>函数表达式（有别于函数声明，如：function x(){}）必须用分号结束，下面是错误的范例，第三行漏掉分号，后面的函数被当作参数传递给myMethod，导致解析错误：
var myMethod = function() {
  return 42;
}    
(function() {
  // 一个匿名函数，在这里会被错误解析当作参数调用导致报错
})();

##类型转换##
if('0'){} ---->这里认为是true
if('0' == true){}  --->这里认为是false


下列值在布尔表达式中结果为false：
null
undefined
'' //空字符串
0 //数字
而下面的为true：
'0' //字符串
[] //空数组
{} //空对象
还有一些难以区分的表达式，以下表达式结果全为true：
Boolean('0') == true
'0' != true
0 != null
0 == []
0 == false

Boolean(null) == false
null != true
null != false

Boolean(undefined) == false
undefined != true
undefined != false

Boolean([]) == true
[] != true
[] == false

Boolean({}) == true
{} != true
{} != false
