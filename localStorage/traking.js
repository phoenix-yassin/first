let listeners = {};
let listening = false;


let change = (e)=>{

  /*if(!e){
    e = global ? global.event: window.event;
  }*/
  if(!e){
    e = global.event;
  }
  var fn = listeners[e.key];
};

let listen = ()=>{
  if(global.addEventListener){
    global.addEventListener('storage', 'change', false);
  }else if(global.attachEvent){
    global.attachEvent('onstorage', change);
  }else{
    global.onstorage = change;
  }
}

let on = (type, fn)=>{
  if(listeners[type]){
    listeners[type].push(fn);
  }else{
    listeners[type] = [fn];
  }
  if(!listening){
    listening = true;
    listen();
  }

}

let off = (type, fn)=>{
  let fns = listeners[type];
  if(fns.length > 1){
    fns.splice(fns.indexOf(fn), 1);
  }else{
    listeners[type] = [];
  }
}

export {on,off}
