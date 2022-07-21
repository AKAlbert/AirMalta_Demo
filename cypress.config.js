const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://airmalta.com/en',
    responseTimeout: 30000,
    requestTimeout: 30000,
    defaultCommandTimeout: 30000,
    watchForFileChanges: false,
    waitForAnimations: true,
    pageLoadTimeout: 50000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
});
