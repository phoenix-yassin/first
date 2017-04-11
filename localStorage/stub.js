
let ms = {};

let getItem = (key)=>{
  return key in ms ? ms[key]:null;
}

let setItem = (key, val)=>{
  ms[key] = val;
  return true;
}

let removeItem = (key)=>{
  var isExisted = key in ms;
  if(isExisted){
    return delete ms[key];
  }
  return false;
}

let clear=()=>{
  ms = {};
  return true;
}

// export {getItem, setItem, removeItem, clear}
module.exports = {
  setItem: setItem,
  getItem: getItem,
  removeItem: removeItem,
  clear: clear
}
