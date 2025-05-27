import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./user/UserDashboard";


const DashboardHomePage = () => {
    const user = useAppSelector(selectUser)

    return (
        <div>
            {
                user?.role === 'admin' ? <AdminDashboard /> : <UserDashboard />
            }
        </div>
    );
};

export default DashboardHomePage;