一、setTimeout中的延迟执行代码中的this永远都指向window

二、setTimeout(this.method, time)这种形式中的this，即上文中提到的第一个this，是根据上下文来判断的，默认为全局作用域，但不一定总是处于全局下，具体问题具体分析。

三、setTimeout(匿名函数, time)这种形式下，匿名函数中的变量也需要根据上下文来判断，具体问题具体分析。
