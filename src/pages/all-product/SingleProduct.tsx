import { useParams } from "react-router";
import { useGetSingleCarQuery } from "../../redux/features/cars/carApi";
import Loading from "../../components/Loading";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import PaymentModal from "../dashboard/modal/PaymentModal";

import img from '@/assets/car2.jpeg'
const SingleProduct = () => {
    const { productId } = useParams()
    const { data, isLoading, refetch } = useGetSingleCarQuery(productId as string)
    const [open, setOpen] = useState(false)
    const car = data?.data
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);

        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);

        }
    };


    const totalprice = car?.price * quantity;
    console.log({ totalprice, car: car?.image })
    if (isLoading) return <Loading />
    return (
        <div className="max-w-7xl mx-auto min-h-[300px] p-6 bg-white border rounded-lg">
            <div className="flex flex-col md:flex-row">

                <div className="md:w-1/2 h-full">
                    <img
                        src={car?.image ? car?.image : img}
                        alt={`${car?.brand} ${car?.model}`}
                        className="w-full object-cover h-full rounded-lg"
                    />
                </div>

                <div className={`md:w-1/2 ${car?.image ? 'md:ml-6' : ''}`}>
                    <h1 className="text-3xl font-bold text-gray-800">
                        {car?.brand} {car?.model}
                    </h1>
                    <p className="text-gray-600 mt-2">Category: {car?.category}</p>
                    <p className="text-gray-600 mt-2">Release Date : {car?.year}</p>
                    <p className="text-gray-600 mt-2">Price: ${car?.price.toLocaleString()}</p>
                    <p className="text-gray-600 mt-2">Quantity: {car?.quantity}</p>
                    <p className={`mt-2 font-medium ${car?.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {car.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                    <p className="text-gray-600 my-4">{car?.description}</p>
                    {/* <p className="text-gray-600 mt-4">Added on: {new Date(car.createdAt).toLocaleDateString()}</p> */}
                    <div className="flex w-32 items-center gap-3 border border-teal-500 rounded-lg p-2">
                        <button
                            className="p-2 bg-teal-500 text-white rounded-md disabled:opacity-50"
                            onClick={handleDecrease}
                            disabled={quantity === 1}
                        >
                            <Minus size={18} />
                        </button>
                        <span className="w-10 text-center text-lg font-medium">{quantity}</span>
                        <button
                            className="p-2 bg-teal-500 text-white rounded-md disabled:opacity-50"
                            onClick={handleIncrease}
                            disabled={quantity === 10}
                        >
                            <Plus size={18} />
                        </button>
                    </div>
                    {/* Order Button */}

                    <PaymentModal refetch={refetch} totalPrice={totalprice} quantity={quantity} car={car} open={open} setOpen={setOpen} />
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;