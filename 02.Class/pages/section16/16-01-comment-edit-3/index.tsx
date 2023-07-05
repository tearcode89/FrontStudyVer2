import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import CommentItem from "../../../src/components/commons/units/16-comment-item"

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

    const { data} = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS); // useMutation과는 다르게 무조건 중괄호가 들어가야 합니다. 그리고 항상 안에는 'data'가 들어가야 합니다.

    return (
        <div>
            {data?.fetchBoards.map((el) =>
                <CommentItem key={el._id} el={el}/>
            )}
        </div>
    );
}
