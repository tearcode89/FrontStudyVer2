import { MyEmailInput, MyEmail } from "../../../styles/01-02-emotion";

export default function EmotionPage() {
    
    
    return(
        <>
            <div>
                <MyEmail>이메일 :</MyEmail>
                <MyEmailInput type="text"/>
                <button>클릭하세요!!</button>
                <br/>
                <img src="/Ddobok.png" alt="cat"/>
            </div>
        </>
    )
}