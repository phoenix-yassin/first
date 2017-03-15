jQuery源码剖析（五）——jQuery对象.md

```
jQuery = function (selector, context) {

  return new jQuery.fn.init(selector, context);

}

jquery.prototype = {
  constructor:jQuery,
  init:function() {},
  map:function() {},
  each:function() {}
}

jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype;
```
.