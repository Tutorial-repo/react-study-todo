import React from 'react';
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
            // <div>
            //     <ul>
            //         <li>
            //             <Link to="/">Home</Link>
            //         </li>
            //         <li>
            //             <Link to="/about">About</Link>
            //         </li>
            //         <li>
            //             <Link to="/profiles">Profiles</Link>
            //         </li>
            //     </ul>
            //     <hr />
            //     <Footer />
            //     <hr />
            //     <Routes>
            //         <Route path="/" element={<Home/>} />
            //         <Route path="/about/*" element={<About/>} />
            //         <Route path="/profiles/*" element={<Profiles/>}/>
            //         <Route path="*" element={<div></div>} />
            //     </Routes>
            // </div>

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