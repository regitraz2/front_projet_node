import React from "react";
import ProtectRoute from "@/components/ProtectRoute";
import Menu from "@/components/Menu";

interface IProps {
    title: string
    children: React.ReactNode
}

const BaseLayout = ({children, title}: IProps) => {
    return (
        <>
            <ProtectRoute/>
            <Menu/>
            {children}
        </>
    )
}

export default BaseLayout
