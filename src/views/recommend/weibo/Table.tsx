import * as React from 'react';
import { Input, Table, Button } from 'antd';

interface TableProps {
  list: Array<any>;
  columns: Array<any>;
  rowKey?: string;
}
// const { Search } = Input;
const TableCtx = (props: TableProps) => {
  return (
    <div className="">
      <div className="" style={{display: 'flex'}}>
        <Input placeholder="搜索内容" style={{width: '200px'}}  />
        <Button>搜索</Button>
      </div>
      <div className="">
        <Table
          rowKey={props.rowKey || 'id'}
          columns={props.columns}
          dataSource={props.list}
        />
      </div>
    </div>
  )
};

export default TableCtx;