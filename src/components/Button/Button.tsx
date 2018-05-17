import * as React from 'react';
import PropTypes from 'prop-types';
// import { findDOMNode } from 'react-dom';
import * as classNames from 'classnames';
import { Icon } from 'antd';

export type ButtonType = 'primary' | 'dashed' | 'ghost' | 'danger';
export type ButtonShape = 'circle' | 'circle-outline';
export type ButtonSize = 'large' | 'small' | 'default';

export interface ButtonProps {
  type?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSize;
  href?: string;
  icon?: string;
  className?: string;
  prefixCls?: string;
  loading?: boolean | { delay?: number };
}

export default class extends React.Component<ButtonProps, any> {
  static defaultProps = {
    loading: false,
    prefixCls: 'my-btn',
  };

  static propTypes = {
    // loading: PropTypes.oneof([PropTypes.bool, PropTypes.object]),
    size: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'circle-outline']),
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  };

  timeout: number;
  delayTimeout: number;

  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      loading: props.loading,
      clicked: false,
    }
  }

  componentWillReceiveProps(nextProps: ButtonProps) {
    const currentLoading = this.props.loading;
    const loading = nextProps.loading;
    if (currentLoading) {
      clearTimeout(this.delayTimeout);
    }
    if (typeof loading !== 'boolean' && loading && loading.delay) {
      this.delayTimeout = window.setTimeout(() => this.setState({ loading }), loading.delay);
    } else {
      this.setState({ loading });
    }
  }

  render() {
    const { 
      type, shape, size, prefixCls, icon,  className, children, ...others,
    } = this.props;
    const { loading } = this.state;
    const ComponentProp = others.href ? 'a' : 'button';
    const sizeCls = size === 'large' ? 'lg' : 'sm';
    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
    });
    const iconType = loading ? 'loading' : icon;
    const iconNode = iconType ? <Icon type={iconType} /> : null;
    const kids = (children || children === 0)
      ? React.Children.map(children, child => <span>child</span>) : null;
    return (
      <ComponentProp
        className={classes}
      >
        {iconNode}
        {kids}
      </ComponentProp>
    );
  }
}