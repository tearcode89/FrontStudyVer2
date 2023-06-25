import {RedInput,BlueButton} from './BoardWrite.styles'

export default function BoardWriteUI(props){

    return(
        <>
            <div>
                작성자: <input type="text" onChange={props.bbb}/>
                제목: <RedInput type="text" onChange={props.ccc}/>
                내용: <input type="text" onChange={props.ddd}/>
                <BlueButton onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>
            </div>
        </>
    )
}