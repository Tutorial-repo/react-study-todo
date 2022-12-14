import { useReducer, useEffect } from 'react';

//TODO 제거
const initState = {
    loading: false,
    data: undefined,
    error: undefined,
}

function reducer(state, action){
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

function useAsync(callback, deps = [], skip = false){
    const [state, dispatch] = useReducer(reducer, initState);

    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        try{
            const data = await callback();    
            dispatch({type: 'SUCCESS', data});

        }catch(e){
            dispatch({type: 'ERROR', error: e});
        }
    };

    useEffect(() => {
        if(skip) return;
        fetchData();
    },deps);

    return [state, fetchData];
}

export default useAsync;