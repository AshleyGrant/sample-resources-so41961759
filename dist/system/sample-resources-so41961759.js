'use strict';

System.register(['./custom-attributes/my-show', './custom-elements/my-echo'], function (_export, _context) {
  "use strict";

  var MyShow, MyEcho;


  function configure(config) {
    config.globalResources('./custom-attributes/my-show', './custom-elements/my-echo');
  }

  return {
    setters: [function (_customAttributesMyShow) {
      MyShow = _customAttributesMyShow.MyShow;
    }, function (_customElementsMyEcho) {
      MyEcho = _customElementsMyEcho.MyEcho;
    }],
    execute: function () {
      _export('MyShow', MyShow);

      _export('MyEcho', MyEcho);
    }
  };
});