import { useGetAllCarQuery } from "@/redux/features/cars/carApi";
import { useGetAdminDataQuery } from "@/redux/features/user/userApi";
import CarTable from "../table/CarTable";
import { TCar } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useGetAllOrderQuery } from "@/redux/features/order/orderApi";
import { TOrder } from "@/types/order.type";
import OrderTable from "../table/OrderTable";


const AdminDashboard = () => {
    const { data } = useGetAdminDataQuery(null)
    console.log(data)
    const { data: cars = [], refetch } = useGetAllCarQuery(null)
    const { data: orders = [] } = useGetAllOrderQuery(null)
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Total Users</h2>
                    <p className="text-3xl font-bold text-blue-600">{data?.data?.totalUser}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Total Car</h2>
                    <p className="text-3xl font-bold text-yellow-600">
                        {data?.data?.totalCar}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Total Order</h2>
                    <p className="text-3xl font-bold text-green-600">
                        {/* {data?.data?.totalRevenew[0]?.price} */}
                        {data?.data?.totalOrder}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Total Revenu</h2>
                    <p className="text-3xl font-bold text-red-600">
                        $ {data?.data?.totalRevenu?.[0]?.price}
                    </p>
                </div>
            </div>
            {/* Cars */}

            <div className="mt-12 mb-16 ">
                <div className="flex mb-5  justify-between items-center">
                    <h2 className=" font-medium text-3xl">Cars</h2>
                    <Link to={'/dashboard/cars'}>

                        <Button>View All Car</Button>
                    </Link>
                </div>
                <div className="bg-white rounded-lg shadow-md">
                    <div className="overflow-x-auto">
                        {
                            cars && cars?.length !== 0 ? <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
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
                                            Price
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            In Stock
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {cars?.slice(0, 3)?.map((car: TCar) => (
                                        <CarTable refetch={refetch} key={car?._id} car={car} />
                                    ))}
                                </tbody>
                            </table> : <div className="py-16">
                                <h1 className="text-center font-medium text-xl">No Car Available</h1>
                            </div>
                        }

                    </div>
                </div>


            </div>
            {/* Orders */}
            <div className="mt-12 mb-16 ">
                <div className="flex mb-5  justify-between items-center">
                    <h2 className=" font-medium text-3xl">Orders</h2>
                    <Link to={'/dashboard/orders'}>

                        <Button>View All Orders</Button>
                    </Link>
                </div>
                <div className="bg-white rounded-lg shadow-md">
                    <div className="overflow-x-auto">
                        {
                            orders && orders?.length !== 0 ?
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
                                            orders?.slice(0, 3)?.map((el: TOrder) => <OrderTable refetch={refetch} key={el?._id} order={el} />)
                                        }
                                    </tbody>
                                </table> : <div className="py-16">
                                    <h1 className="text-center font-medium text-xl">No Order Available</h1>
                                </div>
                        }

                    </div>
                </div>


            </div>
        </div>
    );
};

export default AdminDashboard;