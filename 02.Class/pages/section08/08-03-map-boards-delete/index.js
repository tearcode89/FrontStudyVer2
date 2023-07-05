import {gql, useMutation, useQuery} from "@apollo/client";
import {divide} from "lodash";

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

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`


export default function StaticMovedPage() {
    const { data } = useQuery(FETCH_BOARDS) // useMutation과는 다르게 무조건 중괄호가 들어가야 합니다. 그리고 항상 안에는 data가 들어가야 합니다.
    // 자바스크립트 코드가 순서대로 실행될 떄, 3번 코드를 마주치는 순간 useMutation과 axios와 다르게 기다리지 않고 바로 요청이 나간다.

    const [deleteBoard] = useMutation(DELETE_BOARD);

    console.log(data?.fetchBoards)

    const th_tr_Style = {
        border: '1px solid black',
        textAlign: 'center'
    }

    const onClickDelete = (event) => {
        deleteBoard({
            variables: {number: Number(event.target.id)},
            refetchQueries:[{query:FETCH_BOARDS}]
        })
    }

    return(
        <>
            {/*<div>1번 게시글로 이동이 완료되었습니다.</div>*/}
            {/*<div>작성자는: {data ? data.fetchBoards.writer : "로딩중입니다."} 입니다.</div>*/}
            {/*<div>제목: {data ? data.fetchBoards.title : "로딩중입니다."}</div>*/}
            {/*<div>내용: {data ?  data.fetchBoards.contents : "로딩중입니다."}</div>*/}

            {/*{data?.fetchBoards.map(el => (*/}
            {/*    <div>*/}
            {/*        <span>*/}
            {/*            <input type="checkbox"/>*/}
            {/*        </span>*/}
            {/*        <span style={spanStyle}>{el.number}</span>*/}
            {/*        <span style={spanStyle}>{el.title}</span>*/}
            {/*        <span style={spanStyle}>{el.writer}</span>*/}
            {/*    </div>*/}
            {/*))}*/}

            <table>
                <thead>
                    <tr>
                        <th style={th_tr_Style}>
                            체크여부
                        </th>
                        <th style={th_tr_Style}>
                            글번호
                        </th>
                        <th style={th_tr_Style}>
                            제목
                        </th>
                        <th style={th_tr_Style}>
                            내용
                        </th>
                        <th style={th_tr_Style}>
                            삭제버튼
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/*특별한 이유가 없으면? Fragment로 감싸자 <div>는 1개를 더 그려야 하기 떄문에 조금이나마 성능에 영향이 간다.*/}
                    {/*프래그먼트에 키값을 주려면 다음과 같이 해야하고 프래그먼트를 따로 임포트 해와야 한다. <Fragment key={1}>.*/}
                    {data?.fetchBoards.map((el, index) => (
                        <tr key={el.number}> {/*인덱스는 게시글을 삭제할때 다음 게시글이 올라오면서 기존 인덱스와 동일한 값을 갖게됨.. 즉 유일하지 않음*/}
                            <td style={th_tr_Style}>
                                <input type="checkbox"/>
                            </td>
                            <td style={th_tr_Style}>
                                {el.number}
                            </td>
                            <td style={th_tr_Style}>
                                {el.title}
                            </td>
                            <td style={th_tr_Style}>
                                {el.contents}
                            </td>
                            <td style={th_tr_Style}>
                                <button id={el.number} type="checkbox" onClick={onClickDelete}>삭제</ button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}