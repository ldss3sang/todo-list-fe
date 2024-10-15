import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteTask, completeTask }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList?.length > 0 ? (
        todoList.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
