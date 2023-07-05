import { gql, useQuery } from "@apollo/client";
import type {
    IQuery,
    IQueryFetchBoardsArgs,
    IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";
import { useState } from "react";

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

const FETCH_BOARDS_COUNT = gql`
    query {
        fetchBoardsCount
    }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
    const [startPage, setStartPage] = useState(1);
    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS); // useMutation과는 다르게 무조건 중괄호가 들어가야 합니다. 그리고 항상 안에는 data가 들어가야 합니다.
    // 자바스크립트 코드가 순서대로 실행될 떄, 3번 코드를 마주치는 순간 useMutation과 axios와 다르게 기다리지 않고 바로 요청이 나간다.
    const { data: dataBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);

    const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

    console.log(data);
    console.log(dataBoardsCount);
    console.log(data?.fetchBoards);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
    };

    const onClickPrevPage = (): void => {
        if (startPage === 1) return;
        setStartPage(startPage - 10);
        void refetch({ page: startPage - 10 });
    };

    const onClickNextPage = (): void => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10);
            void refetch({ page: startPage + 10 });
        }
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}

            <span onClick={onClickPrevPage}>이전페이지</span>
            {new Array(10).fill("철수").map(
                (_, index) =>
                    index + startPage <= lastPage && (
                        <span
                            key={index + startPage}
                            id={String(index + startPage)}
                            onClick={onClickPage}
                            style={{ margin: "5px" }}
                        >
                            {index + startPage}
                        </span>
                    )
            )}
            <span onClick={onClickNextPage}>다음페이지</span>
        </div>
    );
}
