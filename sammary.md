# React 开发总结

## react-router

### 1. Redirect 重定向的规范

```js
  <Switch>
    {/* 1. 只会从 '/' 重定向到 '/recommend'
     <Redirect exact={true} from="/" to="/recommend" /> 
    */}
    <Route exact={true} path="/recommend" component={Recommend} />
    <Route exact={true} path="/plan" component={Plan} />
    <Route exact={true} path="/project" component={Project} />
    <Route exact={true} path="/accounts" component={Accounts} />
    {/* 2. 只会从 '/' 重定向到 '/recommend'
    <Redirect exact={true} from="/" to="/recommend" /> 
    */}
    {/* 3. 上面路由都不匹配时, 会重定向到 /recommend  */}
    <Redirect exact={true} from="*" to="/recommend" />
  </Switch>
```

### 2. exact 匹配规则

```jsx
  // Home.js 中
  // 和上面的区别在于: exact 只在 path="/" 时使用, 这样做的好处在于: 下面细说
  <Router>
    <Route exact={true} path="/" component={App} />
    <Route path="/recommend" component={Recommend} />
    <Route path="/plan" component={Plan} />
    <Route path="/project" component={Project} />
    <Route path="/accounts" component={Accounts} />
  </Router>

  // 在 Recommend.js 中
  // 在 父路由组件 中， 添加子路由, 当父路由 exact={true} 时, 子路由 /recommend/weixin 只会匹配到父路由;
  <div>
   {/* .... */}
    <Route path={`${match.url}/weixin`} component={WeixinCom} />
    <Route path={`${match.url}/live`} component={LiveCom} />
  </div>
```