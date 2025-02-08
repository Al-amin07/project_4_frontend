
import { Link } from 'react-router';

const Hero = ({ img }: { img: string }) => {
    return (
        <div
            className="w-full bg-center bg-cover h-[38rem]"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/10">
                <div className="text-center ">
                    <h1 className="text-3xl md:text-5xl text-white font-medium">
                        Drive Your Dream Car
                    </h1>
                    <p className="my-4 w-full md:w-3/4 mx-auto text-lg md:text-xl text-gray-100">
                        Explore our exclusive collection of luxury and sports cars at unbeatable prices.
                    </p>

                    {/* Call-to-Action Button */}
                    <Link to={'/all-product'} className=" px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-lg font-medium rounded-full transition-all">
                        Browse Cars
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;