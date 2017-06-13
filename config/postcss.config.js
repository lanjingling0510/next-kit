module.exports = ctx => {
  return {
    plugins: [
      require('postcss-import')(),
      require('postcss-mixins')(),
      require('postcss-cssnext')(),
      require('postcss-modules')({
          generateScopedName: '[local]-[hash:base64:5]'
      }),
      require('postcss-nested')(),
    ],
  };
};
