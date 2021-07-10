module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
  ],
  routes: [
    /* ... */
  ],
  optimize: {
    bundle: true,
    sourcemap: false,
  },
  packageOptions: {
    NODE_ENV: true,
    rollup: {
      plugins: [require('rollup-plugin-postcss')({
        extract: false,
        minimize: true,
        loaders: [require('rollup-plugin-postcss-webpack-alias-less-loader')({
          nodeModulePath: "./node_modules",
          aliases: {}
      })],
        use: [
          [
            "less",
            {
              includePaths: [
                "./src",
                "./node_modules"
              ],
            },
          ],
        ],
      })],
    }
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    clean: true,
  },
};
