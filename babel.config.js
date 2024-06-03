// Babel is used to transpile .jsx, .tsx, ... into .js, which can be used by shadow-cljs
module.exports = {
  presets: [
    '@babel/env',
    ['@babel/preset-typescript'],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    ['module-resolver', { alias: { '@': './src/js' } }],
    '@babel/plugin-transform-runtime',
  ],
  exclude: ['node_modules'],
}
