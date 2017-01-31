'use strict';

System.register(['aurelia-templating'], function (_export, _context) {
  "use strict";

  var bindable, customElement, inlineView, _dec, _class, _desc, _value, _class2, _descriptor, MyEcho;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

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

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
      inlineView = _aureliaTemplating.inlineView;
    }],
    execute: function () {
      _export('MyEcho', MyEcho = (_dec = inlineView('\n<template>\n  <h1>${say}</h1>\n  <h2>${say}</h2>\n  <h3>${say}</h3>\n  <h4>${say}</h4>\n</template>\n'), _dec(_class = (_class2 = function MyEcho() {
        

        _initDefineProp(this, 'say', _descriptor, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'say', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _export('MyEcho', MyEcho);
    }
  };
});