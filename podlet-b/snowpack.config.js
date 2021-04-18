const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      'snowpack-plugin-rollup-bundle',
      {
        entrypoints: 'build/dist/index.js',

        extendConfig: (config) => {
          config.outputOptions.dir = 'build/dist';
          config.outputOptions.format = 'esm';

          return config;
        },
      },
    ],
  ],
  routes: [
    /* ... */
  ],
  optimize: {
    bundle: true,
  },
  packageOptions: {
    NODE_ENV: true,
    rollup: {
      plugins: [commonjs(), resolve()],
    },
  },
  devOptions: {
    open: 'none',
    bundle: true,
  },
  buildOptions: {
    clean: true,
  },
};
