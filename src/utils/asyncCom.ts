// 按需加载组件
import { asyncComponent } from 'react-async-component';

export const asyncCom = (path: string) => asyncComponent({
  name: 'Page',
  resolve: () => import(/* webpackChunkName: "page" */ `../views/${path}`),
});