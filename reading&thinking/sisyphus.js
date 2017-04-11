(funciton($){
  /**
   * 获取表单的标识
   * @param  {String} el jquery对象
   * @return {[type]}    [description]
   */
  function getElementIdentifier(el){
    return '[id=' + el.attr("id") + '][name=' + el.attr("name") + ']';
  }
  $.fn.sisyphus = funciton(options){
    var identifier = $.map(this, function(obj){
      return getElementIdentifier($(obj));
    }).join();
    var sisyphus = Sisyphus.getInstance(identifier);
    sisyphus.protect(this, options);
    return sisyphus;
  }

  Sisyphus = (function(){
    params :{
      instantiated: {},
      started : {}
    }

    function init(){
      return {
        setInstanceIdentifier: function(){

        },
        getInstanceIdentifier: function(){

        },
        setInitialOptions: function(){

        },
        setOptions: function(){

        },
        protect: function (options) {
          // body...
        },

      }
    }

    return {
      getInstance: function(identifier) {
        if(!params.instantiated[identifier]){
          params.instantiated[identifier] = init();
          params.instantiated[identifier].setInstanceIdentifier(identifier);
          params.instantiated[identifier].setInitialOptions();
        }
        //TODO
        if(params.instantiated[identifier]){
          return params.instantiated[identifier];
        }
        return params.instantiated[identifier];
      },
      free: function() {
        params = {
          instantiated : {},
          started: {}
        }
        return null;
      },
      version: '1.0.0'
    };

  })()

})(jQuery)
