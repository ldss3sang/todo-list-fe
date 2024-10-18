import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import api from "./utils/api";
import GhostPopup from "./components/GhostPopup";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [detail, setDetail] = useState({});
  const [term, setTerm] = useState("");

  const showDetail = async (id) => {
    setPopupVisible(!isPopupVisible);
    const response = await api.get(`/tasks/${id}`);
    setDetail(response.data.data);
  };

  const getTasks = async () => {
    const response = await api.get("/tasks");
    setTodoList(response.data.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async () => {
    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
      });
      if (response.status === 200) {
        console.log("Success");
        setTodoValue("");
        getTasks();
      } else {
        throw new Error("Task cannot be added");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const search = async () => {
    try {
      const response = await api.get(`/search?term=${term}`);
      if (response.status === 200) {
        console.log("Success");
        setTerm("");
        setTodoList(response.data.data);
      } else {
        throw new Error("Task cannot be added");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        getTasks();
      } else {
        throw new Error("Task cannot be deleted");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const completeTask = async (id, isComplete) => {
    try {
      const response = await api.put(`/tasks/${id}`, { isComplete });
      if (response.status === 200) {
        getTasks()
      } else {
        throw new Error("Task cannot be updated")
      }
    } catch (error) {
      
    }
  }
  return (
    <Container>
      <h2 className="todo-title">🎃 Spooky Ghost List 🎃</h2>
      <GhostPopup isVisible={isPopupVisible} onClose={showDetail} detail={detail}/>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="Please add your ghost"
            className="input-box"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add" onClick={search}>
            Add 👻 
          </button>
        </Col>
      </Row>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="Please find your ghost"
            className="input-box"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add" onClick={addTask}>
            Find 👻 
          </button>
        </Col>
      </Row>

      <TodoBoard todoList={todoList} deleteTask={deleteTask} completeTask={completeTask} showDetail={showDetail} />
    </Container>
  );
}

export default App;
