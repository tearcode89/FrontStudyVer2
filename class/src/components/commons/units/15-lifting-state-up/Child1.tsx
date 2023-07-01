import { useState } from "react";

export default function Child1(props: any): JSX.Element {
    // let count = 0; // let은 리액트 전용 html에서 변경을 감지하지 못함 (따라서, state를 써야됨)

    function onClickCountUp(): void {
        props.setCount((prev: number) => prev + 1);
    }

    return (
        <>
            <div>자식 1의 카운트: {props.count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!</button>
        </>
    );
}
