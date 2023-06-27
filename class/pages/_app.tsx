import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {useTheme} from "@mui/styles";
import {AppProps} from "next/app";
export default function App({Component,pageProps}: AppProps){

    const client = new ApolloClient({
        uri: "http://backend-example.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아볼거임
    })


    return (
        <div>
                <div>==========_app.js 컴포넌트의 시작 부분...==========</div>
                    <ApolloProvider client={client}>
                        <Component {...pageProps}/>
                    </ApolloProvider>
                <div>==========_app.js 컴포넌트의 마지막 부분입니다.==========</div>
        </div>
    )
}