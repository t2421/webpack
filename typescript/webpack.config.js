module.exports = {

    mode: 'development',

    entry: './src/main.ts',
    output:{
        path:`${__dirname}/dist`,
        filename:'main.js',
        //umd形式での出力
        library: "fcklib",
        libraryTarget: "umd"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: [
        '.ts'
      ]
    }
  };
  