'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal'], function (_export, _context) {
  "use strict";

  var inject, Optional, customAttribute, Animator, DOM, _dec, _dec2, _class, MyShow;

  

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Optional = _aureliaDependencyInjection.Optional;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      Animator = _aureliaTemplating.Animator;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      _export('MyShow', MyShow = (_dec = customAttribute('my-show'), _dec2 = inject(DOM.Element, Animator, Optional.of(DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
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
      }()) || _class) || _class));

      _export('MyShow', MyShow);
    }
  };
});