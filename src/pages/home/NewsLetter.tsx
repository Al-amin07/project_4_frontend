import Text from "./Text";

export default function NewsLetter() {
    return (
        <section className="">
            <div className="max-w-3xl mx-auto bg-white rounded-xl p-10 text-center"><Text desc="Subscribe to our newsletter for exclusive offers, new arrivals, and car tips." title="Stay Updated with the Latest Car Deals" />

                <form className="flex flex-col sm:flex-row justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    />
                    <button
                        type="submit"
                        className="inline-block bg-teal-600 hover:bg-teal-700 text-white border border-teal-600 hover:bg-transparent hover:text-teal-600  font-medium px-4 py-2  transition-all duration-500"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-sm text-gray-400 mt-4">
                    We respect your privacy. Unsubscribe anytime.
                </p>
            </div>
        </section>



    )
}
