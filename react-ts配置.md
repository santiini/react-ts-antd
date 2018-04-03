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
