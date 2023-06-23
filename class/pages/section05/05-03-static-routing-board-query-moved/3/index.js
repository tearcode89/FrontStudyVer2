import {gql, useQuery} from "@apollo/client";

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:14095){
            number
            writer
            title
            contents
        }
    }
`


export default function StaticMovedPage() {
    const { data } = useQuery(FETCH_BOARD) // useMutation과는 다르게 무조건 중괄호가 들어가야 합니다. 그리고 항상 안에는 data가 들어가야 합니다.
    // 자바스크립트 코드가 순서대로 실행될 떄, 3번 코드를 마주치는 순간 useMutation과 axios와 다르게 기다리지 않고 바로 요청이 나간다.

    console.log(data)

    return(
        <>
            <div>3번 게시글로 이동이 완료되었습니다.</div>
            <div>작성자는: {data ? data.fetchBoard.writer : "로딩중입니다."} 입니다.</div>
            <div>제목: {data ? data.fetchBoard.title : "로딩중입니다."}</div>
            <div>내용: {data ?  data.fetchBoard.contents : "로딩중입니다."}</div>
        </>
    )
}