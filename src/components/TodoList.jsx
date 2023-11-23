import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
const TodoList = ({ isDone }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <h1>{isDone ? "완료" : "진행중"}</h1>
      {todos
        .filter((item) => {
          return item.isDone === isDone;
        })
        .map((todo) => {
          return (
            <Box key={todo.id}>
              {/* <h3>{todo.id}</h3> */}
              <h2>{todo.title}</h2>
              <p>{todo.body}</p>
              <p>{todo.isDone.toString()}</p>
              <button
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  dispatch(switchTodo(todo.id));
                }}
              >
                {isDone ? "취소" : "완료"}
              </button>
            </Box>
          );
        })}
    </div>
  );
};

export default TodoList;

const Box = styled.div`
  background-color: #eee;
  width: 300px;
  h2 {
    color: skyblue;
    margin-left: 10px;
  }
  p {
    margin-left: 10px;
  }
  button {
    padding: 10px 20px;
    background-color: aliceblue;
    border: none;
    margin: 10px;
  }
`;
