/**
 * @license
 * Copyright (c) 2019 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import {ElementMixin} from '@vaadin/vaadin-element-mixin';
import {ThemableMixin} from '@vaadin/vaadin-themable-mixin';
import {Constructor, css, customElement, html, LitElement} from 'lit-element';

const Base: Constructor<HTMLElement> = ThemableMixin(ElementMixin(LitElement));

/**
 * `<vaadin-element>` is a Web Component.
 *
 * ```
 * <vaadin-element></vaadin-element>
 * ```
 *
 * @demo demo/index.html
 */
@customElement('vaadin-element')
export class VaadinElement extends Base {

  // Still needed by themable mixin (proto) :/
  static is = 'vaadin-element';

  static version = '0.1.0';

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([hidden]) {
      display: none !important;
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }
}
