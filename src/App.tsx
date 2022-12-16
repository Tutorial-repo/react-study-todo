import React from 'react';
import { BrowserRouter, Routes,  Route, Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import Profiles from './component/Profile/Profiles';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef; 
    }
`;

const App = () => {
    return ( 
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/profiles">Profiles</Link>
                    </li>
                </ul>
                <hr />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about/*" element={<About/>} />
                    <Route path="/profiles/*" element={<Profiles/>}/>
                    <Route path="*" element={<div></div>} />
                </Routes>
            </div>
    );
};

export default App;