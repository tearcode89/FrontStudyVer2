import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS); // useMutation과는 다르게 무조건 중괄호가 들어가야 합니다. 그리고 항상 안에는 data가 들어가야 합니다.
    // 자바스크립트 코드가 순서대로 실행될 떄, 3번 코드를 마주치는 순간 useMutation과 axios와 다르게 기다리지 않고 바로 요청이 나간다.

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
    };
    // const onClickPage1 = (event: MouseEvent<HTMLSpanElement>): void => {
    //     void refetch({ page: Number(event.currentTarget.id) });
    // };
    // const onClickPage2 = (event: MouseEvent<HTMLSpanElement>): void => {
    //     void refetch({ page: Number(event.currentTarget.id) });
    // };
    // const onClickPage3 = (event: MouseEvent<HTMLSpanElement>): void => {
    //     void refetch({ page: Number(event.currentTarget.id) });
    // };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}

            {new Array(10).fill(1).map((el, index) => (
                <span
                    key={index + 1}
                    id={String(index + 1)}
                    onClick={onClickPage}
                >
                    {index + 1}
                </span>
            ))}

            {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => ( */}
            {/*    <span */}
            {/*        key={index + 1} */}
            {/*        id={String(index + 1)} */}
            {/*        onClick={onClickPage} */}
            {/*    > */}
            {/*        {index + 1} */}
            {/*    </span> */}
            {/* ))} */}

            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => ( */}
            {/*    <span */}
            {/*        key={el} */}
            {/*        id={String(el)} */}
            {/*        onClick={onClickPage} */}
            {/*    > */}
            {/*        {el} */}
            {/*    </span> */}
            {/* ))} */}

            {/* <span id="1" onClick={onClickPage1}>1</span> */}
            {/* <span id="2" onClick={onClickPage2}>2</span> */}
            {/* <span id="3" onClick={onClickPage3}>3</span> */}
        </div>
    );
}
