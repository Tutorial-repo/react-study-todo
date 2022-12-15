import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState, useTodoDispatch } from './../../hooks/TodoContext';

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
  const todoList = useTodoState();

  return (
    <TodoListBlock>
      {todoList.map(todo => 
        <TodoItem 
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done} 
        />
      )}
    </TodoListBlock>
  )
}

export default TodoList;