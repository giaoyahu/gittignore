// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .end()
  }
}
