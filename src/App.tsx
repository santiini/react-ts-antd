import * as React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
// import Home from './views/home';
// import Demo1 from './views/demo1';
import './App.css';

// 按需加载
const asyncCom = (path: string) => asyncComponent({
  name: 'Page',
  resolve: () => import(/* webpackChunkName: "page" */ `./views/${path}`),
}); 
const Home = asyncCom('Home');
const Demo1 = asyncCom('Demo1');
const logo = require('./logo.svg');
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/demo1" component={Demo1} />>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
