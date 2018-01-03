import React, { Component } from 'react';
import PropTypes from 'prop-types';


function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends Component {
  static propTypes = {
    to: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    onClick: PropTypes.func
  }

  static defaultProps = {
    to: '',
    onClick() { }
  }

  handleClick = (event) => {
    this.props.onClick(event);

    if (
      isModifiedEvent(event) ||
      !isLeftClickEvent(event) ||
      event.defaultPrevented === true
    ) {
      // eslint-disable-next-line
      return;
    }
  }

  render() {
    const { to, children, ...props } = this.props;
    return <a href={to} {...props} onClick={this.handleClick}>{children}</a>;
  }
}


export default Link;
