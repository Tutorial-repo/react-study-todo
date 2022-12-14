import React from 'react'
import axios from 'axios';
import useAsync from './../../hooks/useAsync';

type Props = {
    id: number;
}

async function getUser(id : number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

function User({id}: Props) {
    const [state] = useAsync(()=> getUser(id), [id]);
    const {loading, error, data: user} = state;

    if(loading) return (<div>Loading...</div>);
    if(error) return (<div>에러가 발생했습니다.</div>);
    if(!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    );
}

export default User;