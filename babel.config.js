module.exports = {
  env: {
    modern: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              esmodules: true
            }
          }
        ]
      ],
    },
    legacy: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              ie: 11,
              safari: 9
            }
          }
        ]
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: false,
            helpers: false,
            regenerator: true,
            useESModules: false
          }
        ]
      ]
    }
  }
};
