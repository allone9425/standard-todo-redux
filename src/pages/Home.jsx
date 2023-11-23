import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import TodoList from "../components/TodoList";
import initialState, { addTodo } from "../redux/modules/todos";
const Home = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [isTodoShown, setIsTodoShown] = useState(true);
  const [isDoneTodoShown, setIsDoneTodoShown] = useState(true);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(addTodo(initialState));
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setBody("");
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">입력</button>
        </form>
      </div>
      <div>
        {isTodoShown === true ? <TodoList todos={todos} isDone={false} /> : ""}
        {isDoneTodoShown === true ? (
          <TodoList todos={todos} isDone={true} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
