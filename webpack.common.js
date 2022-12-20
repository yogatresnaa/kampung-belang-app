const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      kb: path.resolve(__dirname, 'src/public/kb.png'),
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new GenerateSW({
      swDest: './sw.bundel.js',
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      // runtimeCaching: [
      //   {
      //     urlPattern: ({ request }) => request.destination === 'image',
      //     handler: 'StaleWhileRevalidate',
      //     options: {
      //       cacheName: 'heros',
      //       expiration: {
      //         maxEntries: 60,
      //       },
      //     },
      //   },
      //   {
      //     urlPattern: /^https:\/\/kit\.fontawesome\.com/,
      //     handler: 'StaleWhileRevalidate',
      //     options: {
      //       cacheName: 'font-awesome',
      //     },
      //   },
      //   {
      //     urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      //     handler: 'StaleWhileRevalidate',
      //     options: {
      //       cacheName: 'google-fonts-stylesheets',
      //     },
      //   },
      // ],
    }),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    // }),
  ],
};
