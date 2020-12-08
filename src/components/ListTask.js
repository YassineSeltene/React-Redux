import React from "react";
import { connect } from "react-redux";
import { filterTask } from "../js/actions";
import Task from "./Task";

function filterTodos(todoList, filterQuery) {
 
  switch (filterQuery) {
    case "done":
      return todoList.filter((todo) => todo.isComplete === true);
    case "undone":
      return todoList.filter((todo) => todo.isComplete === false);
    case "no-filter":
    default:
      return todoList;
  }
}

const ListTask = ({ todoList, filterQuery }) => {
  const result = filterTodos(todoList, filterQuery);
  return (
    <div className="todo-list">
      {result.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  todoList: state.todos,
  filterQuery: state.filterTask,
});

export default connect(mapStateToProps)(ListTask);
