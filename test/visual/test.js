gemini.suite('vaadin-element', function(rootSuite) {
  function wait(actions, find) {
    actions.wait(5000);
  }

  rootSuite
    .before(wait);

  ['lumo', 'material'].forEach(theme => {
    gemini.suite(`default-tests-${theme}`, function(suite) {
      suite
        .setUrl(`default.html?theme=${theme}`)
        .setCaptureElements('#default-tests')
        .capture(`vaadin-element`);
    });
  });

});
