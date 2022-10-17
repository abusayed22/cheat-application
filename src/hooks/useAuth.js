import { useState } from "react"

export const useAuth = () => {
    const loggedUser = useState(state => state?.auth);
    const [auth,setAuth] = useState(false);

    if(loggedUser?.accessToken && loggedUser?.user) {
        setAuth(true)
    }
    return auth;
}
