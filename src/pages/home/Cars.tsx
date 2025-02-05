import { useGetAllCarQuery } from "@/redux/features/cars/carApi";
import ProductCard from "../all-product/ProductCard";
import { TCar } from "@/types";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Text from "./Text";


const Cars = () => {
    const { data: cars = [] } = useGetAllCarQuery(null)
    return (
        <div>

            <Text title="Discover the Perfect Car for You" desc="Explore our wide range of high-quality cars, from luxury sedans to powerful SUVs. Whether you're looking for speed, comfort, or efficiency, we have the perfect vehicle to match your style and needs. Start your journey today" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cars?.slice(0, 6)?.map((el: TCar) => <ProductCard key={el?._id} car={el} />)
                }
            </div>
            <div className="flex justify-center mt-8">
                <Link className=" " to={'/all-product'}><Button variant={'destructive'}> View All</Button></Link>
            </div>
        </div>
    );
};

export default Cars;