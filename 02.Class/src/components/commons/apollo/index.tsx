import {ApolloClient, ApolloLink, ApolloProvider, InMemoryCache} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../../../commons/stores";
import {useEffect} from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
    children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    // 1. 프리렌더링 예제 - process.browser 방법
    // if(process.browser){
    //     console.log('지금은 브라우저에서 실행되고 있습니다.')
    //     alert('정상 작동되고 있습니다.')
    //     const result = localStorage.getItem('accessToken')
    //     console.log(result);
    //     setAccessToken(result ?? '')
    // } else {
    //     console.log('지금은 yarn dev로 실행시킨 프로그램 내부입니다.')
    // }

    // 2. 프리렌더링 예제 - typeof window 방법
    // if(typeof window !== 'undefined'){
    //     console.log('나는 지금 브라우저다')
    // } else {
    //     console.log('지금 프론트엔드 서버다!!(즉 yarn dev로 실행시킨 내부이다.)')
    // }

    // 3. 프리렌더링 무시 useEffect 방법
    useEffect(() => {
        const result = localStorage.getItem('accessToken')
        setAccessToken(result ?? "")
        console.log('나는 지금 브라우저다...')
    },[])

    const uploadLink = createUploadLink({
        uri: "http://backend-practice.codebootcamp.co.kr/graphql",
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아볼거임
    });
    // prettier-ignore
    return (<>
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    </>);
}
