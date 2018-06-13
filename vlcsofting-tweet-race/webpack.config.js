

const NgCompilerPlugin = require('@ngtools/webpack');

module.exports = {
    module: {
      rules: [{test: /\.ts$/, loader: '@ngtools/webpack'}]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
        new NgCompilerPlugin.AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            mainPath: './src/index.ts'
        })
    ],
    mode: 'production',
    stats: 'errors-only' 
  };       
  
  
  