import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Counter, {CallbackProps} from './Counter';
import { increase, decrease, setDiff } from '../../modules/counter';

interface CounterProps {
    counter : {
        number: string;
        diff: number;
    }
}

type Props = {}
// presentational component (2019년 기준 비권고)
const CounterContainer = ({}: Props) => {
    const {number, diff} = useSelector((state : CounterProps) => { 
        return{
            number: state.counter.number,
            diff: state.counter.diff,
        }
    });

    //useDispatch : 리덕스 스토어의 dispatch를 함수에서 사용가능하게 해주는 hook
    const dispatch = useDispatch();
    
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff : number) => dispatch(setDiff(diff));

    return (
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}
export default CounterContainer;