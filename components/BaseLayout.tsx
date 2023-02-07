import React from "react";
import Menu from "@/components/Menu";
import Head from "next/head";
import {useRouter} from "next/router";
import * as process from "process";

interface IProps {
    title: string
    children: React.ReactNode
}

const BaseLayout = ({children, title}: IProps) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - {title}</title>
            </Head>

            <div className="bg-gray-50 dark:bg-gray-900">
                {router.pathname !== '/auth/login' && <Menu/>}
                {children}
            </div>
        </>
    )
}

export default BaseLayout
