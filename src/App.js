import React from "react";

import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import FilterTasks from "./components/FilterTasks";

import "./App.css";

const App = () => {
  return (
    <div>
      <AddTask />
      <FilterTasks />
      <ListTask />
    </div>
  );
};

export default App;
