import * as React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import * as _ from 'lodash';
import { Menu } from 'antd';

import { NavComponent } from './views/layout/Navbar';
import { types, Type } from './data/index';
import { asyncCom } from './utils/asyncCom';
import './App.css';

const menus = ['舆情分析', '用户分析', '活动分析', '意见领袖', '小工具'];
const { Item } = Menu;
const TypeCom = ({}) => {
  const typeList = _.map(types, (el: Type) => (
    <Item key={el.path}>
      <Link to={el.path}>{el.name}</Link>
    </Item>));
  const defaultKey: string = types.length > 0 ? types[0].path : '';
  return (
  <Menu
    style={{margin: '0 80px'}}
    mode="horizontal"
    defaultSelectedKeys={[defaultKey]}
  >
    {typeList}
  </Menu>
  );
};
const Recommend = asyncCom('recommend/Recommend');
const Plan = asyncCom('plan/Plan');
const Project = asyncCom('project/Project');
const Accounts = asyncCom('accounts/Accounts');
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavComponent menuList={menus}/>
          <TypeCom />
          <Switch>
            <Route path="/recommend" component={Recommend} />
            <Route path="/plan" component={Plan} />
            <Route path="/project" component={Project} />
            <Route path="/accounts" component={Accounts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
