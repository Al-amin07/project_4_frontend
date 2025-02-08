/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOrder } from "@/types/order.type";
import { format } from "date-fns";
import OrderModal from "../modal/OrderModal";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUpdateOrderMutation } from "@/redux/features/order/orderApi";
import toast from "react-hot-toast";

const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    canceled: "bg-red-100 text-red-800",
};

const OrderTable = ({ order, refetch }: { order: TOrder, refetch: () => void }) => {
    const [orderUpdate] = useUpdateOrderMutation()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            console.log(data)
            const body = {
                status: data?.status
            }
            const result = await orderUpdate({ body, id: order?._id }).unwrap()
            refetch()
            toast.success(result?.message)
            console.log(result)
        } catch (error: any) {
            toast.error(error?.message || 'Something went wrong')
        }

    }
    const defaultValue = {
        status: order?.status
    }
    return (
        <tr >
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{order?._id}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">


                    <div className="text-sm font-medium text-gray-900">
                        {order?.email}
                    </div>

                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{order?.quantity}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className={`text-sm  text-gray-900`}>$ {order?.totalPrice}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(new Date(order?.createdAt), "PP")}
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
                <span

                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[order?.status]} `}

                >


                    {order?.status || "pending"}
                </span>
            </td>
            {/* <td className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full  ${statusStyles[order?.status]}`}>
                <div className="text-sm text-gray-900">{order?.status}</div>
            </td> */}
            <td className="px-6 py-4 flex gap-2 whitespace-nowrap">


                <OrderModal onSubmit={onSubmit} defaultValue={defaultValue} />
            </td>
            {/* <DeleteModal isLoading={isLoading} isOpen={isOpen} closeModal={closeModal} handleDelete={handleDelete} /> */}
        </tr>
    );
};

export default OrderTable;