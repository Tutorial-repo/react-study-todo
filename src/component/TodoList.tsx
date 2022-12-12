import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';

/** style */
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

/** interface */
interface Props {
    children?: React.ReactNode;
}

function TodoList() {
    return (
      <TodoListBlock>
        <TodoItem text="프로젝트 생성하기" done={true} />
        <TodoItem text="Context 만들기" done={false} />
      </TodoListBlock>
    )
}

export default TodoList;