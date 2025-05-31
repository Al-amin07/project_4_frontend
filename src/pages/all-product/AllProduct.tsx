import { useState } from "react";
import { useGetAllCarQuery } from "../../redux/features/cars/carApi";
import { TCar } from "../../types";
import ProductCard from "./ProductCard";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem, SelectLabel } from "@/components/ui/select";
import { categories } from "../dashboard/admin/contains";
import { Button } from "@/components/ui/button";
import ProductSkeletonCard from "@/components/loader/ProductSkeletonLoader";
import { useSearchParams } from "react-router";


const AllProduct = () => {
    const [search, setSearch] = useState('')
    const [params] = useSearchParams()
    const categoryParam = params.get('category')

    const [category, setCategory] = useState<string | null>(categoryParam || null)
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [currentPage, setCurrentPage] = useState(1);
    // Assuming total items is 100 for pagination example
    const { data, isLoading } = useGetAllCarQuery([
        { name: 'searchTerm', value: search },
        { name: 'sort', value: 'createdAt' },
        // { name: 'page', value: currentPage },
        { name: 'category', value: category },
        { name: 'minPrice', value: minPrice },
        { name: 'maxPrice', value: maxPrice },

    ])
    const products = data?.data || [];

    const totalPage = Math.ceil(products?.length / 6);
    const handleReset = () => {
        setSearch('')
        setCategory(null)
        setCurrentPage(1)
        setMinPrice(0)
        setMaxPrice(100000)
    }
    const items = products?.slice((currentPage - 1) * 6, currentPage * 6);
    console.log({ currentPage, items, products, totalPage })
    return (
        <div>
            <div className="flex items-center justify-center flex-wrap gap-6 mb-8">
                <input placeholder="Search here" onChange={(e) => setSearch(e.target.value)} type="text" className="border py-1 px-3" />
                <Select defaultValue={category as string} onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue className="text-black" placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup >
                            <SelectLabel>Select Category</SelectLabel>
                            {
                                categories.map(el => <SelectItem value={el?.value}>{el?.value}</SelectItem>)
                            }


                        </SelectGroup>
                    </SelectContent>
                </Select>
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
            {
                isLoading ? <ProductSkeletonCard /> : <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        items?.length > 0 ? items?.map((product: TCar) => <ProductCard key={product?._id} car={product} />) : <p className="text-center text-2xl">No Product Found</p>
                    }

                </div>
            }
            <div className="flex mt-9 items-center justify-center">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1 || isLoading} className="px-4 py-2 mx-1 text-gray-700 capitalize bg-transparent hover:bg-teal-600 hover:text-white disabled:cursor-not-allowed    transition-colors duration-300   dark:bg-gray-800 dark:text-gray-600">
                    <div className="flex items-center -mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>

                        <span className="mx-1">
                            previous
                        </span>
                    </div>
                </button>

                <div className="flex items-center justify-center gap-2">
                    {
                        isLoading ? <p>loading...</p> : Array.from({ length: totalPage }, (_, index) => (
                            <span onClick={() => setCurrentPage(index + 1)} className={`py-2 px-4  hover:bg-teal-600 hover:text-white disabled:cursor-not-allowed rounded-sm    transition-colors duration-300   dark:bg-gray-800 dark:text-gray-600 ${currentPage === index + 1 ? 'bg-teal-600 text-white' : 'text-gray-700 capitalize bg-transparent'}`} key={index}>
                                {index + 1}
                            </span>
                        ))
                    }
                </div>



                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage || isLoading} className="px-4 py-2 mx-1 text-gray-700 capitalize bg-transparent hover:bg-teal-600 hover:text-white disabled:cursor-not-allowed    transition-colors duration-300   dark:bg-gray-800 dark:text-gray-600">
                    <div className="flex items-center -mx-1">
                        <span className="mx-1">
                            Next
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AllProduct;