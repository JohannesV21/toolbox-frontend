// module.exports = {
//   presets: ["@babel/preset-env", "@babel/preset-react"],
// };
// // \

// module.exports = {
//   presets: [
//     ["@babel/preset-env", { targets: { node: "current" } }],
//     "@babel/preset-typescript",
//   ],
// };

// module.exports = {
//   presets: [
//     "@babel/preset-env",
//     ["@babel/preset-react", { runtime: "automatic" }],
//   ],
// };

// // babel.config.js
// export default {
//   presets: [
//     ["@babel/preset-env", { targets: { node: "current" } }],
//     "@babel/preset-react",
//   ],
// };

// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
  ],
};
