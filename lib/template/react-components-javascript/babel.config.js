const package = require("./package.json");

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'import',
      {
        libraryName: package.name,
        libraryDirectory: "lib/js",
        styleLibraryDirectory: "lib/css",
        style: true,
      },
    ],
  ],
};
