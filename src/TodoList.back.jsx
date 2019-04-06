import React, { Component, Fragment } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <Fragment>
        <div style={{ margin: "10px 0 10px 10px" }}>
          <div style={{ marginBottom: "10px" }}>
            <Input
              
              value={this.state.inputValue}
              placeholder="Basic usage"
              onChange={this.handleInputChange}
              style={{
                width: "300px",
                marginRight: "10px"
              }}
            />
            <Button type="primary" onClick={this.handleButtonClick}>
              提交
            </Button>
          </div>
          <List
            style={{ width: "300px" }}
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </Fragment>
    );
  }

  handleInputChange(e) {
    const value = this.input.value;
    console.log(value);
    // console.log(e.target.value);
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick() {
    const action = {
      type: "add_input_value"
    };
    store.dispatch(action);
  }
}
export default TodoList;
