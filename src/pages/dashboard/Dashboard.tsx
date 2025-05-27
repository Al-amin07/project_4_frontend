import { useState } from "react";
import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectUser } from "../../redux/features/user/userSlice";
import AdminSidebar from "./sidebar/AdminSidebar";
import UserSidebar from "./sidebar/UserSidebar";
// import useAuth from "../hooks/useAuth";
// import AdminSidebar from "../components/sidebar/AdminSidebar";
// import UserSidebar from "../components/sidebar/UserSidebar";

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(true);
    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const handleLogOut = () => {
        dispatch(logout())
    }
    return (
        <section className="flex gap-1 lg:gap-2">
            {user?.role === "admin" ? (
                <AdminSidebar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}

                    logOut={handleLogOut}
                />
            ) : (
                <UserSidebar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    logOut={handleLogOut}
                />
            )}
            <div className="m-3 text-xl  text-gray-900 font-semibold w-full">
                <Outlet />
            </div>
        </section>
    );
}
