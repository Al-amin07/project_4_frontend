
import { TCar } from "../../types";
import carimg from '@/assets/car2.jpeg'
import { Badge } from "@/components/ui/badge";

import { Link } from "react-router";

type TProp = {
    car: TCar
}

const ProductCard = ({ car }: TProp) => {
    console.log({ car })
    return (




        <article className="overflow-hidden  rounded-lg border border-gray-200 bg-white shadow-xs">
            <div className="relative">

                <img
                    alt=""
                    src={car?.image || carimg}
                    className="h-56 w-full object-cover"
                />
                {/* <h2 className="absolute text-white top-5 left-5 backdrop-blur-lg py-1 text-sm border border-white rounded-full px-3">Price : {car?.price}</h2> */}

                <Badge className="absolute top-5 right-5 backdrop-blur-2xl" variant={(car?.inStock) ? "default" : "destructive"}>{car.inStock ? "In Stock" : "Out of Stock"}</Badge>

            </div>

            <div className="p-4 sm:p-6">

                <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold text-gray-900">
                        Brand :  <span
                            className="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-600"
                        >
                            {car?.brand}
                        </span>                    </h3>
                    <h3 className="text-base font-semibold text-gray-900">
                        Model :  <span
                            className="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-600"
                        >
                            {car?.model}
                        </span>                    </h3>

                </div>
                <p className="text-base mt-3 font-medium"> Price : ${car?.price}</p>
                <p className="text-base mt-1 font-medium"> category : {car?.category}</p>



                {/* <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
                    {car?.description}
                </p> */}



                <Link to={`/products/${car?._id}`} className="group bg-teal-50 mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600 py-2 px-4 rounded-md hover:bg-teal-100">
                    View Details

                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                        &rarr;
                    </span>
                </Link>
            </div>
        </article>
    );
};

export default ProductCard;