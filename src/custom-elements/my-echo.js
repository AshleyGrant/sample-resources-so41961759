import {bindable, customElement, inlineView} from 'aurelia-templating';

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
