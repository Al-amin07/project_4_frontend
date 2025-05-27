// import Image from "next/image"

export default function ValueProposition() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Image Section */}
                <div className="relative h-[300px] md:h-[400px]">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AQXpNxt3cvrK4IcqyBEwG0rIXZSJSB.png"
                        alt="Credit card payment"

                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-4">WHY CHOOSE US?</h2>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Unique Value Proposition For Your Business
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Discover the advantages of partnering with Shopstream Technologies for your ecommerce needs and experience
                        unparalleled dedication and expertise.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid  md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="space-y-4">
                    <div className="text-xl font-semibold text-gray-400">01.</div>
                    <h3 className="text-2xl font-bold mb-4">Tailored Solutions</h3>
                    <p className="text-gray-600">
                        We provide bespoke ecommerce solutions, adapting to your specific business needs and industry demands for
                        optimal performance and results.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="space-y-4">
                    <div className="text-xl font-semibold text-gray-400">02.</div>
                    <h3 className="text-2xl font-bold mb-4">Innovative Technology</h3>
                    <p className="text-gray-600">
                        Utilizing the latest technology, we ensure your ecommerce platform is efficient, user-friendly, and
                        engaging, enhancing customer satisfaction and retention.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="space-y-4">
                    <div className="text-xl font-semibold text-gray-400">03.</div>
                    <h3 className="text-2xl font-bold mb-4">Expert Support</h3>
                    <p className="text-gray-600">
                        Our expert team offers ongoing support and expertise, ensuring your website runs smoothly and efficiently
                        while you focus on growing your business.
                    </p>
                </div>
            </div>
        </div>
    )
}

