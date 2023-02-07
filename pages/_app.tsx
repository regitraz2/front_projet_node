import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import ProtectRoute from "@/components/ProtectRoute";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <RecoilRoot>
                <ProtectRoute>
                    <Component {...pageProps} />
                </ProtectRoute>
            </RecoilRoot>
        </>
    )
}
