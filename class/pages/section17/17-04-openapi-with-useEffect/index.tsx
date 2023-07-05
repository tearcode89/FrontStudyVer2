import axios from 'axios'
import {useEffect, useState} from "react";
export default function RestGetPage(): JSX.Element {

    const [dog, setDog] = useState("");

    useEffect(()=>{
        const onClickSync = async(): Promise<void> =>  {
            const result = await axios.get('https://dog.ceo/api/breedz/image/random')
            setDog(result.data.message); // 사진 주소
        }
        void onClickSync();
    },[])

    return(
        <div>
            <img src={dog} alt='dog Image'/>
            {/* <button onClick={onClickSync}>REST API (동기) 요청하기</button> */}
        </div>
    )
}