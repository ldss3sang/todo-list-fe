import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteTask, completeTask, showDetail }) => {
  return (
    <div>
      {todoList?.length > 0 ? (
        todoList.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTask={deleteTask}
            completeTask={completeTask}
            showDetail={showDetail}
          />
        ))
      ) : (
        <h2>There is no task to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
