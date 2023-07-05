import {useMutation, gql} from "@apollo/client";

// 아래 김채원 부분을 아무 숫자로 변경한 다음에 브라우저 네트워크 탭에서 Response 에러 메세지를 읽고 스스로 수정해보기
const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String, $createProductInput:CreateProductInput!){ # <- # graphQL의 타입을 적는 곳
        createProduct(seller: $seller, createProductInput: $createProductInput){  # 셀제 우가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const [createProduct] = useMutation(CREATE_PRODUCT) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성

    const onclickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "쿠팡",
                createProductInput: {
                    name: "지슈라",
                    detail: "로지텍의 끝판왕 마우스",
                    price: 130000
                },
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
