import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export async function getStaticProps() {
    const isAuthenticated = localStorage.getItem('ACCESS_TOKEN') !== null
    console.log('isAuthenticated : ', isAuthenticated)
}

const ProtectRoute = ({children}: any) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        console.log('isAuthenticated : ', localStorage.getItem('ACCESS_TOKEN') === null)

        if (localStorage.getItem('ACCESS_TOKEN') === null && router.pathname !== '/auth/login') {
            router.push('/auth/login')
        } else {
            setIsAuthenticated(true)
        }

    }, [])

    if (router.pathname === '/auth/login' || isAuthenticated)
        return children
    else
        return <div>Loading</div>
}

export default ProtectRoute