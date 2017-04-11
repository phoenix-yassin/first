## 基础与api

#### React Refs
React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。

这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。
这样就可以确保在任何时间总是拿到正确的实例。
```apple js
let MyComponent = React.createClass({
    handleClick: function() {
      this.refs.myInput.focus();
    },
    render:function() {
      return (
          <div>
            <input type="text" ref="myInput"/>
            <button value="click me" onClick={this.handleClick}></button>
          </div>
      )
    }
})
ReactDom.render(
    <MyComponent/>,
    document.getElementById('root')
);
```