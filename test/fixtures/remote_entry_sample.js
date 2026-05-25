// Webpack Module Federation remoteEntry.js (minified-ish).
var moduleMap = {
  "./Header": () => __webpack_require__.e("src_Header").then(() => () => __webpack_require__("./src/Header.jsx")),
  "./Footer": () => __webpack_require__.e("src_Footer").then(() => () => __webpack_require__("./src/Footer.jsx"))
};
var moduleFederationConfig = {
  name: "shellApp",
  filename: "remoteEntry.js",
  exposes: {"./Header":"./src/Header","./Footer":"./src/Footer","./AdminWidget":"./src/admin/Widget"},
  remotes: {"checkout":"checkout@https://cdn.example.com/checkout/remoteEntry.js","auth":"auth@https://auth.example.com/remoteEntry.js"}
};
