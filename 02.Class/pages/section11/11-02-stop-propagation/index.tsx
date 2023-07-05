import {gql, useQuery} from "@apollo/client";
import {MouseEvent} from "react";
import Checkbox from "./checkbox";


const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`
export default function StaticMovedPage() {
    const { data } = useQuery(FETCH_BOARDS) // useMutation과는 다르게 무조건 중괄호가 들어가야 합니다. 그리고 항상 안에는 data가 들어가야 합니다.
    // 자바스크립트 코드가 순서대로 실행될 떄, 3번 코드를 마주치는 순간 useMutation과 axios와 다르게 기다리지 않고 바로 요청이 나간다.

    console.log(data?.fetchBoards)

    const spanStyle = {
        border: '1px solid black',
        margin: '10px'
    }

    const qqq1 = (event:MouseEvent<HTMLDivElement>) => {
        alert('1번 클릭')
    }

    const qqq4 = (event:MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation()
        alert('4번 클릭')
    }

    return(
        <>
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={qqq1}>
                    <Checkbox/>
                    <span style={spanStyle}>{el.number}</span>
                    <span style={spanStyle}>{el.title}</span>
                    <span style={spanStyle} onClick={qqq4}>{el.writer}</span>
                </div>
            ))}
        </>
    )
}