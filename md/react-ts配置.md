# react-typescript 的配置

在 react 和 typescript 结合的过程中，需要几大方面的支持: ts-loader, react-router等的@types 声明文件

## @types 声明文件的说明

### react 相关库的 @types 声明

开发过程中的发现:

1. react-router-dom  和 @types/react-router-dom

2. react-router 和 @types/react-router

3. react-hot-loader 和 @types/react-hot-loader

- 安装 react-hot-loader 和 @types/react-hot-loader
- 修改 webpack.dev.conf

```js
  // entry
    entry: [
    'react-hot-loader/patch', 
    
  // .tsx 文件添加 react-hot-loader/babel
   {
      test: /\.(ts|tsx)$/,
      include: paths.appSrc,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['react-hot-loader/babel'],
          },
        },
        {
          loader: require.resolve('ts-loader'),
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
        },
      ],
    },  
```
- 修改 tsconfig 配置文件

```js

  compilerOptions: {
    "baseUrl": "./src",
    "target": "es6",
    // ...
  }

```
### redux 在使用 typescript 时的注意事项

1. combineReducers({ }) 时参数报错

在 typescript 中，尽量少使用 export default 和 import Module from ''

2. 使用一些全局变量 window, module 等时，显示声明对象类型

```js
  // 声明类型
  declare var module: any;
  if (module.hot) {
    module.hot.accept('./App', () => {
      render(App); 
      // render(require('./App').App);
    });
  }
```

## react 相关开发插件的配置

### antd 的按需加载: babel-plugin-import 

### es7的decotars的支持: babel-plugin-transform-decorators-legacy 

antd 的按需加载和 decorators 支持都是修改 babel 的配置完成, create-react-app 中可以修改: package.json：

```js
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      "transform-decorators-legacy",
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ]
    ]
  },

```

### stylus 和 stylus-loader

1. 安装 stylus 和 stylus-loader, poststylus

2. 修改 webpack.dev.conf

```js
  // 1. 引入 poststylus
  const poststylus = require('poststylus');

  // 2. oneOf 中添加 .styl 文件的支持
   {
      test: /\.styl$/,
      use: ["style-loader", "css-loader", "stylus-loader"]
    },

  // 3. plugins中添加 poststylus 和 autoprefixer 全面使用 stylus
  new webpack.LoaderOptionsPlugin({
    options: {
      // stylus 的解析规则；
      // 1. 使用 poststylus 插件结合使用 stylus 和 autoprefixer  
        stylus: {
          use: [
            poststylus([ 
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              })
            ])
          ]
        }
      }
  }),

```

3. 修改生产环境的配置：webpack.prod.conf

```js
  // 1.
  const poststylus = require('poststylus');

  // 2. .styl 文件支持
   {
    test: /\.styl$/,
    loader: ExtractTextPlugin.extract(
      Object.assign(
        {
          fallback: {
              loader: require.resolve('style-loader'),
              options: {
                hmr: false
              }
          },
          use: [
            {
              loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  minimize: true,
                  sourceMap: true
                }
            },
            {
              loader: require.resolve('stylus-loader')
            }
          ]
        }
      ), extractTextPluginOptions)
  },

  // 3. plugins
  new webpack.LoaderOptionsPlugin({
    options: {
      // stylus 的解析规则；
      // 1. 使用 poststylus 插件结合使用 stylus 和 autoprefixer  
        stylus: {
          use: [
            poststylus([ 
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              })
            ])
          ]
        }
      }
  }),

```
