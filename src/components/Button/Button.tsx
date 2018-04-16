import * as React from 'react';
// import PropTypes from 'prop-types';

export type ButtonType = 'primary' | 'dashed' | 'ghost' | 'danger';
export type ButtonShape = 'circle' | 'circle-outline';
export type ButtonSize = 'large' | 'small' | 'default';

export interface ButtonProps {
  type?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSize;
  href?: string;
}

export default class extends React.Component<ButtonProps, any> {
  static defaultProps = {
    loading: false,
  };

  // static propTypes = {
  //   loading: PropTypes.oneof([PropTypes.bool, PropTypes.object]),
  // };

  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const { 
      type, shape, size, children, ...others,
    } = this.props;
    console.log(others);
    const ComponentProp = others.href ? 'a' : 'button';
    // const kids = (children || children === 0)
    //   ? React.Children.map(children, child => <span>child</span>) : null;
    return (
      <ComponentProp>
        {this.props.children}
      </ComponentProp>
    );
  }
}