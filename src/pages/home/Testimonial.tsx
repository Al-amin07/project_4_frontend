import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Testimonial.css";

import Text from "./Text";

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
        name: "Khalid Al Dawsy",
        location: "Jeddah, Saudi",
        testimonial:
            "You can't go wrong with Chicken Mandi. The chicken was cooked perfectly, juicy & soft. I would definitely recommend it.",
        profileImage: "url-to-profile-image-1",
        rating: 5,
    },
    {
        name: "Sara Ahmed",
        location: "Dubai, UAE",
        testimonial:
            "The flavors were authentic and the food was served fresh. It reminded me of home. Highly recommended!",
        profileImage: "url-to-profile-image-2",
        rating: 4,
    },
    {
        name: "John Doe",
        location: "Riyadh, Saudi",
        testimonial:
            "Amazing experience! The spices were balanced and the rice was perfectly cooked. Will visit again.",
        profileImage: "url-to-profile-image-3",
        rating: 5,
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
        <section className="bg-white  py-12">
            <div className="max-w-screen-xl mx-auto text-center">
                <Text
                    title="What Our Customers Say"
                    desc="Hear from our satisfied customers! Their experiences and feedback inspire us to continue delivering exceptional service and quality."
                />

                <div ref={sliderRef} className="keen-slider mt-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="keen-slider__slide p-4">
                            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-md sm:p-8">
                                <div className="flex items-center gap-4">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                        className="size-14 rounded-full object-cover"
                                    />

                                    <div>
                                        <div className="flex gap-1 text-yellow-500">
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
                                        <p className="mt-1 text-lg font-medium text-gray-900">{testimonial.name}</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-left text-gray-700">{testimonial.testimonial}</p>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
