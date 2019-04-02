import React, { Component, Fragment } from "react";
import "./index.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "ret",
      list: ["学习英文", "学习react"]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handelItemDelete = this.handelItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">输入</label>
          <input
            id="inputArea"
            className="input"
            onChange={this.handleInputChange}
            value={this.state.inputValue}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>{this.getItem()}</ul>
      </Fragment>
    );
  }

  getItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          content={item}
          index={index}
          itemDelete={this.handelItemDelete.bind(this)}
        />
      );
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleButtonClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }

  handelItemDelete(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default TodoList;
