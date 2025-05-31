
import { ReactNode } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router";
type TProp = {
    isOpen: boolean,
    title: string;
    children: ReactNode,
    setIsOpen: (isOpen: boolean) => void
}
export default function SidebarWrapper({ isOpen, setIsOpen, title, children }: TProp) {
    return (
        <div
            className={`bg-neutral-950   min-h-screen ${isOpen ? "w-80" : "w-[76px]"
                } duration-500 text-gray-100 px-4`}
        >
            <div className="py-3  flex justify-between items-center">
                <h2
                    style={{
                        transitionDelay: `300ms`,
                    }}
                    className={`whitespace-pre  duration-500 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                >
                    {title}
                </h2>
                <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <HiMenuAlt3 size={26} />
                </div>
            </div>

            {isOpen && <div className="text-center mt-4 pt-2 border-t border-gray-700">
                <Link className="text-4xl  font-bold bg-gradient-to-r from-teal-200 via-cyan-400 to-cyan-700 bg-clip-text text-transparent" to={'/'}>DriveEase</Link></div>}

            {children}
        </div>
    );
}


