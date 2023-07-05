import {useMutation, gql} from "@apollo/client";
import {ChangeEvent, useState} from "react";

const MyGraphQLSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){  
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(): JSX.Element {
    const [inputs, setInputs] = useState({
        writer:"",
        title:"",
        contents:""
    })

    const [MyFunction] = useMutation(MyGraphQLSetting) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성

    const onclickSubmit = async (): Promise<void> => {
        const result = await MyFunction({
            variables: { // variables 이게 $ 역할을 한다. variables에 $로 적어줘도 되는듯...
                ...inputs
            }
        })
        console.log(result);
    }

    const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputs((prev) => ({
            ...prev,
            [event.target.id]:event.target.value
        }))
    }

    return<>
        <div>
            작성자: <input type="text" id="writer" onChange={onChangeInputs}/>
            제목: <input type="text" id="title" onChange={onChangeInputs}/>
            내용: <input type="text" id="contents" onChange={onChangeInputs}/>
            <button onClick={onclickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    </>
}
