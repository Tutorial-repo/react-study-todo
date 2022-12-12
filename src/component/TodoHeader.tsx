import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './../hooks/TodoContext';

/** style */
const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

/** interface */
interface HeaderProps {
    date: string;
    day: string;
    todo: number;
};

const TodoHeader = () => {
    return (
        <TodoHeadBlock>
            <h1>2022년 12월 12일</h1>
            <div className='day'>월요일</div>
            <div className='tasks-left'>목록 1개 남음</div>
        </TodoHeadBlock>
    );
};

export default TodoHeader;