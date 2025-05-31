

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}

            <div className="container mx-auto bg-gradient-to-r from-teal-500 to-cyan-900 text-white px-4  py-20 text-center">
                <h1 className="text-4xl font-bold mb-4 sm:text-5xl">
                    Contact Us
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                    Have questions or want to work with us? We'd love to hear from you.
                </p>
            </div>


            {/* Contact Information Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-teal-500">
                            Email Us
                        </h3>
                        <p className="text-gray-600">support@company.com</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-teal-500">
                            Call Us
                        </h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-teal-500">
                            Visit Us
                        </h3>
                        <p className="text-gray-600">123 Main St, City, Country</p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="container mx-auto px-4 py-16 bg-gray-100 rounded-lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Fill out the form below and our team will get back to you as soon as
                        possible.
                    </p>
                </div>
                <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-teal-300"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-teal-300"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-teal-300"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-teal-300"
                            rows={5}
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:ring focus:ring-teal-300"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Map Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center sm:text-4xl">
                    Find Us Here
                </h2>
                <div className="h-64 bg-gray-200 rounded-lg shadow flex items-center justify-center">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3424634823627!2d90.39869697507609!3d23.877471983886633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c439a31d71f5%3A0xb381f7b14b61fd7b!2sAbdullahpur%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1738727495401!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0px' }} loading="lazy" ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
