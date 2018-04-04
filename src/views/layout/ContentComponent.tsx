import * as React from 'react';
import { Menu } from 'antd';
import * as _ from 'lodash';
// import { Route } from 'react-router-dom';

// import { asyncCom } from '../../utils/index';
import { types, Type } from '../../data/index';

const { Item } = Menu;
// const RecommentComp = asyncCom('recomment/index');

class ComtentComponent extends React.Component<{}> {
  render() {
    // const match = this.props.match;
    const menus = _.map(types, (el: Type) => (<Item key={el.path}>{el.name}</Item>));
    return (
      <div className="">
        <Menu
          style={{margin: '0 80px'}}
          mode="horizontal"
        >
          {menus}
        </Menu>
        <div className="">分类</div>
        {this.props.children}
        {/* <Route path={`${match.url}/recommend`} component={RecommentComp} /> */}
      </div>
    )
  }
}

export {
  ComtentComponent,
}