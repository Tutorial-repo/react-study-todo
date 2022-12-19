import { createStore } from "redux";

const initalState = {
    counter: 0,
    text: '',
    list: []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => {
    return {
        type: INCREASE
    };
};

const decrease = () => {
    return {
        type: DECREASE
    };
};

const changeText = (text) => {
    return {
        type: CHANGE_TEXT,
        text,
    };
};

const addToList = (item) => {
    return {
        type: ADD_TO_LIST,
        item,
    };
};

/** reducer */
function reducer(state = initalState, action){
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list : state.list.concat(action.item),
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

// store 내 상태가 변경될 때 마다 호출 됨
const listener = () => {
    const state = store.getState();
    console.log(state);
};

//구독
const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));