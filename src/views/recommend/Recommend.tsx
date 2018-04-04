import * as React from 'react';
import { Menu } from 'antd';
import * as _ from 'lodash';
import { Route, Link, RouteComponentProps } from 'react-router-dom';

import { platforms, Platform } from '../../data';
import { asyncCom } from '../../utils/asyncCom';

const { Item } = Menu;
const WeiboCom = asyncCom('recommend/weibo/Weibo');
const WeixinCom = asyncCom('recommend/weixin/Weixin');
const LiveCom = asyncCom('recommend/live/Live');
const ZhihuCom = asyncCom('recommend/zhihu/Zhihu');
const BabytreeCom = asyncCom('recommend/babytree/Babytree');
const RedbookCom = asyncCom('recommend/redbook/Redbook');

const TypeComponent = ({ match }: RouteComponentProps<any>) => {
  const menus = _.map(platforms, (el: Platform) => (
    <Item key={el.path}>
      <Link to={`${match.url}${el.path}`}>{el.name}</Link>
    </Item>
  ));
  return (
    <div className="recommend-container" style={{margin: '0 80px'}}>
      <Menu
        mode="horizontal"
      >
        {menus}
      </Menu>
      <div className="content" style={{margin: '15px 0'}}>
        <Route path={`${match.url}/weibo`} component={WeiboCom} />
        <Route path={`${match.url}/wechat`} component={WeixinCom} />
        <Route path={`${match.url}/live`} component={LiveCom} />
        <Route path={`${match.url}/zhihu`} component={ZhihuCom} />
        <Route path={`${match.url}/babytree`} component={BabytreeCom} />
        <Route path={`${match.url}/redbook`} component={RedbookCom} />
      </div>
    </div>
  );
};

export default TypeComponent;