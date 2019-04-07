import React, { Component } from "react";

import "antd/dist/antd.css";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  // initListAction,
  getInitList
  // getTodoList
} from "./store/actionCreator";
import TodoListUI from "./TodoListUI";
// import axios from "axios";

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
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  componentDidMount() {
    const action = getInitList();
    // console.log(action);
    store.dispatch(action)
    // axios
    //   .get(
    //     "https://www.easy-mock.com/mock/5b432caf078f0b5fea13767b/example/api/getTodoList"
    //   )
    //   .then(res => {
    //     const data = res.data.data;
    //     const action = initListAction(data);
    //     // 返回的函数自动就会接收到dispatch方法
    //     store.dispatch(action);
    //   });
    // const action = getTodoList();
    // store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    // 创建action，dispatch action
    store.dispatch(action);
  }

  handleStoreChange() {
    // console.log('123');
    this.setState(store.getState());
  }

  handleClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;
