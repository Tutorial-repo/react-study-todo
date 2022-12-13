import React, {useState, useEffect, useReducer, Dispatch} from 'react'
import axios from 'axios';

type State = {
    loading: boolean;
    data?: {};
    error?: string;
} 
type Action =
  | { type: 'LOADING'; }
  | { type: 'SUCCESS'; data: {}; }
  | { type: 'ERROR'; error: string; };
type UsersDispatch = Dispatch<Action>;


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

const reducer = (state : State, action : Action) : State => {
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                data: undefined,
                error: undefined,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: undefined,
            };
        case 'ERROR':
            return {
                loading: false,
                data: undefined,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type`);
    }

}

function Users() {
    const [state, dispatch] = useReducer(reducer, initState);

    const fetchUser =async () => {
        dispatch({type: 'LOADING'});
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');    
            dispatch({type: 'SUCCESS', data: response.data});

        }catch(e : any){
            dispatch({type: 'ERROR', error: e});
        }
    };

    useEffect(() => {
        fetchUser();
    },[]);

    const {loading, error, data: users} = state;
    if(loading) return (<div>Loading...</div>);
    if(error) return (<div>에러가 발생했습니다.</div>);
    if(!users) return null;

    return (
        <>
            <ul>
                {users.map(user => 
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                )}
            </ul>
            <button onClick={fetchUser}>새로고침</button>
        </>
    )
}

export default Users;