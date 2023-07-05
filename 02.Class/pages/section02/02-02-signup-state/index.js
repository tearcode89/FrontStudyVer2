import {useState} from "react";
import {MyError} from "../../../styles/02-02-emotion";

export default function SignUpStatePage(){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ emailError, setEmailError ] = useState('')

    function onChangeEmail(e){ // onChangeEmail 같은 함수는 이벤트를 다루는 함수라고 해서 보통 이벤트 핸들러 함수라고 부른다.
        console.log(e) // 나의 행동
        console.log(e.target) // 내가 어떤 행동을 했을떄 e.target은 그 행동의 대상이 된다.
        console.log(e.target.value) // 작동된 태그에 입력된 값

        setEmail(e.target.value);
    }

    function onChangePassword(e){
        setPassword(e.target.value)
    }

    function onClickSignUp(e){
        console.log(email + "이메일값이 저장되었습니다.") // 진짜 포장이 잘 됐는지 확인해보기
        console.log(password + "비빌번호값이 저장되었습니다.") // 진짜 포장이 잘 됐는지 확인해보기

        // [qqq]. 검증하기
        if(email.includes("@") === false){
            //alert('이메일이 옳바르지 않습니다. @가 없습니다.')
            // document.getElementById("myerror").innerText = '이메일이 올바르지 않습니다!! @가 없음!!' => 옛날방식
            setEmailError('이메일이 올바르지 않습니다!! @가 없음')
        } else {
        // 2. 백엔드 컴퓨터에 보내주기 (백엔드 개발자가 만든 함수, 즉, API)

        // 3. 성공알람 보여주기
        alert("회원가입을 축하합니다.")
        }
    }

    return(
        <>
            <div>
                이메일: <input type="text" onChange={onChangeEmail}/>
                {/*<div id="myerror"></div> => 옛날방식*/}
                <MyError>{emailError}</MyError>
                비밀번호: <input type="password" onChange={onChangePassword}/>
                <button onClick={onClickSignUp}>회원가입</button>
            </div>
        </>
    )
}