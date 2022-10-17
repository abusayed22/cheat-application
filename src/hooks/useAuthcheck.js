import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { userLogin } from "../features/auth/authSlice";

export const useAuthcheck = () => {

    const dispatch = useDispatch();
    const [authCheck, setAuthCheck] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem("auth");

        if(localAuth) {
            const auth = JSON.parse(localAuth);
            
            if(auth.accessToken && auth.user) {
                dispatch(userLogin({
                    accessToken: auth.accessToken,
                    user: auth.user
                }))
            }
            setAuthCheck(true)
        }
    }, [])

    return authCheck
}