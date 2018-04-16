import * as React from 'react';

import { tagList, fansFilter, priceFilter, tagFilter, weibo } from '../../../data';
import CheckedTag from '../../../components/CheckedTag';
import TableCtx from './Table';
// import { getTagList } from '../../../utils';

interface Column {
  followers: number;
  realFollowers: number;
  followings: number;
}

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

  // fetchData = () => {}
  // componentDidMount() {}
  render() {
    // const {curProfession, curFan, curPrice, curTag} = this.state;
    const tagArr = [
      { title: '行业', list: tagList, val: this.state.curProfession, key: 'curProfession' },
      { title: '粉丝', list: fansFilter, val: this.state.curFan, key: 'curFan' },
      { title: '价格', list: priceFilter, val: this.state.curPrice, key: 'curPrice' },
      { title: '标签', list: tagFilter, val: this.state.curTag, key: 'curTag' },
    ];
    // const titleArr = ['行业', '粉丝', '价格', '标签'];
    // const listArr = [tagList, fansFilter, fansFilter, tagFilter];
    // const valArr = [curProfession, curFan, curPrice, curTag];
    // const keyArr = ['curProfession', 'curFan', 'curPrice', 'curTag'];
    // const tagArr1 = getTagList(titleArr, listArr, valArr, keyArr);
    const weiboCols = [
      { title: 'name', dataIndex: 'name', key: 'name' },
      { 
        title: '影响',
        dataIndex: 'followers',
        key: 'followers',
        sorter: (a: Column, b: Column) => a.followers - b.followers,
      },
      { 
        title: '阅读1',
        dataIndex: 'realFollowers',
        key: 'realFollowers',
        sorter: (a: Column, b: Column) => a.realFollowers - b.realFollowers,
      },
      { 
        title: '阅读2',
        dataIndex: 'followings',
        key: 'followings',
        sorter: (a: Column, b: Column) => a.followings - b.followings,
      },
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
        <TableCtx
          list={weibo}
          columns={weiboCols}
        />
      </div>
    )
  }
}

export default Weibo;