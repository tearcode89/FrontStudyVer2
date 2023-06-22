import {useMutation, gql} from "@apollo/client";
import {useState} from "react";

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
    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const [MyFunction] = useMutation(MyGraphQLSetting) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성

    const onclickSubmit = async () => {
        const result = await MyFunction({
            variables: { // variables 이게 $ 역할을 한다. variables에 $로 적어줘도 되는듯...
                writer: writer,
                title: title,
                contents: contents,
            }
        })
        console.log(result);
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return(
        <>
            <div>
                작성자: <input type="text" onChange={onChangeWriter}/>
                제목: <input type="text" onChange={onChangeTitle}/>
                내용: <input type="text" onChange={onChangeContents}/>
                <button onClick={onclickSubmit}>GRAPHQL-API 요청하기</button>
            </div>
        </>
    )
}
