import { Link } from "react-router";
import Text from "./Text";
import { Button } from "@/components/ui/button";

export default function Discover() {
    return (
        <section className=" px-6 bg-white">
            <Text title="Discover the Perfect Car for Every Journey" desc="Explore a wide range of vehicles that match your lifestyle — from sleek sedans and rugged SUVs to eco-friendly hybrids and high-performance sports cars." />
            <div className="max-w-7xl mx-auto text-center">


                <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-8">
                    <div className="p-6 border rounded-lg hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">🚗 New & Used Inventory</h3>
                        <p className="text-gray-600">Hand-picked cars from trusted dealers across the country.</p>
                    </div>
                    <div className="p-6 border rounded-lg hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">💬 Verified Reviews</h3>
                        <p className="text-gray-600">Real opinions from real customers to guide your choice.</p>
                    </div>
                    <div className="p-6 border rounded-lg hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">⚙️ Advanced Filters</h3>
                        <p className="text-gray-600">Search by price, brand, mileage, fuel type, and more.</p>
                    </div>
                    <div className="p-6 border rounded-lg hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">🛡️ Financing Options</h3>
                        <p className="text-gray-600">Get competitive financing and extended warranty support.</p>
                    </div>
                    <div className="p-6 border rounded-lg hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">📍 Showrooms & Delivery</h3>
                        <p className="text-gray-600">Visit nearby showrooms or enjoy doorstep car delivery.</p>
                    </div>
                    <div className="p-6 border rounded-lg hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">🚘 Trusted Network</h3>
                        <p className="text-gray-600">Join thousands of satisfied car buyers across the country.</p>
                    </div>
                </div>

                <Link to="/all-product" className="">
                    <Button variant={'destructive'}>

                        Start Exploring
                    </Button>
                </Link>
            </div>
        </section>

    )
}
