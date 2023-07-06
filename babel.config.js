// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('expo-router/babel'),
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@contexts': './src/contexts',
            '@icons':  './src/assets/icons',
            '@styles': './src/styles/theme',
          },
        },
      ],
    ],

  };
};