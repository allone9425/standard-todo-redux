import { combineReducers, createStore } from "redux";
import todosReducer from "../modules/todos";
const rootReducer = combineReducers({
  todos: todosReducer,
});

const initialState = todosReducer(undefined, {});
const store = createStore(rootReducer, initialState);
export default store;
