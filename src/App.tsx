import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from '../src/component/TodoTemplate';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef; 
    }
`;

const App = () => {
    return ( 
    <>
        <GlobalStyle />
        <TodoTemplate />
    </> );
};

export default App;