module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
        helpers: true,
        regenerator: false,
        useESModules: true,
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "usage",
      },
    ],
    [
      "@babel/preset-react",
      {
        pragma: "dom", // default pragma is React.createElement (only in classic runtime)
        pragmaFrag: "DomFrag", // default is React.Fragment (only in classic runtime)
        throwIfNamespace: false, // defaults to true
        runtime: "classic", // defaults to classic
        // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
      },
    ],
  ],
};
