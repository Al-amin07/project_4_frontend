import React from "react";

import { Link, useLocation } from "react-router";
import { RxDashboard } from "react-icons/rx";
import {

    MdOutlineLogout,

} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import SidebarWrapper from "./SidebarWrapper";
import { BsFillCartCheckFill } from "react-icons/bs";

// import UserInfo from "./UserInfo";

const userMenus = [
    { name: "Dashboard", link: "/dashboard", icon: RxDashboard },



    {
        name: "Track My Order",
        link: "/dashboard/order",
        icon: BsFillCartCheckFill,
    },
    {
        name: "Profile",
        link: "/dashboard/profile",
        icon: FaUserCircle,
    },
];
type TProp = {
    isOpen: boolean,
    logOut: () => void
    setIsOpen: (isOpen: boolean) => void
}

export default function UserSidebar({ isOpen, setIsOpen, logOut }: TProp) {
    const location = useLocation();

    return (
        <SidebarWrapper
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="User Dashboard"
        >
            {/* <UserInfo user={user} isOpen={isOpen} /> */}
            <div className="mt-4 pt-8 flex flex-col border-t border-gray-700 gap-2 relative">
                {userMenus.map((menu, i) => (
                    <Link
                        to={menu.link}
                        key={i}
                        className={`group flex items-center text-sm gap-3.5 font-medium  px-3 py-1.5 hover:bg-teal-600 transition-colors duration-500  ${location.pathname === menu.link && "bg-teal-600"
                            }`}
                    >
                        <div>{React.createElement(menu.icon, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${i + 3}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                        >
                            {menu.name}
                        </h2>
                        <h2
                            className={`${isOpen && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                        >
                            {menu.name}
                        </h2>
                    </Link>
                ))}
                <span
                    onClick={logOut}
                    className="group cursor-pointer w-full flex items-center text-sm gap-3.5 font-medium px-3 py-1.5 transition-colors duration-500 hover:bg-teal-600 mt-auto"
                >
                    <div>
                        <MdOutlineLogout size="20" />
                    </div>
                    <h2
                        style={{
                            transitionDelay: `600ms`,
                        }}
                        className={`whitespace-pre duration-500 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                    >
                        Logout
                    </h2>
                    <h2
                        className={`${isOpen && "hidden"
                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                        Logout
                    </h2>
                </span>
            </div>
        </SidebarWrapper>
    );
}

