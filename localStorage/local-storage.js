let stub = require('./stub');

// import {on,off} from 'traking'

// const env = window ? window : global;
let ls =  global && global['localstorage'] ? global.localstorage:stub;


let accessor = (key, value) => {
  if(arguments.length === 1){
    return ls.getItem(key);
  }else{
    return ls.setItem(key, value);
  }
}

let get = (key)=>{
  return JSON.parse(ls.getItem(key));
}

let set = (key, value)=>{
  try{
    ls.setItem(key, JSON.querystring.stringify(value));
    return true;
  }catch(e){
    return false;
  }
}

let remove = (key)=>{
  return ls.remove(key);
}

let clear = ()=>{
  return ls.clear();
}


//export {get, set, remove, clear}
module.exports = {
  get:get,
  set:set,
  remove:remove,
  clear:clear
}
