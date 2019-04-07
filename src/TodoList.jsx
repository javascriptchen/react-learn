import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
          />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          <li>123</li>
        </ul>
      </Fragment>
    );
  }
}

// 映射关系
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};

// store.dispatch
const mapDispatchProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
        console.log(123);
      const action = {
        type: "add_item"
      };
      dispatch(action);
    }
  };
};

// connect TodoList和store连接
export default connect(
  mapStateToProps,
  mapDispatchProps
)(TodoList);
