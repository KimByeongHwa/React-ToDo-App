import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="출근카드 찍기" done={true} />
      <TodoItem text="React 공부하기" done={false} />
      <TodoItem text="업무일지 보고하기" done={false} />
      <TodoItem text="퇴근카드 찍기" done={false} />
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default TodoList;
