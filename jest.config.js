const config = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };
  
  export default config;