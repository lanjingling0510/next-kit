const trash = require('trash');
const path = require('path');
const ROOT_PATH = process.cwd();

module.exports = {
  webpack: config => {
    if (config.resolve.alias) {
      delete config.resolve.alias['react']
      delete config.resolve.alias['react-dom']
    }

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        {
          loader: 'skeleton-loader',
          options: {
            procedure: function(content) {
              const fileName = `${this._module.userRequest}.json`;
              const classNames = JSON.stringify(require(fileName));
              trash(fileName);
              return [
                'module.exports = {',
                `classNames: ${classNames},`,
                `stylesheet: ${JSON.stringify(content)}`,
                '}',
              ].join('');
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: path.join(ROOT_PATH, 'config', 'postcss.config.js'),
          },
        },
      ],
    });

    return config;
  },
};
