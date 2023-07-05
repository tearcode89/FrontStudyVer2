import {gql, useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import {buttonClasses} from "@mui/material";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            number
            title
            contents
        }
    }
`

export default function StaticMovedPage() {

    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_BOARD,{
        variables: { number: Number(router.query.number) }
    }) // useMutation과는 다르게 무조건 중괄호가 들어가야 합니다. 그리고 항상 안에는 data가 들어가야 합니다.
    // 자바스크립트 코드가 순서대로 실행될 떄, 3번 코드를 마주치는 순간 useMutation과 axios와 다르게 기다리지 않고 바로 요청이 나간다.

    console.log(data)

    const onClickMove = () => {
        router.push(`/section09/09-03-boards/${router.query.number}/edit`)
    }

    return(
        <>
            <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div>
            <div>작성자는: {data?.fetchBoard?.writer} 입니다.</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
            <button onClick={onClickMove}>수정하러가기</button>
        </>
    )
}