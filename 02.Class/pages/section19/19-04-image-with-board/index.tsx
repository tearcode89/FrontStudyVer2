import type {ChangeEvent} from "react";
import {gql, useMutation} from "@apollo/client";
import {IMutation, IMutationUploadFileArgs} from "../../../src/commons/types/generated/types";
import {useRef, useState} from "react";
import {checkValidationFile} from "../../../src/commons/libraries/validation";

const MyGraphQLSetting = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){  
            _id
        }
    }
`

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`

export default function ImageUploadPage(): JSX.Element{
    const [imageUrl, setImageUrl] = useState("")
    const fileRef = useRef<HTMLInputElement>(null)

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)
    const onChangeFile = async(event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = event.target.files?.[0]; // 배열로 들어오는 이유 <input type="file" multiple/> 일때 여러개 드래그 가능
        console.log(file);

        const isValid = checkValidationFile(file)

        if(!isValid) return;

        const result = await uploadFile({variables: {file} })
        console.log(result.data?.uploadFile.url)
        // 이미지 파일의 주소는 아래 주소 + 콘솔창에 찍히는 문자열을 합치면 된다.
        setImageUrl(result.data?.uploadFile.url ?? "")
    };

    const onClickImage = (): void => {
        // document.getElementById('파일태그ID')?.click();
        fileRef.current?.click()
        console.log(fileRef) // 브라우저 콘솔창에서 꼭 확인해봐
    }

    /// //////////////////////////////////////


    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [MyFunction] = useMutation(MyGraphQLSetting) // 인수에 playground에서 아무거나 하나 들고온다. // playground에서 mutation을 미리 날려서 결괏값을 획득한 후 다음 코드 작성

    const onclickSubmit = async (): Promise<void> => {
        const result = await MyFunction({
            variables: { // variables 이게 $ 역할을 한다. variables에 $로 적어줘도 되는듯...
                createBoardInput: {
                    writer,
                    password: "1234",
                    title,
                    contents,
                    images: [imageUrl]
                }
            }
        })
        console.log(result);
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void=> {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
        setContents(event.target.value)
    }














    return(
        <>
            작성자: <input type="text" onChange={onChangeWriter}/><br/>
            제목: <input type="text" onChange={onChangeTitle}/><br/>
            내용: <input type="text" onChange={onChangeContents}/>
            <div style={{width: '100px', height: '100px', backgroundColor: 'lime'}} onClick={onClickImage}>이미지 선택</div>
            <input
                style={{display: "none"}}
                type="file" onChange={ onChangeFile }
                ref={fileRef }
                accept="image/jpeg,image/png"
            />
            <img src={`https://storage.googleapis.com/${imageUrl}`} alt=""/>
            <button onClick={onclickSubmit}>GRAPHQL-API 요청하기</button>
        </>
    )
}