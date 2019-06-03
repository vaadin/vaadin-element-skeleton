import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class ElementStylingDemos extends DemoReadyEventEmitter(PolymerElement) {
  static get is() {
    return 'element-styling-demos';
  }
  static get template() {
    return html`
      <style include="vaadin-component-demo-shared-styles">
        :host {
          display: block;
        }
      </style>
    `;
  }
}

customElements.define(ElementStylingDemos.is, ElementStylingDemos);
