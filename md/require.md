# 项目概况分析

## 项目使用技术栈

### 满足需求

#### 1. ant-design

#### 2. 组件按需加载
使用第三方库： react-async-component

```js
  // 1. 引入 react-async-component
  import { asyncComponent } from 'react-async-component';
  // 2. path => 异步加载组件函数
  const asyncCom = (path: string) => asyncComponent({
    name: 'Page',
    resolve: () => import(/* webpackChunkName: "page" */ `./views/${path}`),
  }); 
  // 3. 每个组件的异步加载函数
  const Home = asyncCom('Home');
  const Demo1 = asyncCom('Demo1');

```

#### 3. 图片增强: 雪碧图和 lazy-load

#### 4. moment: 时间插件

### 增强开发体验

#### 1. TypeScript

#### 2. stylus

#### 3. react的css增强： classnames

#### 4. redux 增强: react-redux-router

#### 5. redux 增强: immutable.js, 数据不可变

#### 6. redux 异步： redux-thunk

#### 7. lodash: 丰富方法

### 性能优化

#### 1. decorators 装饰器： babel-plugin-transform-decorators-legacy

#### 2. antd 的按需加载： babel-plugin-import

参考地址: https://ant.design/docs/react/use-with-create-react-app-cn

## 项目结构

## 项目的业务逻辑

## 项目问题分析

### 按需加载 和 热刷新存在冲突
