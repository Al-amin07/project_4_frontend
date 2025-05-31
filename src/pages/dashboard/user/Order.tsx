import TableLoader from "@/components/TableLoader";
import { useGetUserOrderQuery } from "@/redux/features/order/orderApi";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { TOrder } from "@/types/order.type";
import UserOrderTable from "./UserOrderTable";


const Order = () => {
    const user = useAppSelector(selectUser)
    const { data: orders = [], isLoading, } = useGetUserOrderQuery(user?.email as string)
    if (isLoading) return <TableLoader text="Order Overview" />
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Order Overview</h1>
            {
                orders.length < 0 ?
                    <div className="bg-white rounded-lg shadow-md">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Order Id
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Brand
                                        </th>

                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Order Date
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
                                        orders.map((el: TOrder) => <UserOrderTable key={el?._id} order={el} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <h1 className="text-2xl text-center py-16 bg-gray-100 font-bold mb-6">No Order Found</h1>
            }
        </div>
    );
};

export default Order;