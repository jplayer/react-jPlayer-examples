import webpack from 'webpack';
import path from 'path';

export default {
  context: __dirname,
  entry: {
    example: './src/app.jsx',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    redux: 'Redux',
    'react-redux': 'ReactRedux',
    'react-jplayer': 'ReactJPlayer',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'umdPlayer.bundle.js',
  },
  devtool: 'inline-sourcemap',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
