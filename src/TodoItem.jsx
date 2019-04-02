import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content } = this.props;
    return (
      <div key={this.props.index} onClick={this.handleClick}>
        {content}
      </div>
    );
  }

  handleClick() {
    const { itemDelete, index } = this.props;
    itemDelete(index);
  }
}

export default TodoItem;
