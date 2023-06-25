import {useState} from "react";
import {useMutation} from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import {MyGraphQLSetting} from "./BoardWrite.queries";

export default function BoardWrite(){

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
            <BoardWriteUI
                aaa={onclickSubmit}
                bbb={onChangeWriter}
                ccc={onChangeTitle}
                ddd={onChangeContents}
            />
        </>
    )
}