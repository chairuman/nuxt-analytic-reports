import NuxtAnalyticsData from "../../../src/module"

export default defineNuxtConfig({
  modules: [
    NuxtAnalyticsData
  ],
  analyticsData: {
    credentialsFile: "./example/service-account.json",
    propertyId: "343159656",
    filteredPaths: {
      exact: [
        "/tutorial",
      ],
      regEx: [
        `\/blog\/.*`
      ],
    }
  }
})
