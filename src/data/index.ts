// types 分类
export interface Type {
  path: string;
  name: string;
}
export const types: Array<Type> = [
  {
    path: '/recommend',
    name: '推荐',
  },
  {
    path: '/plan',
    name: '计划',
  },
  {
    path: '/project',
    name: '项目',
  },
  {
    path: '/accounts',
    name: '账号库',
  },
];
// 平台分类
export interface Platform {
  path: string;
  name: string;
}

export const platforms = [
  {
    path: '/weibo',
    name: '微博',
  },
  {
    path: '/wechat',
    name: '微信',
  },
  {
    path: '/live',
    name: '直播',
  },
  {
    path: '/zhihu',
    name: '知乎',
  },
  {
    path: '/babytree',
    name: '宝宝树',
  },
  {
    path: '/redbook',
    name: '小红书',
  },
];

export interface Tag {
  text: string;
  value: string;
}

export const tagList = [{
    text: '个护美妆',
    value: '个护美妆',
  }, {
    text: '日用百货',
    value: '日用百货',
  }, {
    text: '母婴用品',
    value: '母婴用品',
  }, {
    text: '汽车',
    value: '汽车',
  }, {
    text: '饮料食品',
    value: '饮料食品',
  }, {
    text: '家用电器',
    value: '家用电器',
  }, {
    text: '电商平台',
    value: '电商平台',
  }, {
    text: '保险行业',
    value: '保险行业',
  }, {
    text: '药品医疗',
    value: '药品医疗',
  }, {
    text: '数码电子',
    value: '数码电子',
  }];

export const fansFilter = [{
    text: '5,000以下',
    value: '0-5000',
  }, {
    text: '5,000以上',
    value: '5000-0',
  }, {
    text: '10,000以上',
    value: '10000-0',
  }, {
    text: '50,000-以上',
    value: '50000-0',
  }, {
    text: '100,000以上',
    value: '100000-0',
  }];

export const priceFilter = [{
    text: '1万以下',
    value: '0-10000',
  }, {
    text: '1万至10万',
    value: '10000-100000',
  }, {
    text: '10万至50万',
    value: '100000-500000',
  }, {
    text: '50万至100万',
    value: '500000-1000000',
  }, {
    text: '100万以上',
    value: '1000000-0',
  }];

export const tagFilter = [{
    text: '科技',
    value: '科技',
  }, {
    text: '段子手',
    value: '段子手',
  }, {
    text: '媒体资讯',
    value: '媒体资讯',
  }, {
    text: '情感',
    value: '情感',
  }, {
    text: '摄影旅行',
    value: '摄影旅行',
  }, {
    text: '文化教育',
    value: '文化教育',
  }, {
    text: '时尚穿搭',
    value: '时尚穿搭',
  }, {
    text: '星座',
    value: '星座',
  }, {
    text: '母婴',
    value: '母婴',
  }, {
    text: '汽车',
    value: '汽车',
  }, {
    text: '财经',
    value: '财经',
  }, {
    text: '萌宠',
    value: '萌宠',
  }, {
    text: '运动',
    value: '运动',
  }, {
    text: '购物',
    value: '购物',
  }, {
    text: '美食',
    value: '美食',
  }, {
    text: '美妆',
    value: '美妆',
  }, {
    text: '名人',
    value: '名人',
  }, {
    text: '明星',
    value: '明星',
  }, {
    text: '养生',
    value: '养生',
  }, {
    text: '艺术',
    value: '艺术',
  }, {
    text: '音乐',
    value: '音乐',
  }, {
    text: '影视',
    value: '影视',
  }, {
    text: '游戏',
    value: '游戏',
  }, {
    text: '娱乐',
    value: '娱乐',
  }];

export { default as weibo } from './weibo.js';