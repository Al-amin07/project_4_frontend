import { Link, NavLink, useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, selectUser } from "../redux/features/user/userSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,

    DropdownMenuSeparator,
    DropdownMenuShortcut,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { BsPersonCircle } from "react-icons/bs";

import { CartModal } from "./cart/CartModal";
import { selectCart } from "@/redux/features/cart/cartSlice";

const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/all-product', name: 'Products' },
    { path: '/blog', name: 'Blogs' },
    { path: '/about', name: 'About Us' },
    { path: '/contact', name: 'Contact Us' },
    { path: '/faq', name: 'Faq' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const user = useAppSelector(selectUser)
    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    console.log({ user, cart })
    const handleLogout = () => {
        dispatch(logout())
        toast.success('User logged out')
    }
    return (
        <header className="bg-white w-full   shadow-md fixed top-0 z-10">
            <div className="  px-4 lg:px-0 relative container mx-auto ">
                <div className="flex  h-16 items-center justify-between">
                    <Link className="text-3xl lg:text-4xl   font-bold bg-gradient-to-r from-teal-600 via-cyan-400 to-cyan-700 bg-clip-text text-transparent" to={'/'}>DriveEase</Link>

                    <div className="hidden lg:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-2 ">
                                {
                                    navLinks.map(el => <li key={el?.path}>
                                        <NavLink to={el?.path} className={`text-gray-800 transition py-2 px-4  text-base 
                                           
                                            ${location?.pathname === el.path && ' bg-teal-600 font-medium text-white'}`} > {el?.name}


                                        </NavLink>
                                    </li>)
                                }

                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-2">
                        {
                            user ?

                                <div className="flex items-center gap-3 ">
                                    <CartModal cart={cart} />
                                    <DropdownMenu >
                                        <DropdownMenuTrigger asChild>

                                            <div className="text-slate-800 hover:text-teal-600 transition-all duration-300">
                                                <BsPersonCircle size={34} className="cursor-pointer" />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-48 mr-8" align="start">
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuGroup>
                                                <Link to={'/dashboard'}>
                                                    <DropdownMenuItem className="">
                                                        Dashboard
                                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                </Link>
                                                <Link to={'/dashboard/profile'}>
                                                    <DropdownMenuItem className="">
                                                        Profile
                                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                </Link>


                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />


                                            <DropdownMenuItem onClick={handleLogout}>
                                                Log out
                                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div> :

                                <div className="sm:flex sm:gap-2">
                                    <Link
                                        className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow"
                                        to={'/login'}
                                    >
                                        Login
                                    </Link>

                                    <div className="hidden sm:flex">
                                        <Link
                                            to={'/register'}
                                            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-teal-600"

                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>

                        }




                        <div className="block  lg:hidden">
                            <button onClick={() => setOpen(!open)} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        {
                            open && <div className=" flex flex-col gap-2 rounded-lg shadow-2xl p-3 lg:hidden w-[170px] bg-white absolute top-[70px] right-5">
                                {
                                    navLinks.map(el => <Link onClick={() => setOpen(!open)} className={`  ${location.pathname === el.path && 'bg-teal-500 text-white'} py-1.5 rounded-md px-3 hover:bg-teal-500 hover:text-white`} to={el.path}>{el.name}</Link>)
                                }
                            </div>

                        }

                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;