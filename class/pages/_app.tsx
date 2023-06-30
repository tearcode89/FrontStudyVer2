import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout/index";
import ApolloSetting from "../src/components/commons/apollo";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div>
            <div>==========_app.js 컴포넌트의 시작 부분...==========</div>
            <ApolloSetting>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloSetting>
            <div>==========_app.js 컴포넌트의 마지막 부분입니다.==========</div>
        </div>
    );
}
