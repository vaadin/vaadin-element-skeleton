import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class ElementBasicDemos extends DemoReadyEventEmitter(PolymerElement) {
  static get is() {
    return 'element-basic-demos';
  }
  static get template() {
    return html`
      <style include="vaadin-component-demo-shared-styles">
        :host {
          display: block;
        }
      </style>


      <h3>Sample example</h3>
      <vaadin-demo-snippet id="element-basic-demos-sample-example">
        <template preserve-content>
          <vaadin-element>Foobar</vaadin-element>
          <!-- TODO: make it work with script tags -->
        </template>
      </vaadin-demo-snippet>
    `;
  }
}

customElements.define(ElementBasicDemos.is, ElementBasicDemos);
