import {fixture, html} from '@open-wc/testing-helpers';
import '../../vaadin-element.js';

describe('sample test', function() {
  var element;

  beforeEach(async() => {
    element = await fixture(html`<vaadin-element></vaadin-element>`);
  });

  it('should be defined in custom element registry', () => {
    expect(customElements.get('vaadin-element')).to.be.ok;
  });

  it('should have a valid version number', () => {
    expect(element.constructor.version).to.match(/^(\d+\.)?(\d+\.)?(\d+)(-(alpha|beta)\d+)?$/);
  });
});
