export default function MapElPage(): JSX.Element {
    // 1. 기본방법
    ['블루문','하이네켄','버드와이저','테라','삿포로'].forEach((el, index)=> {
        console.log('el: ', el);
        console.log('index: ', index)
    });

    // 2.

    // 3. map을 사용 (map은 리턴값이 있어야된다.)
    const myBeer= ['아사히','타이거','클라우드','칼스버그','칭따오'].map((el,index) => {
        console.log('나의맥주: ',el)
        console.log('index', index)
        return `${el} ,`
    })


    return(
        <>
            편의점 할인맥주 :
            {myBeer}
        </>
    )
}