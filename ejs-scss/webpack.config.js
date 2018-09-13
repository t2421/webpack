const plugins = []
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const globule = require('globule')

const getEjsEntriesList = () => {
    return globule.find(["**/*.ejs", "!**/_*.ejs"], { srcBase: "src/view" })
}

//ejsはコンパイル対象分 HtmlWebpackPluginインスタンスを作成する必要がある
const ejsList = getEjsEntriesList()
ejsList.forEach(value => {
    plugins.push(new HtmlWebpackPlugin({
        template: "src/view/" + value,
        inject: false,
        minify: true,
        filename: value.replace(".ejs", ".html")
    }));
});

plugins.push(new ImageminPlugin({
    test: 'htdocs/images/**',
    jpegtran: { progressive: false }
}))

module.exports = (env, argv) => {
    // es6の記述法に慣れる意味で省略しない
    // plugins.push(new webpack.ProvidePlugins({
    //     $:'jquery',
    //     jQuery:'jquery',
    //     TweenMax:'gsap'
    // }))
    return [
        {
            devServer: {
                contentBase: 'htdocs',
                open: true
            },
            entry: {
                "scripts/index": `./src/scripts/index.js`,
            },
            output: {
                path: `${__dirname}/htdocs`,
                filename: '[name].js'
            },
            optimization: {
              splitChunks: {
                name: 'scripts/vendor',
                chunks: 'initial',
              }
            },            
            plugins: plugins,
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: [
                            {
                                loader: 'babel-loader'
                            }
                        ]
                    },
                    {
                        test: /\.ejs$/,
                        use: [
                            "html-loader",
                            'ejs-html-loader'
                        ]
                    },
                    {
                        test: /\.(jpg|png|gif|svg)$/,
                        loader: 'image-webpack-loader',
                        enforce: 'pre'
                    }
                ]
            }
        },
        {
            entry: {
                "styles/main": "./src/scss/main.scss"
            },
            output: {
                path: `${__dirname}/htdocs`,
                filename: '[name].css'
            },
            module: {
                rules: [
                    {
                        test: /\.scss$/,
                        use: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                      minimize: true,
                                      sourceMap: true
                                    }
                                },{
                                    loader:'postcss-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: 'sass-loader',
                                    options: {
                                        sourceMap: true,
                                    }
                          
                                }
                            ]
                        })
                    }
                ]
            },
            plugins: [
                new ExtractTextPlugin('[name].css')
            ]
        }
    ]

}


