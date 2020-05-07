import React from "react";
import "./Todo.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const Todo = (props) => {
  return (
    <Col xs="6" md="4" xl="4">
      <CardBody
        className={`item${props.item.completed ? " completed" : ""}`}
        onClick={(e) => props.toggleTodosDone(props.item.id)}
      >
        <CardTitle style={{ fontSize: "1.5rem" }}>{props.item.task}</CardTitle>
      </CardBody>
    </Col>
  );
};

export default Todo;
