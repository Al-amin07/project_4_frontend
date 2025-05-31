
import { useAppDispatch } from "@/redux/hooks";
import { TCar } from "../../types";

import { AlertTriangle, BadgeCheck, Eye } from "lucide-react";
import { BsFillCartPlusFill } from "react-icons/bs";

import { Link } from "react-router";
import toast from "react-hot-toast";
import { addCar } from "@/redux/features/cart/cartSlice";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type TProp = {
    car: TCar
}

const ProductCard = ({ car }: TProp) => {
    console.log({ car })
    const dispatch = useAppDispatch()
    const handleAddToCart = () => {
        toast.success('Product added to cart')
        dispatch(addCar(car))
    }
    return (
        <div className="bg-white cursor-pointer group  shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="relative">
                <img
                    src={car.image || "/placeholder-car.jpg"}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-52 object-cover"
                />
                <div className="flex absolute z-10 top-1/2 -translate-y-1/2 items-center gap-2 left-1/2 -translate-x-1/2">

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link to={`/products/${car._id}`} className="bg-white/80 opacity-0 group-hover:opacity-100 -translate-x-20 group-hover:translate-x-0 cursor-pointer text-gray-800 px-2 py-1.5 text-sm  hover:bg-teal-600 hover:text-white   transition-all duration-500 ">
                                <Eye size={20} />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>View Details</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span onClick={handleAddToCart} className="bg-white/80 opacity-0 group-hover:opacity-100 translate-x-20 group-hover:translate-x-0 cursor-pointer text-gray-800 px-2 py-1.5 text-sm  hover:bg-teal-600 hover:text-white  transition-all duration-500 "><BsFillCartPlusFill size={20} /> </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add to Cart</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                <div className="absolute inset-0 group-hover:bg-black/20 bg-black/0 transition-all duration-500">

                </div>
            </div>

            <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">
                        {car.brand} {car.model}
                    </h2>
                    <span className="text-sm bg-teal-50 text-teal-600 font-medium px-2 py-0.5 rounded-full">
                        {car.category}
                    </span>
                </div>

                <p className="text-gray-500 text-sm">{car.year} </p>
                <p className="text-gray-700 text-sm line-clamp-2">{car.description}</p>

                <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center gap-1">
                        {car.inStock ? (
                            <>
                                <BadgeCheck className="w-4 h-4 text-green-500" />
                                <span className="text-green-600 text-sm">In Stock ({car.quantity})</span>
                            </>
                        ) : (
                            <>
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                                <span className="text-red-600 text-sm">Out of Stock</span>
                            </>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-teal-600 text-xl font-semibold"> {car.price.toLocaleString()} ৳</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;