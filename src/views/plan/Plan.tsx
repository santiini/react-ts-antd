import * as React from 'react';
import { Button } from 'antd';

import MyButton from '../../components/Button/Button';

class Plan extends React.Component {
  render() {
    return (
      <div>
        <div className="">计划111</div>
        <div className="">
        <MyButton className="test-btn">
          <span>111111111</span>
        </MyButton>
        </div>
        <div className="">
          <Button className="ant-test">antd-button</Button>
        </div>
      </div>
    )
  }
}

export default Plan;