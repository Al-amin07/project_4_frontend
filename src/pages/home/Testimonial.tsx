import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Testimonial.css";

import Text from "./Text";
import p1 from '../../assets/profile/p1.webp'
import p2 from '../../assets/profile/p2.webp'
import p3 from '../../assets/profile/p3.webp'
import p4 from '../../assets/profile/p4.jpeg'
import p5 from '../../assets/profile/p5.webp'
const ResizePlugin: KeenSliderPlugin = (slider) => {
    const observer = new ResizeObserver(() => {
        slider.update();
    });

    slider.on("created", () => {
        observer.observe(slider.container);
    });
    slider.on("destroyed", () => {
        observer.unobserve(slider.container);
    });
};

const testimonials = [
    {
        name: "Aminur Rahman",
        location: "Dhaka, Bangladesh",
        testimonial:
            "Great service and an even better selection of vehicles. I found my dream car in just two days!",
        profileImage: p1,
        rating: 5,
        designation: "Businessman",
    },
    {
        name: "Fatima Al Zara",
        location: "Sharjah, UAE",
        testimonial:
            "The car I bought was in excellent condition and the team helped me through the process smoothly.",
        profileImage: p2,
        rating: 4,
        designation: "Marketing Executive",
    },
    {
        name: "Tanvir Hasan",
        location: "Chittagong, Bangladesh",
        testimonial:
            "Top-notch customer support and transparent pricing. I will definitely recommend this platform to my friends.",
        profileImage: p3,
        rating: 5,
        designation: "Software Engineer",
    },
    {
        name: "Huda Khalil",
        location: "Jeddah, Saudi Arabia",
        testimonial:
            "Loved the wide variety of used and new cars. The comparison feature made it easy to choose the best one.",
        profileImage: p4,
        rating: 4,
        designation: "Interior Designer",
    },
    {
        name: "Mohammad Alvi",
        location: "Lahore, Pakistan",
        testimonial:
            "This site is amazing. I got a great deal on a Toyota Corolla. Everything was clear and fast.",
        profileImage: p5,
        rating: 5,
        designation: "Engineer",
    },
    {
        name: "Ayesha Sadiq",
        location: "Karachi, Pakistan",
        testimonial:
            "It felt like a premium experience! I especially loved the inspection report feature on each car.",
        profileImage: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        rating: 5,
        designation: "Finance Analyst",
    },
    {
        name: "James O'Connor",
        location: "London, UK",
        testimonial:
            "I was just browsing but ended up buying my car here. The checkout process was incredibly easy.",
        profileImage: p5,
        rating: 4,
        designation: "Travel Blogger",
    },
    {
        name: "Nadia Islam",
        location: "Kuala Lumpur, Malaysia",
        testimonial:
            "Great customer support and very informative listings. Everything I needed was in one place.",
        profileImage: p2,
        rating: 5,
        designation: "Product Manager",
    },
    {
        name: "Ali Reza",
        location: "Muscat, Oman",
        testimonial:
            "Found a great deal on a used SUV. The filters helped me narrow down my choices quickly.",
        profileImage: p4,
        rating: 4,
        designation: "Civil Engineer",
    },
    {
        name: "Rima Noor",
        location: "Istanbul, Turkey",
        testimonial:
            "User-friendly platform with detailed specs and real photos. Bought my car with confidence!",
        profileImage: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        rating: 5,
        designation: "Architect",
    },
];


const Testimonial = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            mode: "free",
            slides: {
                perView: 3,
                spacing: 20,
            },
            breakpoints: {
                "(max-width: 1024px)": {
                    slides: { perView: 2, spacing: 15 },
                },
                "(max-width: 768px)": {
                    slides: { perView: 1, spacing: 10 },
                },
            },
        },
        [ResizePlugin]
    );

    return (
        <section className="bg-white  py-8">
            <div className="max-w-screen-xl mx-auto text-center">
                <Text
                    title="What Our Customers Say"
                    desc="Hear from our satisfied customers! Their experiences and feedback inspire us to continue delivering exceptional service and quality."
                />

                <div ref={sliderRef} className="keen-slider mt-6">
                    {testimonials.map((testimonial) => (

                        <div key={testimonial.name} className="p-8 hover:shadow-lg transition-shadow duration-500 cursor-pointer keen-slider__slide border rounded-lg dark:border-gray-700">
                            <div className="flex gap-1  text-orange-600">
                                {Array.from({ length: testimonial.rating }).map((_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="leading-relaxed mt-2 text-left text-gray-500 dark:text-gray-400">
                                “{testimonial?.testimonial}”
                            </p>

                            <div className="flex items-center mt-8 -mx-2">
                                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 " src={testimonial?.profileImage} alt={testimonial?.name} />

                                <div className="mx-2">
                                    <h1 className="font-semibold text-left text-gray-800 dark:text-white">{testimonial?.name}</h1>
                                    <span className="text-sm text-gray-500">{testimonial?.designation}, {testimonial?.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
