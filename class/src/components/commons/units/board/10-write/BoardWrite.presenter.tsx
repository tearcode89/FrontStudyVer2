import {RedInput,BlueButton} from './BoardWrite.styles'
import {IBoardUIProps} from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardUIProps){

    return(
        <>
            <div>
                작성자: <input type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/>
                제목: <RedInput type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/>
                내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/>
                <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>GRAPHQL-API {props.isEdit ? "수정" : "등록"}하기</BlueButton>
            </div>
        </>
    )
}