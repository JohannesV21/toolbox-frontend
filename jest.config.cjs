// module.exports = {
//   testEnvironment: "jsdom",
//   moduleNameMapper: {
//     "\\.(css|less|scss|sass)$": "identity-obj-proxy",
//   },
//   setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
// };

// jest.config.js
// export default {
//   testEnvironment: "jsdom",
//   moduleNameMapper: {
//     "\\.(css|less|scss|sass)$": "identity-obj-proxy",
//   },
//   setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
// };

// module.exports = {
//   collectCoverage: false,
//   collectCoverageFrom: ["src/**/*.{js,jsx}"],
//   coverageDirectory: "coverage",
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
// };

// export default {
//   testEnvironment: "jsdom",
//   moduleNameMapper: {
//     "\\.(css|less|scss|sass)$": "identity-obj-proxy",
//   },
//   // setupFilesAfterEnv: [
//   //   "<rootDir>/node_modules/@testing-library/jest-dom/extend-expect",
//   // ],
// };

// jest.config.cjs
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  // setupFilesAfterEnv: [
  //   "<rootDir>/node_modules/@testing-library/jest-dom/extend-expect",
  // ],
};
