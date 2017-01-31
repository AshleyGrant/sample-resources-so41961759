var _dec, _dec2, _class;



import { inject, Optional } from 'aurelia-dependency-injection';
import { customAttribute, Animator } from 'aurelia-templating';
import { DOM } from 'aurelia-pal';

export var MyShow = (_dec = customAttribute('my-show'), _dec2 = inject(DOM.Element, Animator, Optional.of(DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
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