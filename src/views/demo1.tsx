
import * as React from 'react';
import { Button, Icon } from 'antd';
import './index.styl';

export default class Demo1 extends React.Component<any> {
  goHome = () => {
    const { history } = this.props;
    history.push({ pathname: '/' });
  }
  render() {
    return (
      <div>
        <h4>Demo1234500</h4>
        <Button type="primary" onClick={this.goHome}>223344</Button>
        <div className="demo1">
          <div className="demo1-list">
            <div className="">1111111111</div>
            <div className="">222222222</div>
            <div className="">222222222</div>
          </div>
        </div>
        <Icon type="setting" />
      </div>
    );
  }
}