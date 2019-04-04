import React, { Component } from "react";
import propTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { content } = this.props;
    return <div onClick={this.handleClick}>{content}</div>;
  }

  handleClick() {
    const { itemDelete, index } = this.props;
    itemDelete(index);
  }
}
// 限制props数据类型
TodoItem.propTypes = {
  test: propTypes.string.isRequired,
  content: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  itemDelete: propTypes.func,
  index: propTypes.number
};
// props数据设置默认值
TodoItem.defaultProps = {
  test: "hello"
};
export default TodoItem;
