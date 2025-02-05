import React from "react";

import { Link, useLocation } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAddCard } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";

import { MdOutlineLogout } from "react-icons/md";
import SidebarWrapper from "./SidebarWrapper";
// import UserInfo from "./UserInfo";
import { FaCar } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const adminMenus = [
    { name: "Dashboard", link: "/dashboard", icon: RxDashboard },
    { name: "Users", link: "/dashboard/users", icon: FaUsers },
    {
        name: "Cars",
        link: "/dashboard/cars",
        icon: FaCar,
    },
    {
        name: "Add Car",
        link: "/dashboard/add-car",
        icon: MdOutlineAddCard,
    },

    {
        name: "Order Review",
        link: "/dashboard/orders",
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
    logOut: () => void;
    setIsOpen: (isOpen: boolean) => void
}

export default function AdminSidebar({ isOpen, setIsOpen, logOut }: TProp) {
    const location = useLocation();
    console.log({ isOpen });
    return (
        <SidebarWrapper isOpen={isOpen} setIsOpen={setIsOpen} title="Admin Panel">
            {/* <UserInfo user={user} isOpen={isOpen} /> */}
            <div className="mt-4 pt-5 md:pt-6 lg:pt-8 flex flex-col border-t border-gray-700 gap-3 relative">
                {adminMenus.map((menu, i) => (
                    <Link
                        to={menu.link}
                        key={i}
                        className={`group flex items-center text-sm gap-3.5 font-medium p-3
             hover:bg-teal-600 rounded-md transition-colors duration-500 ${location.pathname === menu.link && "bg-teal-600 text-white"
                            }`}
                    >
                        <div>{React.createElement(menu.icon, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${i + 3}00ms`,
                            }}
                            className={`whitespace-pre  duration-500 ${!isOpen && "opacity-0  translate-x-28 overflow-hidden"
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
                <button
                    onClick={logOut}
                    className="group flex items-center text-sm gap-3.5 font-medium px-4 py-3 transition-colors duration-500 hover:bg-gray-800 rounded-md mt-auto"
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
                </button>
            </div>
        </SidebarWrapper>
    );
}

