/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaUserCircle } from "react-icons/fa";
import { TUser } from "../../../types/user.type";
import { format } from "date-fns";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";
import StatusModal from "../modal/StatusModal";
import { FieldValues, SubmitHandler } from "react-hook-form";





const UserTable = ({ user, refetch }: { user: TUser, refetch: () => void }) => {
    const [updateUser, { isLoading }] = useUpdateUserMutation()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {

            if (user?.status === data?.status) {
                toast.error(`User status is already ${data?.status}`)
            } else {

                const body = {
                    status: data?.status
                }
                const result = await updateUser({ body, id: user?._id }).unwrap()
                if (result?.success) {
                    refetch()
                    toast.success(result?.message)
                }
            }
        } catch (error: any) {
            toast.error(error?.message || 'something went wrong')
        }
    }
    return (
        <tr key={user?._id}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">



                        <FaUserCircle className="h-10 w-10 text-gray-400" />

                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {user?.name}
                        </div>
                        <div className="text-sm text-gray-500">
                            ID: {user?._id}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user?.email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user?.role === "admin"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-green-100 text-green-800"
                        }`}
                >
                    {user?.role}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(new Date(user?.createdAt), "PP")}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span

                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full  ${user.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                        }`}

                >


                    {user?.status || "active"}
                </span>

            </td>
            <td className="px-6  py-4 whitespace-nowrap">
                <StatusModal handleStatus={onSubmit} defaultValue={{ status: user?.status }} isLoading={isLoading} />
            </td>
        </tr>
    );
};

export default UserTable;