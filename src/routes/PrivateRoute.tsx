import { Navigate, useLocation } from "react-router";
import { selectUser } from "../redux/features/user/userSlice";
import { useAppSelector } from "../redux/hooks";
import { ReactNode } from "react";


const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const location = useLocation()
    const user = useAppSelector(selectUser)
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location?.pathname }} />


};

export default PrivateRoute;