define(['exports', './sample-resources-so41961759'], function (exports, _sampleResourcesSo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_sampleResourcesSo).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _sampleResourcesSo[key];
      }
    });
  });
});