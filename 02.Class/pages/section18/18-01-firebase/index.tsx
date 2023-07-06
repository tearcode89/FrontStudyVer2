import { collection, addDoc, getDocs, getFirestore } from 'firebase/firestore/lite'
import {firebaseApp} from "../../../src/commons/libraries/firebase";

export default function FirebasePage(): JSX.Element{

    const onClickSubmit = (): void => {
        const board = collection(getFirestore(firebaseApp), 'board')

        void addDoc(board, {
            writer:"이강인",
            title:"드디어 마요르카 탈출",
            contents: "네이마르 음바페 딱대~"
        })
    }

    const onClickFetch = async (): Promise<void> => {
        const board = collection(getFirestore(firebaseApp), "board")
        const result = await getDocs(board)

        const datas = result.docs.map((el) => el.data())
        console.log(datas);
    }

    return(
        <>
            <button onClick={onClickSubmit}>등록하기</button>
            <button onClick={onClickFetch}>조회하기</button>
        </>
    )
}