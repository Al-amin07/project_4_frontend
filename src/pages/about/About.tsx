import { FaCar, FaTools, FaHandshake } from "react-icons/fa";

const About = () => {
    const missionItems = [
        {
            title: "Innovation",
            desc: "Bringing cutting-edge technology to improve your car-buying experience.",
        },
        {
            title: "Integrity",
            desc: "Building trust through transparency and ethical practices.",
        },
        {
            title: "Excellence",
            desc: "Delivering high-quality products and services with attention to detail.",
        },
    ];

    const services = [
        {
            icon: <FaCar />,
            title: "Wide Range of Cars",
            desc: "A diverse collection of vehicles to fit every lifestyle.",
        },
        {
            icon: <FaTools />,
            title: "Car Maintenance",
            desc: "Reliable servicing to keep your car in top condition.",
        },
        {
            icon: <FaHandshake />,
            title: "Easy Financing",
            desc: "Flexible financing options to help you afford your dream car.",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}

            <div className="container mx-auto bg-gradient-to-r from-teal-500 to-cyan-900 text-white px-4  py-20 text-center">
                <h1 className="text-4xl font-bold mb-4 sm:text-5xl">
                    About Us
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    We are committed to providing top-quality cars and excellent service.
                </p>
            </div>

            {/* Mission Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-teal-600">Our Mission</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
                        We strive to provide high-quality vehicles and exceptional customer service to ensure a seamless car-buying experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {missionItems.map((item, i) => (
                        <div
                            key={i}
                            className="p-8 bg-white shadow-md rounded-xl text-center border hover:shadow-xl transition-all"
                        >
                            <h3 className="text-2xl font-semibold text-teal-600 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6 text-teal-600">Our Services</h3>
                    <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
                        Explore our wide range of services tailored to meet your needs and deliver the best experience.
                    </p>
                    <div className="grid gap-10 md:grid-cols-3">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
                            >
                                <div className="text-5xl text-teal-500 mb-4 mx-auto">{service.icon}</div>
                                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-center py-20 px-4">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">Join Our Journey</h2>
                <p className="text-lg max-w-2xl mx-auto mb-6">
                    Looking to buy a new car or join our team? Let’s connect and make things happen.
                </p>
                <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
                    Get in Touch
                </button>
            </section>
        </div>
    );
};

export default About;
