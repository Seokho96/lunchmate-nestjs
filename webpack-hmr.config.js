const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new RunScriptWebpackPlugin({ name: 'main.js' }),
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js',
    },
  };
};
