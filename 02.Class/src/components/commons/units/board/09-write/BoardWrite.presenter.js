import {RedInput,BlueButton} from './BoardWrite.styles'

export default function BoardWriteUI(props){

    return(
        <>
            <div>
                작성자: <input type="text" onChange={props.onChangeWriter}/>
                제목: <RedInput type="text" onChange={props.onChangeTitle}/>
                내용: <input type="text" onChange={props.onChangeContents}/>
                <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>GRAPHQL-API {props.isEdit ? "수정" : "등록"}하기</BlueButton>
            </div>
        </>
    )
}