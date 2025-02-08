import { useState } from "react";
import Loading from "../../components/Loading";
import { useGetAllCarQuery } from "../../redux/features/cars/carApi";
import { TCar } from "../../types";
import ProductCard from "./ProductCard";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem, SelectLabel } from "@/components/ui/select";
import { categories } from "../dashboard/admin/contains";
import { Button } from "@/components/ui/button";


const AllProduct = () => {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState<string | null>(null)
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);

    const { data: products = [], isLoading } = useGetAllCarQuery([
        { name: 'limit', value: 6 },
        { name: 'searchTerm', value: search },
        { name: 'sort', value: 'createdAt' },
        { name: 'page', value: 1 },
        { name: 'category', value: category },
        { name: 'minPrice', value: minPrice },
        { name: 'maxPrice', value: maxPrice },

    ])

    console.log(products)
    const handleReset = () => {
        setSearch('')
        setCategory(null)
        setMinPrice(0)
        setMaxPrice(100000)
    }
    if (isLoading) return <Loading />
    return (
        <div>
            <div className="flex items-center justify-center flex-wrap gap-6 mb-8">
                <input placeholder="Search here" onChange={(e) => setSearch(e.target.value)} type="text" className="border py-1 px-3" />
                <Select onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue className="text-black" placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Select Category</SelectLabel>
                            {
                                categories.map(el => <SelectItem value={el?.value}>{el?.value}</SelectItem>)
                            }


                        </SelectGroup>
                    </SelectContent>
                </Select>


                {/* <div className=" flex flex-col  items-center">
                    <p> Price: ${price}</p>
                    <input type="range" onChange={(e) => setPrice(e.target.value)} defaultValue={price} min={0} max={100000} />
                </div> */}
                <div>
                    <label className="hidden lg:inline" htmlFor="">Min Price : </label>
                    <input
                        type="number"
                        placeholder="Min Price"
                        className="py-1 w-auto px-3 border mr-4"
                        defaultValue={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                    />

                    <label className="hidden lg:inline" htmlFor="">Max Price: </label>
                    <input
                        type="number"
                        placeholder="Max Price"
                        defaultValue={maxPrice}
                        className="py-1 w-auto px-3 border"
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </div>
                <Button onClick={handleReset}>Reset</Button>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products?.map((product: TCar) => <ProductCard key={product?._id} car={product} />)
                }

            </div>
        </div>
    );
};

export default AllProduct;