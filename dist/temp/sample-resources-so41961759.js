'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyShow = exports.MyEcho = undefined;

var _dec, _class, _desc, _value, _class2, _descriptor, _dec2, _dec3, _class4;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaPal = require('aurelia-pal');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var MyEcho = exports.MyEcho = (_dec = (0, _aureliaTemplating.inlineView)('\n<template>\n  <h1>${say}</h1>\n  <h2>${say}</h2>\n  <h3>${say}</h3>\n  <h4>${say}</h4>\n</template>\n'), _dec(_class = (_class2 = function MyEcho() {
  _classCallCheck(this, MyEcho);

  _initDefineProp(this, 'say', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'say', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class2)) || _class);
var MyShow = exports.MyShow = (_dec2 = (0, _aureliaTemplating.customAttribute)('my-show'), _dec3 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, true)), _dec2(_class4 = _dec3(_class4 = function () {
  function MyShow(element, animator, domBoundary) {
    _classCallCheck(this, MyShow);

    this.element = element;
    this.animator = animator;
    this.domBoundary = domBoundary;
  }

  MyShow.prototype.created = function created() {
    injectAureliaHideStyleAtBoundary(this.domBoundary);
  };

  MyShow.prototype.valueChanged = function valueChanged(newValue) {
    if (newValue) {
      this.animator.removeClass(this.element, aureliaHideClassName);
    } else {
      this.animator.addClass(this.element, aureliaHideClassName);
    }
  };

  MyShow.prototype.bind = function bind(bindingContext) {
    this.valueChanged(this.value);
  };

  return MyShow;
}()) || _class4) || _class4);