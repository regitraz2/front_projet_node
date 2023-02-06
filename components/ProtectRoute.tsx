import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const ProtectRoute = () => {
    const router = useRouter()
    const [isAuthenticated] = useState(false)

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/auth/login')
        }
    }, [isAuthenticated])

    return (<></>)
}

export default ProtectRoute