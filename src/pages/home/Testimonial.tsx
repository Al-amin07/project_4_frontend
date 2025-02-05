import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';
import Text from './Text';
const arr = [
    {
        name: "Khalid Al Dawsy",
        location: "Jeddah, Saudi",
        testimonial:
            "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it. The flavors were authentic and the food.",
        profileImage: "url-to-profile-image-1",
        rating: 5,
    },
    {
        name: "Sara Ahmed",
        location: "Dubai, UAE",
        testimonial:
            "The flavors were authentic and the food was served fresh. It reminded me of home. Highly recommended! Amazing experience! The spices were balanced and the rice was perfectly cooked. Will visit again",
        profileImage: "url-to-profile-image-2",
        rating: 4,
    },
    {
        name: "John Doe",
        location: "Riyadh, Saudi",
        testimonial:
            "Amazing experience! The spices were balanced and the rice was perfectly cooked. Will visit again. The flavors were authentic and the food was served fresh. It reminded me of home. Highly recommended!",
        profileImage: "url-to-profile-image-3",
        rating: 5,
    },
    {
        name: "Amina Karim",
        location: "Abu Dhabi, UAE",
        testimonial:
            "The best mandi I’ve had in a long time. The meat was tender and flavorful. Can’t wait to return. Great ambiance and excellent food! The mandi was delicious, especially the lamb. Highly recommend it.",
        profileImage: "url-to-profile-image-4",
        rating: 5,
    },
    {
        name: "Mohammed Al Zahrani",
        location: "Dammam, Saudi",
        testimonial:
            "Great ambiance and excellent food! The mandi was delicious, especially the lamb. Highly recommend it. The best mandi I’ve had in a long time. The meat was tender and flavorful. Can’t wait to return.",
        profileImage: "url-to-profile-image-5",
        rating: 4,
    },
];
const Testimonial = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto  relative max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

                <Text title='What Our Customers Say' desc='Hear from our satisfied customers! Their experiences and feedback inspire us to continue delivering exceptional service and quality.' />

                <div className="mt-8  ">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            350: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}

                        modules={[Keyboard, Navigation, Autoplay]}
                        className="mySwiper  hover:cursor-pointer"
                    >
                        {arr.map((ar) => (
                            <SwiperSlide className="" key={ar.name}>
                                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-xs sm:p-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                            className="size-14 rounded-full object-cover"
                                        />

                                        <div>
                                            <div className="flex justify-start gap-0.5 text-green-500">
                                                {Array.from({ length: ar.rating }).map((el) => <svg

                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-5 text-yellow-500"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>)}

                                            </div>

                                            <p className="mt-0.5 text-lg font-medium text-gray-900">{ar?.name}</p>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-gray-700">
                                        {ar.testimonial}
                                    </p>
                                </blockquote>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className=" absolute -bottom-4 left-1/2 mt-10 lg:mt-0  z-10  -translate-x-1/2  flex gap-3">
                        <button className="custom-prev cursor-pointer p-3 bg-white rounded-full hover:text-teal-600 font-bold shadow-xl">
                            <FaChevronLeft size={26} />
                        </button>
                        <button className="custom-next p-3  cursor-pointer bg-white rounded-full hover:text-teal-700 font-bold shadow-xl">
                            <FaChevronRight size={26} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;