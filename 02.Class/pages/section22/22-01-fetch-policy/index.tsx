import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import {useState} from "react";
import FetchPolicyExample from "../../../src/components/commons/units/22-fetch-policy";
import {useRouter} from "next/router";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
        }
    }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const { data} = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS); // useMutation과는 다르게 무조건 중괄호가 들어가야 합니다. 그리고 항상 안에는 data가 들어가야 합니다.
    // 자바스크립트 코드가 순서대로 실행될 떄, 3번 코드를 마주치는 순간 useMutation과 axios와 다르게 기다리지 않고 바로 요청이 나간다.

    // 1. 새로운 컴포넌트 등장시에도 글로벌 스테이트 값이 유지되는지?
    const onClickIsOpen = (): void => {
        setIsOpen(true);
    }

    // 2. 새로운 페이지 이동시에도 글로벌 스테이트 값이 유지되나요?
    const onClickMove = (): void => {
        void router.push("/section22/22-01-fetch-policy-moved")
    }

    return (
        <div>
            <button onClick={onClickIsOpen}>
                새로운 컴포넌트 소환
            </button>
            {isOpen && <FetchPolicyExample/>}
            ================================
            <button onClick={onClickMove}>
                페이지 이동할거야
            </button>
        </div>
    );
}
