import * as React from 'react';
import { Tag } from 'antd';
import * as _ from 'lodash';
import './weibo.styl';

import { Tag as Tags } from '../data';

interface TagProps {
  list: Array<Tags>;
  onChange: Function;
  currentVal: string;
  title: string;
}

const { CheckableTag } = Tag;
const CheckedTag = ({list, onChange, currentVal = '', title}: TagProps) => {
  const newList = [{text: '不限', value: ''}, ...list];
  const tags = _.map(newList, (el) => (
    <CheckableTag
      onChange={() => onChange(el.value)} 
      key={el.value} 
      checked={el.value === currentVal}
    >
      {el.text}
    </CheckableTag>
  ));
  return (
    <div className="tag-container">
      <pre className="tag-title">{title}：</pre>
      <div className="tag-list">{tags}</div>
    </div>
  );
};

export default CheckedTag;