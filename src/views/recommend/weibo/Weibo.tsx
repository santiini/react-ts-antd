import * as React from 'react';

import { tagList, fansFilter, priceFilter, tagFilter } from '../../../data/index';
import CheckedTag from '../../../components/CheckedTag';

class Weibo extends React.Component {
  state = {
    curProfession: '',
    curFan: '',
    curPrice: '',
    curTag: '',
  }
  searchTag = (val: string, key: string) => {
    console.log(val, key);
    const newProps = Object.defineProperty({}, key, { value: val });
    console.log(newProps);
    // this.setState({
    //   ...newProps,
    // });
    // this.setState((prev) => {
    //   // return {curProfession: val};
    //   console.log(newProps);
    //   return newProps;
    // })
    // this.setState({
    //   curProfession: val
    // })
    this.setState((prev) => {
      if (key === 'curProfession') {
        return { curProfession: val };
      } 
      if (key === 'curFan') {
        return { curFan: val };
      }
      if (key === 'curPrice') {
        return { curPrice: val };
      }
      if (key === 'curTag') {
        return { curTag: val };
      }
      return;
    })
  }
  render() {
    const tagArr = [
      { title: '行业', list: tagList, val: this.state.curProfession, key: 'curProfession' },
      { title: '粉丝', list: fansFilter, val: this.state.curProfession, key: 'curFan' },
      { title: '价格', list: priceFilter, val: this.state.curProfession, key: 'curPrice' },
      { title: '标签', list: tagFilter, val: this.state.curProfession, key: 'curTag' },
    ];
    return (
      <div className="weibo">
      {tagArr.map(({title, list, val, key}) => (
          <CheckedTag
            key={title}
            title={title}
            list={list}
            onChange={(value: string) => this.searchTag(value, key)}
            currentVal={this.state[key]}
          />
        ))}
      </div>
    )
  }
}

export default Weibo;