import React, { Component, Fragment } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from "./store";
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreator';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <Fragment>
        <div style={{ margin: "10px 0 10px 10px" }}>
          <div style={{ marginBottom: "10px" }}>
            <Input
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              placeholder="Basic usage"
              style={{
                width: "300px",
                marginRight: "10px"
              }}
            />
            <Button type="primary" onClick={this.handleClick}>
              提交
            </Button>
          </div>
          <List
            style={{ width: "300px" }}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    );
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    // 创建action，dispatch action
    store.dispatch(action);
  }

  handleStoreChange() {
    // console.log('123');
    this.setState(store.getState());
  }

  handleClick() {
    const action = getAddItemAction()
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;
