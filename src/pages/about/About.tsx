import { FaTools } from "react-icons/fa";
import { FaCar, FaHandshake } from "react-icons/fa6";


const About = () => {
    return (

        <div className="min-h-screen">
            {/* Hero Section */}




            <div className="container bg-gradient-to-r from-teal-500 to-cyan-600 text-white mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold mb-4 sm:text-5xl">
                    About Us
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    We are committed to providing top-quality cars and services.
                </p>
            </div>

            <div className="absolute inset-0 opacity-15 bg-pattern bg-cover"></div>


            {/* Mission Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-6 sm:text-5xl text-teal-500">Our Mission</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        We strive to provide high-quality vehicles and exceptional customer service to ensure a seamless car-buying experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[{ title: "Innovation", desc: "Bringing cutting-edge technology to improve your car-buying experience." },
                    { title: "Integrity", desc: "Building trust through transparency and ethical practices." },
                    { title: "Excellence", desc: "Delivering high-quality products and services with attention to detail." }].map((item, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold mb-3 text-teal-500">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-8 text-teal-500">Our Services</h3>
                    <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
                        Explore our wide range of car services tailored to meet your needs and provide the best experience.
                    </p>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[{ icon: <FaCar />, title: "Wide Range of Cars", desc: "A diverse collection of vehicles to fit every lifestyle." },
                        { icon: <FaTools />, title: "Car Maintenance", desc: "Reliable servicing to keep your car in top condition." },
                        { icon: <FaHandshake />, title: "Easy Financing", desc: "Flexible financing options to help you afford your dream car." }].map((service, index) => (
                            <div key={index} className="text-center p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
                                <div className="text-5xl text-teal-500 mx-auto mb-4">{service.icon}</div>
                                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-gradient-to-r from-teal-500 to-cyan-600  text-white text-center py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4 sm:text-5xl">Join Our Journey</h2>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Looking to buy a new car or join our team? Let’s connect and make things happen.
                    </p>
                    <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
                        Get in Touch
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;


