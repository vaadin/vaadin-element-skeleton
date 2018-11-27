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
            exclude: ['transform-async-to-generator', 'transform-regenerator'],
            targets: {
              ie: 11,
              safari: 9
            }
          }
        ]
      ],
      plugins: [
        [
          'module:fast-async',
          {
            spec: true
          }
        ]
      ]
    }
  }
};
