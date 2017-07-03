var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('http://127.0.0.1:3000/')
      .waitForElementVisible('body')
      .assert.title('Elastic Beanstalk test')
      .saveScreenshot(config.imgpath(browser) + 'a-screenshot-description.png')
      .saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz.png')
      .end();
  }
};
