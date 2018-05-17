import * as React from 'react';
// import propTypes from 'prop-types';
// import classNames from 'classnames';
// import { Button } from 'antd';

export type TooltipPlacement =
  'top' | 'left' | 'right' | 'bottom' |
  'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' |
  'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';

export interface AbstriProps {
  prefixCl?: string;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  placement?: TooltipPlacement;
  visible?: boolean;
  defaultVisible?: boolean;
  children?: React.ReactNode;
}

export type RenderFunction = () => React.ReactNode;

// 接口继承
export interface TooltipProps extends AbstriProps {
  title?: React.ReactNode | RenderFunction;
  overlay?: React.ReactNode | RenderFunction;
}

// obj 的属性分隔， 按属性是否在 keys 数组中;
// const splitObject = (obj: any, keys: string[]) => {
//   const picked: any = {};
//   const omited: any = {...obj};
//   keys.forEach((key) => {
//     if (obj && key in obj) {
//       picked[key] = obj[key];
//       delete omited[key];
//     }
//   });
//   return { picked, omited };
// }

export default class Tooltip extends React.Component<TooltipProps, any> {
  static defaultProps = {
    prefixCols: 'my-tooltip',
    placement: 'top',
    transitionName: 'zoom-big-fast',
  };

  state = {
    visible: !!this.props.visible || !!this.props.defaultVisible,
  }
  constructor(props: TooltipProps) {
    super(props);
  }

  componentWillReceiveProps(nextProps: TooltipProps) {
    if ('visible' in nextProps) {
      this.setState({ visible: nextProps.visible });
    }
  }

  render() {
    // const {
    //   prefixCl, overlay, children,
    // } = this.props;
    // const content = children as React.ReactElement<any>;
    // let visible = this.state.visible;
    // return (

    // );
    return (
      <div className="">
        <div className="">React-Component: tooltip</div>
      </div>
    )
  }
}