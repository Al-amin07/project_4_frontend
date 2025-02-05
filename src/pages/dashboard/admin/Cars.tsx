
import TableLoader from "@/components/TableLoader";

import { useGetAllCarQuery } from "../../../redux/features/cars/carApi";
import { TCar } from "../../../types";
import CarTable from "../table/CarTable";



const Cars = () => {
    const { data: cars = [], isLoading, refetch } = useGetAllCarQuery(null)

    if (isLoading) return <TableLoader text="Car Management" />
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Car Management</h1>
            <div className="bg-white rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
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
                            {cars?.map((car: TCar) => (
                                <CarTable refetch={refetch} key={car?._id} car={car} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cars;