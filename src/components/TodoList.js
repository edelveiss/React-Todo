// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo.css";
import { Container, Row, Button } from "reactstrap";

const TodoList = (props) => {
  return (
    <Container style={{ width: "100%", marginTop: "5rem" }}>
      <Row>
        {props.todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            toggleTodosDone={props.toggleTodosDone}
          />
        ))}
      </Row>
      <Row className="button-wrapper">
        <Button
          className="btnComplete"
          onClick={props.clearTodosDone}
          color="warning"
        >
          Clear Completed
        </Button>
      </Row>
    </Container>
  );
};
export default TodoList;
