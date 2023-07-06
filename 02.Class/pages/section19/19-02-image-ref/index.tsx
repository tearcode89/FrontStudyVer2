import type {ChangeEvent} from "react";
import {gql, useMutation} from "@apollo/client";
import {IMutation, IMutationUploadFileArgs} from "../../../src/commons/types/generated/types";
import {useRef, useState} from "react";

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


    return(
        <>
            <div style={{width: '100px', height: '100px', backgroundColor: 'lime'}} onClick={onClickImage}>이미지 선택</div>
            <input style={{display: "none"}} type="file" onChange={ onChangeFile } ref={fileRef }/>
            <img src={`https://storage.googleapis.com/${imageUrl}`} alt=""/>
        </>
    )
}