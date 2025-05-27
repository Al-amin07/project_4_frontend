import { useGetAllOrderQuery } from "@/redux/features/order/orderApi";
import OrderTable from "../table/OrderTable";
import { TOrder } from "@/types/order.type";

import TableLoader from "@/components/TableLoader";


const Orders = () => {
    const { data: orders = [], isLoading, refetch } = useGetAllOrderQuery(null)
    if (isLoading) return <TableLoader text="Order Management" />
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Order Management</h1>
            <div className="bg-white rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Order Id
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Customer
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Order Date
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
                                orders.map((el: TOrder) => <OrderTable refetch={refetch} key={el?._id} order={el} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;