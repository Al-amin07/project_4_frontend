import { Link } from 'react-router';
import c1 from '../../assets/category/sedan.jpg'
import c2 from '../../assets/category/suv.avif'
import c3 from '../../assets/category/truck.webp'
import c4 from '../../assets/category/coupe.jpg'
import c5 from '../../assets/category/convert.jpg'
import Text from './Text';

const carCategories = [
    {
        label: "Sedan",
        image: c1,
    },
    {
        label: "SUV",
        image: c2,
    },
    {
        label: "Truck",
        image: c3,
    },
    {
        label: "Coupe",
        image: c4,
    },
    {
        label: "Convertible",
        image: c5,
    },
];

const CategorySection = () => {
    return (
        <section className=" ">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <Text title='Browse by Category' desc='Explore our wide range of cars by category to find the perfect vehicle for your needs.' />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {carCategories.map((category) => (
                        <Link
                            to={`/all-product?category=${category.label}`}
                            key={category.label}
                            className="flex flex-col group items-center bg-white  cursor-pointer relative rounded-md shadow  hover:shadow-xl duration-500 transition"
                        >
                            <img
                                src={category.image}
                                alt={category.label}
                                className="w-full h-40 group-hover:scale-105 transition-all duration-500  object-fill  "
                            />
                            <div className='absolute z-10 left-1/2 transform -translate-x-1/2  group-hover:-translate-y-3 bottom-0 flex flex-col items-center transition-all duration-500'>
                                <p className="text-xl    text-white  font-bold  mb-1">{category.label}</p>


                            </div>

                            <div className='w-full group-hover:bg-black/30 absolute inset-0 group-hover:scale-105 transition-all duration-500 bg-black/15 '>

                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
