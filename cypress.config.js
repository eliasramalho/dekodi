const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5onxiq",
  e2e: {
    baseUrl: 'https://app.dev.dekodi.com.br',
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      
    },
  },
});
