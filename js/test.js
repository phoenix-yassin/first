(function(window, undefined) {
  'use strict';
/**
 * balabalaXXXX
 */
  window.jQuery = window.$ = jQuery;
})(window);

/**
 * 在jQuery原型上绑定的方法相当于静态方法;在jQuery上绑定的方法相当于成员方法
 */
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/; //空格的匹配规则

$.ech = function(obj, callback, args) {
  var i = 0,
      value;
  for(i in obj){
    value = callback.apply(obj[i], i, args);
    if(value === false){
      break;
    }
  }
  return obj;
}

/**
 * 返回!inv的值
 */
$.grep = function(elems , cb, inv) {
  var i = 0,
      ret = [],
      retVal,
      length = elems.length;
            inv = !!inv;
  for(;i < length; i++){
    retVal = !!cb(elems[i], i);
    if(retVal !== inv){
      ret.push(elems);
    }
  }
  return ret;
}

/**
 * map: arg is for internal useage only
 */
$.map = function(elems, cb, arg) {
  var i = 0,
      length = elems.length,
      ret = [],
      val,
      isArray = isArrayLike(elems);
  if(isArray){
    for(;i < length; i++){
      val = cb(elems[i], i, arg);
      if(val != null){
        ret[ret.length] = val;
      }

    }
  }else{
    for(i in elems){
      val = cb(elems[i], i, arg);
      if(val != null){
        ret[ret.length] = val;
      }
    }
  }
  return [].concat.apply([], ret);
}

/**
 * 此处用到了一种技巧确定函数执行的上下文
 * 匿名函数+call,用匿名函数传递参数,用call改变上下文和接收参数
 */
$.globalEval = function(data){
  if(data && jQuery.trim(data)){
    (window.execSript || function(data){
      window['eval'].call(window,data)
    })(data);
  }
}

/**
 * [nodeName description]
 * @param  {[type]} elem [description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
$.nodeName = function(elem, name){
  return elem.nodename && elem.nodename.toLowerCase() === name;
}

/**
 *
 */
jQuery.extend = jQuery.fn.extend = function () {

  var target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      source, copy, copyIsArray, clone, name, options,
      deep = false;
//如果第一个参数是deep的参数, 那么第二个参数是目标,后面的参数是源
  if(typeof taget === 'boolean'){
    deep = target;
    target = arguments[1] || {}
    i = 2;
  }
//如果目标不是对象类型
  if(typeof target !== 'object' && !jQuery.isFunction(target)){
    target = {};
  }
  if(length === i){
    target = this;
    --i;
  }

  for(; i < length; i++ ){//
    if( (options = arguments[i])!= null){
      for(name in options){
        src = target[name];
        copy = options[name];

        if(target === copy){
          continue;
        }

        if(deep && (jQuery.isPlainObject(copy) || (jQuery.isArray(copy)))){
          if(copyIsArray){
            copyIsArray = false;
            clone = src && jQuery.isArray(src)? src:[];
          }else{
            clone = src && jQuery.isPlain(src)? src : {};
          }
          target[ name ] = jQuery.extend( deep, clone, copy );
        }elseif(copy !== undefined){
          target[name] = copy;
        }
      }
    }

  }
  return target;
}