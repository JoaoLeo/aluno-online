const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://127.0.0.1:5001',
    specPattern: 'test/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false
  },
})
