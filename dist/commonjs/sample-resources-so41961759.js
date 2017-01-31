'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyEcho = exports.MyShow = undefined;

var _myShow = require('./custom-attributes/my-show');

var _myEcho = require('./custom-elements/my-echo');

function configure(config) {
  config.globalResources('./custom-attributes/my-show', './custom-elements/my-echo');
}

exports.MyShow = _myShow.MyShow;
exports.MyEcho = _myEcho.MyEcho;