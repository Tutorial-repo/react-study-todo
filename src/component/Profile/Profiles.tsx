import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';

import Profile from './Profile';



const Profiles = () : JSX.Element => {
  return (
    <div>
        <h3>유저목록</h3>
        <ul>
            <li><Link to="/profiles/ban">ban</Link></li>
            <li><Link to="/profiles/gildong">gildong</Link></li>
        </ul>
        <Routes>
            <Route path='/' element='유저를 선택해주세요' />
            <Route path=':username' element={<Profile/>} />
        </Routes>
    </div>
  );
};

export default Profiles;