import {useMutation, gql} from "@apollo/client";
import {useRouter} from "next/router";

// 아래 김채원 부분을 아무 숫자로 변경한 다음에 브라우저 네트워크 탭에서 Response 에러 메세지를 읽고 스스로 수정해보기
const MyGraphQLSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){  
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const router = useRouter();

    const [MyFunction] = useMutation(MyGraphQLSetting) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성

    const onclickSubmit = async () => {
        // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 내용을 모두 무시하고, catch에 있는 내용을 실행함.

        try{
            const result = await MyFunction({
                variables: { // variables 이게 $ 역할을 한다. variables에 $로 적어줘도 되는듯...
                    writer: "또복이",
                    title: "안녕하세요!!!",
                    contents: "막내입니다.",
                }
            })
            console.log(result);
            //console.log(result.data.createBoard.number)
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
        }catch(error){
            alert(error.message)
        }
    }

    return(
        <>
            <button onClick={onclickSubmit}>GRAPHQL-API 요청하기</button>
        </>
    )
}
