import {ApolloClient, ApolloLink, ApolloProvider, InMemoryCache} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../../../commons/stores";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
    children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const [accessToken] = useRecoilState(accessTokenState)

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
