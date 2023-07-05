import {gql, useQuery} from "@apollo/client";
import {MouseEvent} from "react";

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
    const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
        //alert(`${event.target.id}가 작성한 글입니다`)
        alert(`${event.currentTarget.id}가 장성한 글입니다.`)
    }

    const qqq = () => {
        alert('클릭 타이틀')
    }

    return(
        <>
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={onClickAlert}>
                    <span>
                        <input type="checkbox"/>
                    </span>
                    <span style={spanStyle}>{el.number}</span>
                    <span style={spanStyle}>{el.title}</span>
                    <span style={spanStyle}>{el.writer}</span>
                </div>
            ))}
        </>
    )
}