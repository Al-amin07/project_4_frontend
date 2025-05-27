// import React from "react";
// import { TCar } from "@/types/car"; // adjust the import path
import { BadgeCheck, AlertTriangle } from "lucide-react";
// import { TCar } from "@/types";
import { useParams } from "react-router";
import { useGetSingleCarQuery } from "@/redux/features/cars/carApi";



const ProductDetails = () => {
    const { productId } = useParams()
    const { data } = useGetSingleCarQuery(productId as string)
    const car = data?.data;
    const onAddToCart = () => {
        console.log("Adding to cart:", car);
    };
    return (
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
            {/* Image */}
            <div>
                <img
                    src={car?.image || "/placeholder-car.jpg"}
                    alt={`${car?.brand} ${car?.model}`}
                    className="w-full h-[400px] object-cover rounded-xl shadow-md"
                />
            </div>

            {/* Details */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">
                    {car?.brand} | {car?.model}
                </h1>
                <div className="text-gray-600 text-sm">
                    <span>{car?.year}</span> • <span>{car?.category}</span>
                </div>

                <p className="text-lg text-gray-700">{car?.description}</p>

                <div className="text-2xl font-semibold text-blue-600">${car?.price.toLocaleString()}</div>

                <div className="flex items-center gap-2">
                    {car?.inStock ? (
                        <>
                            <BadgeCheck className="w-5 h-5 text-green-500" />
                            <span className="text-green-600 font-medium">
                                In Stock ({car?.quantity})
                            </span>
                        </>
                    ) : (
                        <>
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                            <span className="text-red-600 font-medium">Out of Stock</span>
                        </>
                    )}
                </div>

                <button
                    onClick={() => onAddToCart()}
                    disabled={!car?.inStock}
                    className={`mt-4 px-6 py-2 rounded-md text-white font-medium transition ${car?.inStock
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    {car?.inStock ? "Add to Cart" : "Unavailable"}
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
