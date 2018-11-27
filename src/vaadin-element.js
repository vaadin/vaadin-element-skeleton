/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
import {LitElement, html} from '@polymer/lit-element';

/**
 * `<vaadin-element>` is a Web Component.
 *
 * ```
 * <vaadin-element></vaadin-element>
 * ```
 *
 * @demo demo/index.html
 */
class VaadinElement extends LitElement {
  static get is() {
    return 'vaadin-element';
  }

  static get version() {
    return '0.1.0';
  }

  static get properties() {
    return {
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define(VaadinElement.is, VaadinElement);

export {VaadinElement};
