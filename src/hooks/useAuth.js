import { useSelector } from "react-redux"

export const useAuth = () => {
    const user = useSelector(state => state.auth)

    if (user?.accessToken && user?.user) {
        return true
    } else {
        return false
    }
}
