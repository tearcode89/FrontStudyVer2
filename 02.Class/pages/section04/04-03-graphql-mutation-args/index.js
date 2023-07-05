import {useMutation, gql} from "@apollo/client";

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

    const [MyFunction] = useMutation(MyGraphQLSetting) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성

    const onclickSubmit = async () => {
        const result = await MyFunction({
            variables: { // variables 이게 $ 역할을 한다. variables에 $로 적어줘도 되는듯...
                writer: "홍은채",
                title: "안녕하세요!!!",
                contents: "막내입니다."
            }
        })
        console.log(result);
    }

    return(
        <>
            <button onClick={onclickSubmit}>GRAPHQL-API 요청하기</button>
        </>
    )
}
