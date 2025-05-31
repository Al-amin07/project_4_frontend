import { Link } from 'react-router';
import c1 from '../../assets/car/14.avif'
import Text from './Text';
const carCategories = [
    {
        label: "Sedan",
        image: c1,
    },
    {
        label: "SUV",
        image: c1,
    },
    {
        label: "Truck",
        image: c1,
    },
    {
        label: "Coupe",
        image: c1,
    },
    {
        label: "Convertible",
        image: c1,
    },
];

const CategorySection = () => {
    return (
        <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <Text title='Browse by Category' desc='Explore our wide range of cars by category to find the perfect vehicle for your needs.' />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
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
                            <p className="text-xl z-10 absolute  left-1/2 transform -translate-x-1/2 bottom-4   text-white  font-semibold">{category.label}</p>
                            <div className='w-full group-hover:bg-black/10 absolute inset-0 group-hover:scale-105 transition-all duration-500 bg-black/05 '>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
