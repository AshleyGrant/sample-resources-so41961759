define(['exports', './custom-attributes/my-show', './custom-elements/my-echo'], function (exports, _myShow, _myEcho) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MyEcho = exports.MyShow = undefined;


  function configure(config) {
    config.globalResources('./custom-attributes/my-show', './custom-elements/my-echo');
  }

  exports.MyShow = _myShow.MyShow;
  exports.MyEcho = _myEcho.MyEcho;
});