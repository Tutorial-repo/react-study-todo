import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoHeader from './component/TodoHeader';
import TodoTemplate from '../src/component/TodoTemplate';
import TodoList from "./component/TodoList";
import TodoCreate from './component/TodoCreate';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef; 
    }
`;

const App = () => {
    return ( 
    <>
        <GlobalStyle />
        <TodoTemplate>
            <TodoHeader />
            <TodoList />
            <TodoCreate />
        </TodoTemplate>
    </> );
};

export default App;