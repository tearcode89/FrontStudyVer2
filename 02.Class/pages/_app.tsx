import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout/index";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import {RecoilRoot} from "recoil";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <div>==========_app.js 컴포넌트의 시작 부분...==========</div>
                <RecoilRoot>
                    <ApolloSetting>
                        <>
                            <Global styles={globalStyles} />
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </>
                    </ApolloSetting>
                </RecoilRoot>
            <div>==========_app.js 컴포넌트의 마지막 부분입니다.==========</div>
        </div>
    );
}
