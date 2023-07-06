import type {ChangeEvent} from "react";
import {gql, useMutation} from "@apollo/client";
import {IMutation, IMutationUploadFileArgs} from "../../../src/commons/types/generated/types";
import {useState} from "react";

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`

export default function ImageUploadPage(): JSX.Element{
    const [imageUrl, setImageUrl] = useState("")

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)
    const onChangeFile = async(event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = event.target.files?.[0]; // 배열로 들어오는 이유 <input type="file" multiple/> 일때 여러개 드래그 가능
        console.log(file);

        const result = await uploadFile({variables: {file} })
        console.log(result.data?.uploadFile.url)
        // 이미지 파일의 주소는 아래 주소 + 콘솔창에 찍히는 문자열을 합치면 된다.
        setImageUrl(result.data?.uploadFile.url ?? "")
    };


    return(
        <>
            <input type="file" onChange={onChangeFile}/>
            <img src={`https://storage.googleapis.com/${imageUrl}`} alt=""/>
        </>
    )
}