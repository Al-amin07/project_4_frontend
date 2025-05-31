
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const Hero = ({ img, title, desc }: { img: string, title: string, desc: string }) => {
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
                        {title}
                    </h1>
                    <p className="my-4 w-full md:w-3/4 mx-auto text-lg md:text-xl text-gray-100">
                        {desc}
                    </p>

                    {/* Call-to-Action Button */}
                    <div className='flex justify-center items-center '>
                        <Link to={'/all-product'} className=" px-5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-base font-medium rounded-full transition-all">
                            Browse Cars <ArrowRight className='inline-block' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;