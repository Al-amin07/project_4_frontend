/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import MainForm from "../form/MainForm";
import MainInput from "../form/MainInput";
import { Button } from "@/components/ui/button";
import MainSelect from "../form/MainSelect";
import { carSchema, categories } from "./contains";
import MainFileInput from "../form/MainFileInput";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateCarMutation } from "@/redux/features/cars/carApi";
import toast from "react-hot-toast";
import { ImSpinner5 } from "react-icons/im";
import MainTextarea from "../form/MainTextarea";
import { useNavigate } from "react-router";

const CreateCar = () => {
    const [createCar, { isLoading }] = useCreateCarMutation()
    const navigate = useNavigate()
    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {

        try {
            const { image, ...restData } = data

            console.log(image, restData)
            const formData = new FormData()
            formData.append('file', image[0])

            formData.append('data', JSON.stringify(restData))
            const result = await createCar(formData).unwrap()
            console.log(result)
            if (result?.success) {
                toast.success(result?.message)
                navigate('/dashboard/cars')
            }
        } catch (error: any) {
            toast.error(error?.message || 'Something went wrong')
        }

    }




    return (
        <div className="flex flex-col gap-5 justify-center items-center min-h-[700px]">
            <h2 className="text-2xl">Add New Car</h2>
            <div className="max-w-4xl border rounded-lg p-3 md:p-6 lg:p-8 mx-auto ">

                <MainForm resolver={zodResolver(carSchema)} onSubmit={handleSubmit}>
                    <div className="grid mb-2 md:mb-4 grid-cols-1 lg:grid-cols-2 gap-4 ">
                        <MainInput label="Brand" name="brand" />
                        <MainInput label="Model" name="model" />
                    </div>
                    <div className="grid mb-2 md:mb-4 grid-cols-1 lg:grid-cols-2 gap-4 ">
                        {/* <MainInput label="Description" name="description" /> */}
                        <MainInput label="Year" name="year" type="number" />
                        <MainInput label="Price" name="price" type="number" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 ">
                        <MainFileInput name="image" label="Image" />
                        <MainInput label="Quantity" name="quantity" type="number" />
                    </div>
                    <div className="grid mb-2 md:mb-2 grid-cols-1  ">

                        <MainSelect options={categories} name="category" label="Category" />
                    </div>
                    <div className="grid mb-2 md:mb-2 grid-cols-1 lg:grid-cols-1 gap-4 ">

                        <MainTextarea name="description" label="Description" />
                    </div>
                    <div className="flex justify-end mt-3">
                        <Button disabled={isLoading} type="submit" className="px-6 disabled:cursor-not-allowed disabled:bg-neutral-900">Add Car {isLoading && <ImSpinner5 size={20} className="animate-spin my-auto ml-1" />}</Button>
                    </div>
                </MainForm>
            </div>
        </div>
    );
};

export default CreateCar;