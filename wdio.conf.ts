// wdio.conf.ts
import { resolve } from 'path';

export const config: any = {
  runner: 'local',

  specs: ['./tests/**/*.spec.ts'],

  maxInstances: 1,

  logLevel: 'info',
  bail: 0,

  baseUrl: 'http://localhost',

  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [
    ['appium', {
      args: { relaxedSecurity: true },
      command: 'appium'
    }]
  ],

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  },

  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results' }]
  ],

  capabilities: [{
    platformName: 'iOS',
    platformVersion: '17.0',        
    deviceName: 'iPhone 14',        
    automationName: 'XCUITest',

    // Use simulator .app OR bundleId if already installed
    app: resolve(process.cwd(), 'apps/Telpark.app'),
    // bundleId: 'com.telpark.app',

    noReset: true,
    newCommandTimeout: 240
  }],

  before: function () {
    require('ts-node').register({ files: true });
  }
};

export default config;
