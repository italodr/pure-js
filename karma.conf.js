// Karma configuration
// Generated on Wed Jan 10 2018 09:56:25 GMT+0100 (CET)
const plugins = [
  'istanbul-instrumenter-loader',
  'karma-babel-preprocessor',
  'karma-chai',
  'karma-chrome-launcher',
  'karma-phantomjs-launcher',
  'karma-coverage',
  'karma-coveralls',
  'karma-mocha',
  'karma-mocha-reporter',
  'karma-sinon-chai'
];
const coverageReporters = [{ type: 'text-summary' }];
const reporters = ['mocha', 'coverage'];

let browsers = ['PhantomJS', 'PhantomJSCustom'];
let customLaunchers = {
  'PhantomJSCustom': {
    base: 'PhantomJS',
    options: {
      windowName: 'purejs-window',
      settings: {
        webSecurityEnabled: false
      },
      viewportSize: {
        width: 1920,
        height: 1080
      },
      flags: ['--load-images=true'],
      debug: true
    }
  }
};

if (process.env.TRAVIS) {
  browsers = ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'];
  reporters.push('coveralls');
  coverageReporters.push({ type: 'lcov', dir: 'coverage' });
  customLaunchers = {
    ChromeHeadlessNoSandbox: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox']
    }
  };
} else {
  coverageReporters.push({ type: 'html', dir: 'coverage', subdir: '.' });
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai', 'chai'],
    files: [
      'lib/purejs.min.js',
      // 'test/cookies.spec.js',
      // 'test/debounce.spec.js',
      // 'test/events.spec.js',
      // 'test/forEach.spec.js',
      'test/scrollBehaviors.spec.js',
      // 'test/touchable.spec.js'
    ],
    preprocessors: {
      'lib/purejs.min.js': ['coverage'],
      'test/**/*.js': ['babel']
    },
    babelPreprocessor: {
      options: { presets: ['@babel/env'], sourceMap: 'inline' },
      filename(file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName(file) {
        return file.originalPath;
      }
    },
    reporters,
    coverageReporter: { reporters: coverageReporters },
    logLevel: config.LOG_ERROR,
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers,
    singleRun: true,
    concurrency: Infinity,
    client: {
      chai: {
        includeStack: true
      }
    },
    customLaunchers,
    plugins
  });
};
