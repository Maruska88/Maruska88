const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "h5o8p8",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "svelte",
      bundler: "vite",
    },
  },
});
