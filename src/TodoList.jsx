import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { changeInputValue, deleteItem, addItem } from "./store/actionCreators";

const TodoList = props => {
  // 此时TodoList是一个ui组件,无状态组件
  const {
    inputValue,
    list,
    handleClick,
    changeInputValue,
    handleDeleteItem
  } = props;

  return (
    <Fragment>
      <div>
        <input type="text" value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={item} onClick={() => handleDeleteItem(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

// 映射关系
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

// store.dispatch
const mapDispatchProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = changeInputValue(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = addItem();
      dispatch(action);
    },
    handleDeleteItem(index) {
      const action = deleteItem(index);
      dispatch(action);
    }
  };
};

// connect TodoList和store连接
// connect ui组件与业务逻辑相结合，返回一个容器组件
export default connect(
  mapStateToProps,
  mapDispatchProps
)(TodoList);
