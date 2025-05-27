
import TableLoader from "@/components/TableLoader";
import { useGetAllUserQuery } from "../../../redux/features/user/userApi";
import { TUser } from "../../../types/user.type";

import UserTable from "../table/UserTable";


const Users = () => {
    const { data: users = [], isLoading, refetch } = useGetAllUserQuery(null)

    if (isLoading) return <TableLoader text="User Management" />
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Users Management</h1>
            <div className="bg-white rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Join Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Update Status
                                </th>

                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users?.map((user: TUser) => (
                                <UserTable refetch={refetch} key={user?._id} user={user} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;