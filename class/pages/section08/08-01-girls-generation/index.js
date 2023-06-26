// 컴포넌트 위에 만든 이유: 컴포넌트가 리랜더링 되어도 다시 안만들어짐 - 효율적....
const NAME = [
    {number: 1, title: '태연'},
    {number: 2, title: '윤아'},
    {number: 3, title: '유리'},
    {number: 4, title: '티파니'},
    {number: 5, title: '수영'},
    {number: 6, title: '효연'},
    {number: 7, title: '써니'},
    {number: 8, title: '서현'},
]

export default function GirlsGeneration() {
    // 1. 가장 기본 예제
    const aaa = [<div>태연</div>, <div>윤아</div>, <div>서현</div>]
    // 2. 실무 백엔드 데이터 예제
    const bbb = NAME.map(el => <div>{el.number} {el.title}</div>)

    return (
        <>
            <div>{aaa}</div>
            "======================================="
            <div>{bbb}</div>
            "======================================="
            <div>{NAME.map(el => <div>{el.number} {el.title}</div>)}</div> {/* 실무에서는 그냥 위의 map 코드를 바로 여기다가 직설적으로 뿌려준다.*/}
        </>
    )
}

