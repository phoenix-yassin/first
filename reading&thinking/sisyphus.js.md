sisyphus.js.md

## introduction

* Gmail-like client-side drafts and bit more. Plugin developed to save html forms data to LocalStorage to restore them after browser crashes, tabs closings and other disasters.

* 类似于Gmail客户端的草稿自动保存. 在浏览器奔溃,标签官兵以及其他异常, 插件可以将html表单能够保存到localstorage, 并回复.

## code framework

1. 在自执行函数中, 用jquery扩展对象的方法挂载插件
```
(funciton($){
  $.fn.sisyphus = funciton(){
    var sisyphus; //TODO 生成实例
    return sisyphus;
  }
})(jQuery)

```
1. 用工厂模式,生成sisyphus实例,并初始化
```
var sisyphus = Sisyphus.getInstance( identifier );
sisyphus.protect( this, options );
```
1. 实例化过程
    1. 注册,并获取初始化对象的合集
    ```
    params.instantiated[ identifier ] = init();
    ```
    通过上面的代码, 注册并获取到对象(对象中包含了管理对象的暴露接口)
    2. 用对象暴露的接口生成对象,并实例化对象
    ```
    params.instantiated[ identifier ].setInstanceIdentifier( identifier );
    params.instantiated[ identifier ].setInitialOptions();
    ```
1. 初始化过程中的重要方法:表单元素的初始化过程

_**proctect--> savaAllData**_
以下是 saveAllData 的核心代码:
```
self.targets.each( function() {//处理所有的表单
  var targetFormIdAndName = getElementIdentifier( $( this ) );
  var multiCheckboxCache = {};

  self.findFieldsToProtect( $( this) ).each( function() {
  //处理一个表单里面的所有元素
    var field = $( this );
    if ( $.inArray( this, self.options.excludeFields ) !== -1 ||
      ( field.attr( "name" ) === undefined && field.attr( "id" ) === undefined ) ) {
        return true;
    }
    var prefix = (self.options.locationBased ? self.href : "") +
    targetFormIdAndName +
    getElementIdentifier( field ) + self.options.customKeySuffix;
    var value = field.val();
    //针对不同的表单元素进行处理sample_formsample_formfruit[]
    //有的多选checkbox的name属性fruit[]
    if ( field.is(":checkbox") ) {
      var name = field.attr( "name" );
      if ( name !== undefined && name.indexOf( "[" ) !== -1 ) {//
        if ( multiCheckboxCache[ name ] === true ) {
          return;
        }
        value = [];
        $( "[name='" + name +"']:checked" ).each( function() {
          value.push( $( this ).val() );
        } );
        multiCheckboxCache[ name ] = true;
      } else {
        value = field.is( ":checked" );
      }
      self.saveToBrowserStorage( prefix, value, false );
    } else if ( field.is( ":radio" ) ) {
      if ( field.is( ":checked" ) ) {
        value = field.val();
        self.saveToBrowserStorage( prefix, value, false );
      }
    } else {
        self.saveToBrowserStorage( prefix, value, false );
    }
  } );
} );
self.options.onSave.call( self );//执行回调函数
```

