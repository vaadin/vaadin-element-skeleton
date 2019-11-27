import { expect, fixture, html } from '@vaadin/vaadin-component-dev-dependencies/testing.js';
import { VaadinComponent } from '../../src/vaadin-component';

describe('vaadin-component', () => {
  let element: VaadinComponent;

  beforeEach(async () => {
    element = await fixture(html`
      <vaadin-component></vaadin-component>
    `);
  });

  describe('custom element definition', () => {
    let tagName: string;

    beforeEach(() => {
      tagName = element.tagName.toLowerCase();
    });

    it('should be defined in custom element registry', () => {
      expect(customElements.get(tagName)).to.be.ok;
      expect(element instanceof VaadinComponent).to.be.ok;
    });

    it('should have a valid static "is" getter', () => {
      expect(customElements.get(tagName).is).to.equal(tagName);
    });

    it('should have a valid version number', () => {
      expect(customElements.get(tagName).version).to.match(/^(\d+\.)?(\d+\.)?(\d+)(-(alpha|beta)\d+)?$/);
    });
  });
});
