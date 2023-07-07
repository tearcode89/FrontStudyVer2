import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import type {ChangeEvent, MouseEvent} from "react";
import {useState} from "react";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int, $search: String) {
        fetchBoards(page: $page, search: $search) {
            _id
            writer
            title
            contents
        }
    }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
    const [search, setSearch] = useState("")

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        // 검색에서 refetch 를 할때, search 검색어가 refetch 에 이미 저장되어 있는 상태이므로 추가로 search를 포함하지 않아도 됨
        void refetch({ page: Number(event.currentTarget.id) });
    };

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.currentTarget.value)
    }

    const onClickSearch = (event: MouseEvent<HTMLButtonElement>): void => {
        void refetch({
            search, page: 1
        })
    }

    return (
        <div>
            검색어 입력: <input type="text" onChange={onChangeSearch}/>
            <button onClick={onClickSearch}>검색하기</button>
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
        </div>
    );
}
