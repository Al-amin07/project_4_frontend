import Text from "./Text"

export default function HowItWorks() {
    return (
        <section className="">
            <div className="max-w-6xl mx-auto">

                <Text title="How It Works — Your Journey to a New Car" desc="From searching to delivery, we guide you through every step with transparent choices, expert advice, and seamless financing options." />
                <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-10">
                    {[
                        { step: 1, title: "Search", desc: "Browse and filter cars online to find your perfect match." },
                        { step: 2, title: "Select", desc: "Choose your favorite car from our extensive collection." },
                        { step: 3, title: "Finance", desc: "Apply for hassle-free financing tailored to you." },
                        { step: 4, title: "Drive", desc: "Get your car delivered or pick it up at your convenience." },
                    ].map(({ step, title, desc }, idx, arr) => (
                        <div key={step} className="flex-1 relative flex flex-col items-center text-center px-4">
                            {/* Number Circle */}
                            <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl font-bold z-10">
                                {step}
                            </div>

                            {/* Connector line */}
                            {idx !== arr.length - 1 && (
                                <div className="hidden md:block absolute top-7 left-full w-24 h-1 bg-teal-300 z-0"></div>
                            )}

                            <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
                            <p className="mt-2 text-gray-600 max-w-xs">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
