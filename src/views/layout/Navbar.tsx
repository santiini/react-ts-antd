import * as React from 'react';
import { Menu, Popover, Icon } from 'antd';
import * as _ from 'lodash';
import './index.styl';

const { Item } = Menu;
const logoPic = require('../../assets/logo.svg')
interface NavProps {
  menuList: Array<string>;
  logo?: string;
}

interface SettingsProps {
  teamId: number;
  onSignout: Function;
}

const Team = () => {
  const teamInfo = (
    <Menu className="no-border">
      <Item>1111</Item>
    </Menu>
  );
  return (
    <Popover content={teamInfo}>
      <div className="user-info">[量子产品][3]sunxiaotao(管理员)</div>
    </Popover>
  );
};

const Settings = ({ teamId, onSignout }: SettingsProps) => {
  const settings = [
    { path: `/kol/app/team/${teamId}/setting`, name: '系统设置', target: '' },
    { path: 'https://account.admaster.com.cn/#/auth/user', name: '个人设置', target: '_blank' },
    { path: 'https://socialmaster.gitbooks.io/kol_help/content/', name: '帮助', target: '_blank' },
    { onClick: onSignout, name: '退出', target: '_self' },
  ];
  const settingList = (
    <ul className="dropdown-menu">
      {
        _.map(settings, (el) => {
          if (el.path) {
            return (
              <li key={el.name} className="dropdown-menu">{el.name}</li>
            )
          }
          return (<li key={el.name} className="dropdown-menu">{el.name}</li>);
        })
      }
    </ul>
  );
  return (
    <Popover content={settingList} arrowPointAtCenter={false} placement="bottom">
      <Icon type="setting" style={{ fontSize: '16px', color: '#fff'}} />
    </Popover>
  );
}

const NavComponent = ({ menuList, logo = logoPic }: NavProps) => {
  const menus = menuList.map((el, i) => (
    <Item key={el}>{el}</Item>
  ));

  return (
    <header className="nav">
      <div className="nav-logo">
        <img className="logo-img" src={logo} />
      </div>
      <Menu
        defaultSelectedKeys={['意见领袖']}
        mode="horizontal"
        theme="dark"
        className="nav-menu"
      >
        {menus}
      </Menu>
      <div className="nav-right">
        <Team />
        <Settings
          teamId={1}
          onSignout={() => {console.log(111111111111)}}
        />
      </div>
    </header>
  );
};

export {
  NavComponent,
};