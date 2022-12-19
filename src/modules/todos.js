const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;

export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text,
    }
});

export const toogleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

//초기값
const inititalState = [
    // {
    //     id: 1,
    //     text: '',
    //     done: false,
    // }
];

export default function todos(state= inititalState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(todo => {
                //ID가 일치하는 경우, 버튼 토글
                todo.id === action.id
                    ? {...todo, done: !todo.done} 
                    : todo;
            })
        default:
            return state;
    }
};

