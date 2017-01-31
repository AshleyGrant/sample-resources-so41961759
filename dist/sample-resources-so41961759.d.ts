import {
  bindable,
  customElement,
  inlineView,
  customAttribute,
  Animator
} from 'aurelia-templating';
import {
  inject,
  Optional
} from 'aurelia-dependency-injection';
import {
  DOM
} from 'aurelia-pal';
export declare class MyEcho {
  say: any;
}

/**
* Binding to conditionally show markup in the DOM based on the value.
* - different from "if" in that the markup is still added to the DOM, simply not shown.
*/
export declare class MyShow {
  
  /**
    * Creates a new instance of Show.
    * @param element Target element to conditionally show.
    * @param animator The animator that conditionally adds or removes the aurelia-hide css class.
    * @param domBoundary The DOM boundary. Used when the behavior appears within a component that utilizes the shadow DOM.
    */
  constructor(element?: any, animator?: any, domBoundary?: any);
  
  /**
    * Invoked when the behavior is created.
    */
  created(): any;
  
  /**
    * Invoked everytime the bound value changes.
    * @param newValue The new value.
    */
  valueChanged(newValue?: any): any;
  
  /**
    * Binds the Show attribute.
    */
  bind(bindingContext?: any): any;
}