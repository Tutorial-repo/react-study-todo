import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoHeader from './component/Todo/TodoHeader';
import TodoTemplate from '../src/component/Todo/TodoTemplate';
import TodoList from "./component/Todo/TodoList";
import TodoCreate from './component/Todo/TodoCreate';
import TodoContext from './hooks/TodoContext';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef; 
    }
`;

const App = () => {
    return ( 
        <TodoContext>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHeader />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoContext>
    );
};

export default App;