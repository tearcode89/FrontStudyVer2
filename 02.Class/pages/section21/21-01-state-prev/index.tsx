import { useState } from 'react';

export default function CounterLetDocumentPage(): JSX.Element {
    // let count = 0; // let은 리액트 전용 html에서 변경을 감지하지 못함 (따라서, state를 써야됨)
    const [ count, setCount ] = useState(0);
    function onClickCountUp(): void{
        // 1. 화살표 함수
        setCount((prev) => prev + 1)
    }

    function onClickCountDown(): void{
        // 2. 함수선언식
        setCount(function(prev: number): number{
            // 로직 추가 가능
            // if() 등
            // for() 등
            // ...
            return prev - 1;
        })
    }


    return(
        <>
            <div id="qqq">{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!</button>
            <button onClick={onClickCountDown}>카운트 내리기!!</button>
        </>

    )
}