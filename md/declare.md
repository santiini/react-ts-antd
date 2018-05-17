# declare 声明一些特殊的模块和变量

项目中，总有一些特殊的地方需要绕过 typescript 的声明和引入声明，除了同时引入 @types/module 外，还可以:

1. 根目录新建 typings 目录,

2. typings 下新建类型声明文件， index.d.ts 和 custom.d.ts

index.d.ts 中，引入 custom.d.ts:

```ts
  /// <reference path="./custom-typings.d.ts" />
```

custom.d.ts 中:

```js
  // module 引入的声明
  declare module "prop-types"

  declare module "lodash/debounce"

  declare module "lodash/uniqBy"
  // 全局变量的声明, 可以配合 webpack 使用全局性的api
  declare var _: any;
  declare var classNames: any;

```


