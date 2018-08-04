module.exports = {
  mode: 'development',
  entry: {
    main: __dirname + '/src/main.ts',
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      { test: /\.ts?$/, use: 'ts-loader' }
    ]
  }
}
