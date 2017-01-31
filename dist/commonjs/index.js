'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sampleResourcesSo = require('./sample-resources-so41961759');

Object.keys(_sampleResourcesSo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sampleResourcesSo[key];
    }
  });
});