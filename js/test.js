(function(window, undefined) {
  'use strict';





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
 * [globalEval description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
$.globalEval = function(data){
  if(data && jQuery.trim(data)){
    (window.execSript || function(data){
      window['eval'].call(window,data)
    })(data);
  }
}