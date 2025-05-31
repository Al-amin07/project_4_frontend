import { useParams } from "react-router";
import { useGetSingleCarQuery } from "../../redux/features/cars/carApi";
import { BsFillCartPlusFill } from "react-icons/bs";



import img from '@/assets/car2.jpeg'
import SingleProductSkeleton from "@/components/loader/SkeletonProductSkeleton";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import { addCar } from "@/redux/features/cart/cartSlice";

const SingleProduct = () => {
    const { productId } = useParams()
    const { data, isLoading } = useGetSingleCarQuery(productId as string)
    const dispatch = useAppDispatch()
    const car = data?.data
    const handleAddToCart = () => {
        dispatch(addCar(car))
        toast.success('Product added to cart')
    }
    if (isLoading) return <SingleProductSkeleton />
    return (
        <div className="max-w-7xl mx-auto min-h-[400px] p-6 bg-white border rounded-lg">
            <div className="flex flex-col md:flex-row">

                <div className="md:w-1/2 h-full">
                    <img
                        src={car?.image ? car?.image : img}
                        alt={`${car?.brand} ${car?.model}`}
                        className="w-full object-cover h-full min-h-[400px] rounded-lg"
                    />
                </div>

                <div className={`md:w-1/2  ${car?.image ? 'md:ml-6' : ''}`}>
                    <h1 className="text-3xl font-bold text-gray-800">
                        {car?.brand} {car?.model}
                    </h1>
                    <span className="text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block font-semibold my-3"> {car?.category}</span>
                    <p className="text-gray-600 mt-2">Release Date : {car?.year}</p>
                    <p className="text-gray-600 mt-2">Price: ${car?.price.toLocaleString()}</p>
                    <p className="text-gray-600 mt-2">Quantity: {car?.quantity}</p>
                    <p className={`mt-2 font-medium ${car?.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {car.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                    <p className="text-gray-600 my-4">{car?.description}</p>
                    <div>
                        <span onClick={handleAddToCart} className="bg-teal-600 max-w-24 hover:bg-transparent hover:text-teal-600 border border-teal-600 transition-all duration-300 cursor-pointer  text-white px-5 py-1  flex items-center justify-between "><BsFillCartPlusFill size={20} /> <ArrowRight /></span>
                    </div>
                    {/* <PaymentModal refetch={refetch} totalPrice={totalprice} quantity={quantity} car={car} open={open} setOpen={setOpen} /> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;