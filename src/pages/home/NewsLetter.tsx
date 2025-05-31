
import n1 from "@/assets/n.webp"
import toast from "react-hot-toast";
export default function NewsLetter() {
    const handleSubs = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
        console.log({ email })
        toast.success('Subscribed successfully')
        form.reset()
    }
    return (

        <section className="py-16 relative text-white bg-no-repeat bg-cover bg-center" style={{
            backgroundImage: `url(${n1})`
        }}>
            <div className="container relative z-10 px-4 mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Ahead with the Latest Car Deals</h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                    Subscribe to our newsletter for exclusive offers, expert car-buying tips, and updates on the newest arrivals in our inventory.
                </p>
                <form onSubmit={handleSubs} className="mb-3">
                    <input className="px-4 py-2 text-black rounded-md rounded-r-none  focus:outline-none focus:ring-2 focus:ring-teal-500 transition" name="email" type="email" placeholder="Enter your email" required />
                    <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded-md rounded-l-none transition-all duration-500">Subscribe</button>
                </form>

            </div>
            <div className="absolute inset-0 bg-black/20 ">

            </div>
        </section>


    )
}
