// import uuid from "react-uuid";
import shortid from "shortid";

export const addTodo = (newTodo) => {
  return {
    type: "ADD_TODO",
    payload: newTodo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const switchTodo = (id) => {
  return {
    type: "SWITCH_TODO",
    payload: id,
  };
};

const initialState = [
  {
    id: shortid.generate(),
    title: "제목1",
    body: "내용1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목2",
    body: "내용2",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목3",
    body: "내용3",
    isDone: true,
  },
];

// 리듀서
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "SWITCH_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
};

export default todosReducer;
