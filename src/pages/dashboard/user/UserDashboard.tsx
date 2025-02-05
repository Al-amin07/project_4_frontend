import { useGetUserOrderQuery } from "@/redux/features/order/orderApi";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { TOrder } from "@/types/order.type";

import UserOrderTable from "./UserOrderTable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const UserDashboard = () => {
    const user = useAppSelector(selectUser)
    const { data } = useGetUserOrderQuery(user?.email as string)
    console.log(data)
    const { data: orders = [] } = useGetUserOrderQuery(user?.email as string)
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
                    <p className="text-3xl font-bold text-blue-600">{data?.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Pending</h2>
                    <p className="text-3xl font-bold text-yellow-600">
                        {data?.filter((el: TOrder) => el.status === "pending").length}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Processing</h2>
                    <p className="text-3xl font-bold text-blue-600">
                        {
                            data?.filter((el: TOrder) => el.status === "processing")
                                .length
                        }
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Approved</h2>
                    <p className="text-3xl font-bold text-green-600">
                        {
                            data?.filter((el: TOrder) => el.status === "delivered")
                                .length
                        }
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Canceled</h2>
                    <p className="text-3xl font-bold text-red-600">
                        {
                            data?.filter((el: TOrder) => el.status === "canceled")
                                .length
                        }
                    </p>
                </div>
            </div>
            <div className="flex mt-12 mb-8 justify-between items-center">
                <h2 className=" font-medium">Recent Orders</h2>
                <Link to={'/dashboard/order'}>

                    <Button>View All</Button>
                </Link>
            </div>
            <div className="bg-white rounded-lg  shadow-md">
                <div className="overflow-x-auto">
                    {
                        orders && orders?.length !== 0 ? <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Order Id
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Brand
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Model
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quantity
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    orders?.slice(0, 5)?.map((el: TOrder) => <UserOrderTable key={el?._id} order={el} />)
                                }
                            </tbody>
                        </table>
                            :
                            <div className="py-16 ">
                                <h2 className="text-center text-xl md:text-2xl font-medium">No Recent  Order Available</h2>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;