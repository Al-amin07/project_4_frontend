
import { TCar } from "../../types";

import { AlertTriangle, BadgeCheck } from "lucide-react";

import { Link } from "react-router";

type TProp = {
    car: TCar
}

const ProductCard = ({ car }: TProp) => {
    console.log({ car })
    return (
        // <article className="overflow-hidden  rounded-lg border border-gray-200 bg-white shadow-xs">
        //     <div className="relative">

        //         <img
        //             alt=""
        //             src={car?.image || carimg}
        //             className="h-56 w-full object-cover"
        //         />
        //         {/* <h2 className="absolute text-white top-5 left-5 backdrop-blur-lg py-1 text-sm border border-white rounded-full px-3">Price : {car?.price}</h2> */}

        //         <Badge className="absolute top-5 right-5 backdrop-blur-2xl" variant={(car?.inStock) ? "default" : "destructive"}>{car.inStock ? "In Stock" : "Out of Stock"}</Badge>

        //     </div>

        //     <div className="p-4 sm:p-6">

        //         <div className="flex justify-between items-center">
        //             <h3 className="text-base font-semibold text-gray-900">
        //                 Brand :  <span
        //                     className="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-600"
        //                 >
        //                     {car?.brand}
        //                 </span>                    </h3>
        //             <h3 className="text-base font-semibold text-gray-900">
        //                 Model :  <span
        //                     className="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-600"
        //                 >
        //                     {car?.model}
        //                 </span>                    </h3>

        //         </div>
        //         <p className="text-base mt-3 font-medium"> Price : ${car?.price}</p>
        //         <p className="text-base mt-1 font-medium"> category : {car?.category}</p>



        //         {/* <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
        //             {car?.description}
        //         </p> */}



        //         <Link to={`/products/${car?._id}`} className="group bg-teal-50 mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600 py-2 px-4 rounded-md hover:bg-teal-100">
        //             View Details

        //             <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        //                 &rarr;
        //             </span>
        //         </Link>
        //     </div>
        // </article>
        <div className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
                src={car.image || "/placeholder-car.jpg"}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-52 object-cover"
            />

            <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">
                        {car.brand} {car.model}
                    </h2>
                    <span className="text-sm bg-teal-50 text-teal-600 font-medium px-2 py-0.5 rounded-full">
                        {car.category}
                    </span>
                </div>

                <p className="text-gray-500 text-sm">{car.year} • ${car.price.toLocaleString()}</p>
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

                    <Link to={`/products/${car._id}`} className="bg-teal-600 text-white px-4 py-1.5 text-sm  hover:bg-transparent hover:text-teal-600 border border-teal-600 transition-all duration-500">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;