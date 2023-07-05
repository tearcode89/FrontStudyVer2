import {useState} from "react";
import {useMutation} from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import {MyGraphQLSetting} from "./BoardWrite.queries";

export default function BoardWrite(){
    const [isActive, setIsActive] = useState(false);

    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const [MyFunction] = useMutation(MyGraphQLSetting) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성

    const onClickSubmit = async () => {
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

        if(event.target.value && title && contents) {
            setIsActive(true);
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)

        if(writer && event.target.value && contents) {
            setIsActive(true);
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(writer && title && event.target.value) {
            setIsActive(true);
        }
    }

    return(
        <>
            <BoardWriteUI
                onClickSubmit={onClickSubmit} // aaa => onClickSubmit 으로 변경
                onChangeWriter={onChangeWriter} // bbb => onChangeWriter 으로 변경
                onChangeTitle={onChangeTitle} // ccc => onChangeTitle 으로 변경
                onChangeContents={onChangeContents} // ddd => onChangeContents 으로 변ㅑ
                isActive={isActive}
            />
        </>
    )
}