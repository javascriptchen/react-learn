import React, {  Fragment } from "react";
import { Input, Button, List } from "antd";

const TodoListUI = (props)=>{
  return (
    <Fragment>
      <div style={{ margin: "10px 0 10px 10px" }}>
        <div style={{ marginBottom: "10px" }}>
          <Input
            value={props.inputValue}
            onChange={props.handleInputChange}
            placeholder="Basic usage"
            style={{
              width: "300px",
              marginRight: "10px"
            }}
          />
          <Button type="primary" onClick={props.handleClick}>
            提交
          </Button>
        </div>
        <List
          style={{ width: "300px" }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>
          )}
        />
      </div>
    </Fragment>
  );
}

export default TodoListUI;
