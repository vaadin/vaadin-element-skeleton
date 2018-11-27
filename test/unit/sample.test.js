import '../../vaadin-element.js';

describe('sample test', function() {
  var element;

  beforeEach(async() => {
    element = document.createElement('vaadin-element');
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    element.parentNode && element.parentNode.removeChild(element);
  });

  it('should be defined in custom element registry', () => {
    expect(customElements.get('vaadin-element')).to.be.ok;
  });

  it('should have a valid version number', () => {
    expect(element.constructor.version).to.match(/^(\d+\.)?(\d+\.)?(\d+)(-(alpha|beta)\d+)?$/);
  });
});
