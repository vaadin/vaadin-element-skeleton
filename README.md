[![Build Status](https://travis-ci.org/vaadin/vaadin-component-skeleton.svg?branch=master)](https://travis-ci.org/vaadin/vaadin-component-skeleton)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/vaadin-core-elements?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# &lt;vaadin-component&gt;

### [Live demo](https://cdn.vaadin.com/vaadin-core-elements/master/<vaadin-component>/demo/)

[&lt;vaadin-component&gt;](https://vaadin.com/elements/-/element/vaadin-component) is a [Polymer](http://polymer-project.org) element providing &lt;component-functionality&gt;, part of the [Vaadin Core Elements](https://vaadin.com/elements).

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-component-skeleton/master/screenshot.png" width="200" alt="Screenshot of vaadin-component">](https://vaadin.com/elements/-/element/vaadin-component)


## Contributing

1. Fork the <component-name> repository.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the <component-name> directory, run `npm install` to install dependencies.


## Running demos and tests in browser

1. Install [polyserve](https://www.npmjs.com/package/polyserve): `npm install -g polyserve`

1. When in the <component-name> directory, run `polyserve --open`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:8080/components/vaadin-date-picker/demo
  - http://127.0.0.1:8080/components/vaadin-date-picker/test


## Running tests from the command line

1. Install [web-component-tester](https://www.npmjs.com/package/web-component-tester): `npm install -g web-component-tester`

1. When in the <component-name> directory, run `wct` or `npm test`, browser will automatically open the component API documentation.


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `gulp lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## License

Apache License 2.0

