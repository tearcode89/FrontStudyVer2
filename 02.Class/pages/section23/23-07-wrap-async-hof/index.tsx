import {useMutation, gql} from "@apollo/client";
import {wrapAsync} from "../../../src/commons/libraries/asyncFunc";

// 아래 김채원 부분을 아무 숫자로 변경한 다음에 브라우저 네트워크 탭에서 Response 에러 메세지를 읽고 스스로 수정해보기
const MyGraphQLSetting = gql`
    mutation{
        createBoard(writer:"김채원", title:"르세라핌입니다", contents:"저는 단발이 잘 어울립니다"){  
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(): JSX.Element {

    const [MyFunction] = useMutation(MyGraphQLSetting) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성

    const onclickSubmit = async (): Promise<void> => {
        const result = await MyFunction()
        console.log(result);
    }

    return(
        <>
            <button onClick={wrapAsync(onclickSubmit)}>GRAPHQL-API 요청하기</button>
        </>
    )
}
