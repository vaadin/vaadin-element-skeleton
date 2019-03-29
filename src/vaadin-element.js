/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
import {LitElement, html, css} from 'lit-element';

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

customElements.define(VaadinElement.is, VaadinElement);

export {VaadinElement};
