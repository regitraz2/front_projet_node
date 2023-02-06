import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const ProtectRoute = () => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem('ACCESS_TOKEN') !== null)

        console.log('isAuthenticated : ', isAuthenticated)
        if (!isAuthenticated) {
            router.push('/auth/login')
        }
    })

    return null
}

export default ProtectRoute