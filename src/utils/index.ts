// tag 表格数据格式的转换
import { Tag } from '../data';

export const getTagList = (titleArr: String[], listArr: Array<Array<Tag>>, valArr: String [], keyArr: String[]) => {
    return titleArr.map((el, i) => ({
      title: titleArr[i],
      list: listArr[i],
      val: valArr[i],
      key: keyArr[i],
    }));
}

export { default as api } from './api';