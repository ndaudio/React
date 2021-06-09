const path = require('path');

module.exports = {
  entry: './src/playground/redux-expensify.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env', '@babel/preset-react'],
               plugins: ['@babel/plugin-proposal-class-properties'] 
            }
        }
    }, {
        test: /\.s?css$/,
        use: [
            'style-loader', 
            'css-loader',
            'sass-loader'
        ]
    }]
},
 devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
