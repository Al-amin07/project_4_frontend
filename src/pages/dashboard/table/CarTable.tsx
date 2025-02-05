/* eslint-disable @typescript-eslint/no-explicit-any */

// import { FaUserCircle } from "react-icons/fa";
import { TCar } from "../../../types";

import carImg from '@/assets/car2.jpeg'
import { useDeleteCarMutation, useUpdateCarMutation } from "../../../redux/features/cars/carApi";
import toast from "react-hot-toast";
import { UpdateModal } from "../modal/UpdateModal";
import DeleteModal from "../modal/DeleteModal";
import { FieldValues, SubmitHandler } from "react-hook-form";

// import { DeleteModal } from "../modal/DeleteModal";


const CarTable = ({ car, refetch }: { car: TCar, refetch: () => Promise<any> }) => {
    const [deleteCar, { isLoading }] = useDeleteCarMutation();
    const [updateCar, { isLoading: updateLoading }] = useUpdateCarMutation()


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const result = await updateCar({ id: car._id, data }).unwrap()
            console.log(result)
            if (result?.data) {
                toast.success(result?.message)
                refetch()
            }
        } catch (error: any) {
            toast.error(error?.message || 'Something went wrong')
        }
    }


    const defaultValues = {
        brand: car?.brand,
        model: car?.model,
        price: car?.price,
        year: car?.year,
        category: car?.category,
        description: car?.description,
        quantity: car?.quantity,
    }




    const handleDelete = async () => {
        try {
            console.log(car?._id)
            const result = await deleteCar(car?._id)
            console.log(result)
            refetch();
            toast.success(result?.data?.message)
        } catch (error: any) {
            toast.error(error?.message || 'Something went wrong')
        }
    }

    return (
        <tr key={car?._id}>
            <td className="px-4 py-2 whitespace-nowrap">
                <div className="flex  gap-2 ">
                    <img className="h-12 w-12 rounded-md" src={car?.image ? car?.image : carImg} alt="" />

                    <div className="">
                        <div className="text-sm font-medium text-gray-900">
                            {car?.brand}
                        </div>

                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{car?.model}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className={`text-sm  text-gray-900`}>{car?.category}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> $ {car?.price}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {/* {format(new Date(car?.createdAt), "PP")} */}
                {
                    car?.quantity
                }
            </td>
            <td className="px-6 py-4 flex gap-2 whitespace-nowrap">


                <DeleteModal isLoading={isLoading} handleDelete={handleDelete} />
                <UpdateModal onSubmit={onSubmit} defaultValue={defaultValues} isLoading={updateLoading} />
            </td>
            {/* <DeleteModal isLoading={isLoading} isOpen={isOpen} closeModal={closeModal} handleDelete={handleDelete} /> */}
        </tr>
    );
};

export default CarTable;