gemini.suite('vaadin-element', function(rootSuite) {
  function wait(actions, find) {
    actions.wait(5000);
  }

  function goToAboutBlank(actions, find) {
    // Firefox stops responding on socket after a test, workaround:
    return actions.executeJS(function(window) {
      window.location.href = 'about:blank'; // just go away, please!
    });
  }

  rootSuite
    .before(wait)
    .after(goToAboutBlank);

  gemini.suite('default-tests', function(suite) {
    suite
      .setUrl('/default.html')
      .setCaptureElements('#default-tests')
      .before(function(actions, find) {
        this.button = find('button');
      })
      .capture('normal-button')
      .capture('clicked-button', function(actions) {
        actions.mouseDown(this.button);
      });
  });

});
