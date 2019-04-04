import React, { Component, Fragment } from "react";
import "./index.css";
import TodoItem from "./TodoItem";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "ret",
      list: []
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
            ref={input => {
              this.input = input;
            }}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>{this.getItem()}</ul>
      </Fragment>
    );
  }

  componentDidMount(){
    axios.get('/api/getList')
    .then((success)=>{
      console.log('success');
    })
    .catch(err=>{
      console.log('err');
    })
  }

  getItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={item}
          content={item}
          index={index}
          itemDelete={this.handelItemDelete.bind(this)}
        />
      );
    });
  }

  handleInputChange(e) {
    const value = this.input.value;
    this.setState(() => ({ inputValue: value }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }

  handleButtonClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
  }

  handelItemDelete(index) {
    // 不推荐直接修改state，因为性能差
    this.setState(prevState => {
      const list = prevState.list;
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
