'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyShow = undefined;

var _dec, _dec2, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaPal = require('aurelia-pal');



var MyShow = exports.MyShow = (_dec = (0, _aureliaTemplating.customAttribute)('my-show'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
  function MyShow(element, animator, domBoundary) {
    

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
}()) || _class) || _class);