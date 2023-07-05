import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

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
    const [myIndex, setMyIndex] = useState(-1)

    const { data} = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS); // useMutation과는 다르게 무조건 중괄호가 들어가야 합니다. 그리고 항상 안에는 data가 들어가야 합니다.

    const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
        setMyIndex(Number(event.currentTarget.id))
    }

    return (
        <div>
            {data?.fetchBoards.map((el,index) =>
                index !== myIndex ? (
                    <div key = {el._id}>
                        <span style={{ margin: "10px" }}>{el.title}</span>
                        <span style={{ margin: "10px" }}>{el.writer}</span>
                        <button id={String(index)} onClick={onClickEdit}>수정하기</button>
                    </div>
                ) : (
                    <input type="text"/>
                )
            )}
        </div>
    );
}
