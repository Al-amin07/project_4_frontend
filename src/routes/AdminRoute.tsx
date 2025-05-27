import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/features/user/userSlice";
import { Navigate, useLocation } from "react-router";


const AdminRoute = ({ children }: { children: ReactNode }) => {
    const user = useAppSelector(selectUser)
    const location = useLocation()
    if (user && user?.role === 'admin') {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location?.pathname }} />
};

export default AdminRoute;