export default defineNuxtConfig({
  modules: [
    "../src/module"
  ],
  analyticsData: {
    cacheTimeout: 15 * 60,
    credentialsFile: "./example/service-account.json",
    propertyId: "343159656",
    filteredPaths: {
      exact: ["/references"],
      // Filter any first-level paths (i.e. "/blog" "/projects" "/subscribe/")
      regEx: [`^/(\\w+)?\\/?$`]
    },
    removeStrings: {
      exact: [` - Larry Williamson`],
      regEx: [` - .* - Larry Williamson`]
    },
    parameters: {
        "popular": {
            startDate: "1990-01-01",
        }
    }
  }
})


