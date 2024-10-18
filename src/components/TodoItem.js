import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ todo, deleteTask, completeTask, showDetail }) => {
  console.log(todo);
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${todo.isComplete ? "item-complete" : ""}`}>
          <div className="todo-content">{todo.task}</div>

          <div>
            <button
              className="button-delete"
              onClick={() => deleteTask(todo._id)}
            >
              DEAD
            </button>
            <button
              className="button-delete"
              onClick={() => completeTask(todo._id, !todo.isComplete)}
            >
              {todo.isComplete ? "UNKILL": "KILL" }
            </button>
            <button
              className="button-delete"
              onClick={() => showDetail(todo._id)}
            >
              BOO!!
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
