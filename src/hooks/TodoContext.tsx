import React, {useReducer, createContext, useContext, useRef, Dispatch} from 'react'

/** interface */
type Todo = {
    id: number;
    text: string;
    done: boolean;
};
type State = Todo[];
type Action =
  | { type: 'CREATE'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };
type TodosDispatch = Dispatch<Action>;

const initialTodos : State = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    }
    
];

/** Event 
 * 1. 컨텐츠 생성
 * 2. 입력창 활성화 & 비활성화
 * 3. 컨텐츠 삭제
*/ 
const todoReducer = (state : State, action: Action): State => {
    switch (action.type){
        case 'CREATE': 
            const nextId = Math.max(...state.map(todo => todo.id)) + 1;
            return state.concat({
                id: nextId,
                text: action.text,
                done: false
            });
        case 'TOGGLE': 
            return state.map(todo => 
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                );
        case 'REMOVE': 
            return state.filter(todo => todo.id !== action.id);
        default: 
            throw new Error(`Unhandled action type`);
    }
};

const TodoStateContext = createContext<State>(initialTodos);
const TodoDispatchContext = createContext<TodosDispatch>(() => null);

//chilren = React.ReactNode
function TodoContext({children}: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                    {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export const useTodoState = () => useContext(TodoStateContext);
export const useTodoDispatch = () => {
    const dispatch = useContext(TodoDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
};

export default TodoContext;