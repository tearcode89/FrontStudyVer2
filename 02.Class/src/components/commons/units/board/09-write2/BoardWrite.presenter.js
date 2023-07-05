import {RedInput,BlueButton} from './BoardWrite.styles'

export default function BoardWriteUI(props){

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