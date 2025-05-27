/* eslint-disable @typescript-eslint/no-explicit-any */
import { useChangePasswordMutation, useGetMeQuery } from "@/redux/features/user/userApi";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

import { FaCircleUser } from "react-icons/fa6";
import img from '@/assets/car/2.jpg'
import ChangePasswordModal from "../modal/ChangePasswordModal";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Profile() {
    const userCredential = useAppSelector(selectUser);
    const [open, setOpen] = useState(false)
    const [changepassword, { isLoading }] = useChangePasswordMutation()
    const { data: user = {} } = useGetMeQuery(userCredential?.id as string)
    console.log(user)
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const body = {
                ...data
            }
            const result = await changepassword({ body, id: user?._id }) as any
            console.log(result)
            if (result?.error) {
                throw new Error(result?.error?.message)
            } else {
                toast.success(result?.data?.message)
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error?.message)
        } finally {

            setOpen(false)
        }

    }
    return (

        <div className=" h-full flex items-center justify-center">
            <div className='bg-white shadow-lg rounded-2xl lg:w-3/5 '>
                <img
                    alt='profile'

                    src={img}
                    className='w-full mb-4 rounded-t-lg h-36'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>

                        <FaCircleUser className="h-24 bg-white rounded-full w-24 mx-auto" />
                    </a>

                    <p className='p-2 px-4 mt-2 text-xs text-white bg-pink-500 rounded-full'>
                        {user?.role}
                    </p>
                    <p className='mt-2 text-xl font-medium text-gray-800 '>
                        {/* User Id: {user?.uid} */}
                        Created At :{new Date(user.createdAt).toLocaleDateString()}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center gap-3 md:gap-6 justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {user?.name}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>{user?.email}</span>
                            </p>

                            <div>
                                {/* <button
                                    // onClick={() => setIsOpen(true)}
                                    className='bg-cyan-500 hover:bg-cyan-600 px-10 py-1 rounded-lg text-white cursor-pointer  block mb-1'>
                                    Update Profile
                                </button> */}

                                <ChangePasswordModal isLoading={isLoading} open={open} setOpen={setOpen} onSubmit={onSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
