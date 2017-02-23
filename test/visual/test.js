gemini.suite('vaadin-element', function(rootSuite) {

  gemini.suite('default-tests', function(suite) {
    suite
      .setUrl('/default.html')
      .setCaptureElements('#default-tests')
      .before(function(actions, find) {
        this.button = find('button');
      })
      .capture('normal-button', {}, function(actions, find) {
        actions.wait(3000);
      })
      .capture('clicked-button', function(actions) {
        actions.mouseDown(this.button);
      });
  });

});
