const path = require('path');
const customLaunchers = require('./test/karma-browsers.json');

module.exports = function(config) {
  config.set({
    singleRun: true,
    customLaunchers: customLaunchers,
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      {
        pattern: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
        watched: false
      },
      'test/unit/index.js'
    ],
    preprocessors: {
      'test/unit/index.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: path.join(__dirname, 'coverage'),
      combineBrowserReports: true,
      skipFilesWithNoCoverage: true,
      thresholds: {
        global: {
          statements: 90,
          lines: 90,
          branches: 90,
          functions: 90
        }
      }
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      },
      chai: {
        includeStack: true
      }
    },

    browserDisconnectTimeout: 180000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 180000,
    captureTimeout: 180000,
    concurrency: 3,

    sauceLabs: {
      testName: 'vaadin-element unit tests',
      recordVideo: false,
      recordScreenshots: false,
      idleTimeout: 600,
      commandTimeout: 600,
      maxDuration: 5400,
    },

    webpack: {
      devtool: 'inline-source-map',
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules\/(?!(@webcomponents\/shadycss|lit-html|lit-element|@polymer|@vaadin)\/).*/,
            options: {
              cacheDirectory: true
            }
          },
          {
            test: /\.js$/,
            loader: 'istanbul-instrumenter-loader',
            enforce: 'post',
            include: /src|theme/,
            exclude: /node_modules|\.test\.js$/,
            options: {
              esModules: true
            }
          }
        ]
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    }
  });

  const platformMap = {
    local: [
      'chrome_headless',
      'firefox_headless'
    ],
    sauce: [
      'sl_safari_12',
      'sl_edge_18',
      'sl_ios_10',
      'sl_ios_12'
    ]
  };

  config.browsers = platformMap[process.env['TEST_PLATFORM'] === 'sauce' ? 'sauce' : 'local'];
};
