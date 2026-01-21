// cypress.config.js - Create in C:\Users\Marija\Documents\GitHub\Algebra-FE\
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Your app URL
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
});

describe("My First Test", () => {
  it("Visits the app", () => {
    cy.visit("/");
    cy.contains("Welcome").should("exist");
  });
});
