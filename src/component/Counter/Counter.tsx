import React from 'react';
import { Dispatch } from 'redux';

export interface CallbackProps{
    counter: number;
    text: string;
    list: [];
}

interface Props {
    number: string;    
    diff: number;
    onIncrease(): void;
    onDecrease(): void;
    onSetDiff(): void;
}

const Counter = ({number, diff, onIncrease, onDecrease, onSetDiff}: Props) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onSetDiff}></input>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;