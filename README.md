# &lt;vaadin-component&gt;

[&lt;vaadin-component&gt;](https://vaadin.com/components/vaadin-component) is a Web Component providing &lt;component-functionality&gt;, part of the [Vaadin components](https://vaadin.com/components).

[Live Demo ↗](https://vaadin.com/components/vaadin-component/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-component/html-api)

[![npm version](https://badgen.net/npm/v/@vaadin/vaadin-component)](https://www.npmjs.com/package/@vaadin/vaadin-component)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vaadin/vaadin-component)
[![Build Status](https://travis-ci.org/vaadin/vaadin-element.svg?branch=master)](https://travis-ci.org/vaadin/vaadin-component)
[![Coverage Status](https://coveralls.io/repos/github/vaadin/vaadin-component/badge.svg?branch=master)](https://coveralls.io/github/vaadin/vaadin-component?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Published on Vaadin Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-component)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/vaadin-element-directory-urlidentifier.svg)](https://vaadin.com/directory/component/vaadinvaadin-component)

```html
<vaadin-component>
  ...
</vaadin-component>
```

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-component/master/screenshot.png" width="200" alt="Screenshot of vaadin-component">](https://vaadin.com/components/vaadin-component)


## Installation

Install `vaadin-component`:

```sh
npm i @vaadin/vaadin-component --save
```

Once installed, import it in your application:

```js
import '@vaadin/vaadin-component/vaadin-component.js';
```

## Getting started

Vaadin components use the Lumo theme by default.

To use the Material theme, import the correspondent file from the `theme/material` folder.

## Entry points

- The component with the Lumo theme:

  `theme/lumo/vaadin-component.js`

- The component with the Material theme:

  `theme/material/vaadin-component.js`

- Alias for `theme/lumo/vaadin-component.js`:

  `vaadin-component.js`


## Running demos and API docs in a browser

1. Fork the `vaadin-component` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vaadin-component` directory, run `npm install` to install dependencies.

1. Run `npm start`, browser will automatically open the component API documentation.

## Running tests from the command line

- When in the `vaadin-component` directory, run `npm test`

- To debug tests in the browser, run `npm run test:debug`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting TypeScript code. You can check if your code is
following our standards by running `npm run lint`, which will automatically lint all `.ts` files.


## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).


## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
