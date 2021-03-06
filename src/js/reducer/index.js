

const initState = {
  todos: [{ text: "Take the keys", isComplete: false, id: 0 }],
  filterTask: "no-filter", 
};

export default function (state = initState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case "FILTER_TASKS":
      return { ...state, filterTask: action.payload };

    default:
      return state;
  }
}
