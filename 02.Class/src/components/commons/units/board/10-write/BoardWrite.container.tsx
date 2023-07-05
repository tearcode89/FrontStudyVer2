import {useState, ChangeEvent} from "react";
import {useMutation} from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import {MyGraphQLSetting, UPDATE_BOARD} from "./BoardWrite.queries";
import {useRouter} from "next/router";
import {IBoardWriteProps, Imyvariables} from "./BoardWrite.types";
export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [MyFunction] = useMutation(MyGraphQLSetting) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성
    const [updateBoard] = useMutation(UPDATE_BOARD) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성

    const onClickSubmit = async () => {
        const result = await MyFunction({
            variables: { // variables 이게 $ 역할을 한다. variables에 $로 적어줘도 되는듯...
                writer: writer,
                title: title,
                contents: contents,
            }
        })
        console.log(result);
        router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async() => {


        const myvariables: Imyvariables = {
            number: Number(router.query.number)
        }

        if(writer) myvariables.writer = writer

        if(title) myvariables.title = title

        if(contents) myvariables.contents = contents

        // 여기서 수정하기를 합시다.
        const result = await updateBoard({
            variables: myvariables
        })
        console.log(result)
        router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    }

    return(
        <>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
                data={props.data} // undefined 이거나, data 이거나 둘 중 하나
            />
        </>
    )
}