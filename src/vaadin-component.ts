/**
 * @license
 * Copyright (c) 2019 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, css, customElement } from 'lit-element';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';

/**
 * `<vaadin-component>` is a Web Component.
 *
 * @element vaadin-component
 */
@customElement('vaadin-component')
class VaadinComponent extends VaadinElement {
  static get is() {
    return 'vaadin-component';
  }

  static get version() {
    return '0.1.0';
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

export { VaadinComponent };

declare global {
  interface HTMLElementTagNameMap {
    'vaadin-component': VaadinComponent;
  }
}
