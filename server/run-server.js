require('babel-core/register')({
  presets: ['es2015-node6', 'stage-0'],
  plugins: ['transform-decorators-legacy'] //was needed to support decorators
})

require.extensions['.scss'] = () => {
  return;
}

require.extensions['.css'] = () => {
  return;
}
require('dotenv').config();
require('./server')

// why is any of this necessary to prevent unexpected token in scss?
