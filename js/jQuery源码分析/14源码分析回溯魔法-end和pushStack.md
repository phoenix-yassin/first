14源码分析回溯魔法:end和pushStack.md

```
<ul class="first">
  <li class="foo">list item 1</li>
  <li>list item2</li>
  <li class="bar">list item3</li>
</ul>
<ul class="second">
  <li class="foo">list item 1</li>
  <li>list item2</li>
  <li class="bar">list item3</li>
</ul>
```

```
$('ul.first').find('.foo').css('background-color', 'red')
.end().find('.bar').css('background-color', 'green')

end: function() {
  return this.prevObject || this.constructor(null);
},
```
