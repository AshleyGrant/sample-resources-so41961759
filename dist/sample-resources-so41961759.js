import {bindable,customElement,inlineView,customAttribute,Animator} from 'aurelia-templating';
import {inject,Optional} from 'aurelia-dependency-injection';
import {DOM} from 'aurelia-pal';

@inlineView(`
<template>
  <h1>\${say}</h1>
  <h2>\${say}</h2>
  <h3>\${say}</h3>
  <h4>\${say}</h4>
</template>
`)
export class MyEcho {
  @bindable say = '';
}

/**
* Binding to conditionally show markup in the DOM based on the value.
* - different from "if" in that the markup is still added to the DOM, simply not shown.
*/
@customAttribute('my-show')
@inject(DOM.Element, Animator, Optional.of(DOM.boundary, true))
export class MyShow {
  /**
  * Creates a new instance of Show.
  * @param element Target element to conditionally show.
  * @param animator The animator that conditionally adds or removes the aurelia-hide css class.
  * @param domBoundary The DOM boundary. Used when the behavior appears within a component that utilizes the shadow DOM.
  */
  constructor(element, animator, domBoundary) {
    this.element = element;
    this.animator = animator;
    this.domBoundary = domBoundary;
  }

  /**
  * Invoked when the behavior is created.
  */
  created() {
    injectAureliaHideStyleAtBoundary(this.domBoundary);
  }

  /**
  * Invoked everytime the bound value changes.
  * @param newValue The new value.
  */
  valueChanged(newValue) {
    if (newValue) {
      this.animator.removeClass(this.element, aureliaHideClassName);
    } else {
      this.animator.addClass(this.element, aureliaHideClassName);
    }
  }

  /**
  * Binds the Show attribute.
  */
  bind(bindingContext) {
    this.valueChanged(this.value);
  }
}
