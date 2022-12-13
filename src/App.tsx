import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoHeader from './component/TodoHeader';
import TodoTemplate from '../src/component/TodoTemplate';
import TodoList from "./component/TodoList";
import TodoCreate from './component/TodoCreate';
import TodoContext from './hooks/TodoContext';
import Users from "./component/user/Users";

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef; 
    }
`;

const App = () => {
    return ( 
        <Users />
    );
};

export default App;