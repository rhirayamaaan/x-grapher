const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const createStyleLoaders = (isProduction) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      sourceMap: !isProduction,
      modules: {
        localIdentName: '[local]-[hash:base64:5]',
      },
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [require('autoprefixer')],
      }
    },
  },
];

module.exports = (env) => ({
  mode: 'production',
  entry: ['./src/App.tsx'],
  output: {
    publicPath: '',
    path: path.resolve('build/'),
    filename: 'bundle.js',
  },
  resolve: {
    // importする拡張子の指定
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, 'tsconfig.json') })],
  },
  // loaderの設定
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        oneOf: [
          { test: /swiper.*\.css/, use: ['style-loader', 'css-loader'] },
          { test: /\.css$/, use: createStyleLoaders(env.production) },
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'react-svg-loader',
          options: {
            svgo: {
              plugins: [{ removeViewBox: false }, { removeMetadata: false }],
            },
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          ...createStyleLoaders(env.production),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !env.production,
            },
          },
        ],
      },
    ],
  },
});
