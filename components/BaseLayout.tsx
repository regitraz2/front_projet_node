import React from "react";
import Menu from "@/components/Menu";

interface IProps {
    title: string
    children: React.ReactNode
}

const BaseLayout = ({children, title}: IProps) => {
    return (
        <>
            <Menu/>
            {children}
        </>
    )
}

export default BaseLayout
