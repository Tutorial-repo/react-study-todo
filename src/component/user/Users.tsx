import React, {useState, useEffect, useReducer, Dispatch} from 'react'
import axios from 'axios';
import useAsync from './../../hooks/useAsync';
import User from './User';

type State = {
    loading: boolean;
    data?: {};
    error?: string;
} 
type Action =
  | { type: 'LOADING'; }
  | { type: 'SUCCESS'; data: {}; }
  | { type: 'ERROR'; error: string; };

/**
 * 상태관리
 * 1. 요청결과
 * 2. 로딩
 * 3. 에러
 */
const initState : State = {
    loading: false,
    data: undefined,
    error: undefined,
}

async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

function Users() {
    const [userId, setUserId] = useState();
    const [state, refetch] = useAsync(getUsers, [], true);
    const {loading, error, data: users} = state;

    if(loading) return (<div>Loading...</div>);
    if(error) return (<div>에러가 발생했습니다.</div>);
    if(!users) return (<button onClick={refetch}>불러오기</button>);

    return (
        <>
            <ul>
                {users.map(user => 
                    <li key={user.id} onClick={() => setUserId(user.id)}>
                        {user.username} ({user.name})
                    </li>
                )}
            </ul>
            <button onClick={refetch}>새로고침</button>
            { userId && <User id={userId}/>}
        </>
    )
}

export default Users;