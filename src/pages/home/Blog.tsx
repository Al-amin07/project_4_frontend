
import { Button } from "@/components/ui/button";
import Text from "./Text";
import img1 from '@/assets/blog/1.jpg'
import img2 from '@/assets/blog/2.jpg'
import img3 from '@/assets/blog/3.avif'
import img4 from '@/assets/blog/4.webp'
import img5 from '@/assets/blog/5.avif'
import img6 from '@/assets/blog/6.jpeg'
import { Link } from "react-router";
export const blogPosts = [
    {
        id: 1,
        title: "Top 5 Cars for 2024",
        description: "Explore the latest and most innovative cars hitting the market in 2024.",
        image: img1,
        date: 'April 25, 2025',
    },
    {
        id: 2,
        title: "How to Maintain Your Car",
        description: "Essential tips and tricks to keep your car running smoothly and efficiently.",
        image: img5,
        date: 'May 1, 2025',
    },
    {
        id: 3,
        title: "Best Electric Cars of the Year",
        description: "A deep dive into the best electric vehicles available this year.",
        image: img3,
        date: 'May 5, 2025',
    },
    {
        id: 4,
        title: "SUVs vs Sedans: Which One Should You Buy?",
        description: "Comparing the pros and cons of SUVs and sedans to help you make the right choice.",
        image: img2,
        date: 'May 10, 2025',
    },
    {
        id: 5,
        title: "Car Safety Features You Must Have",
        description: "Learn about the latest safety technologies that can protect you on the road.",
        image: img4,
        date: 'May 15, 2025',
    },
    {
        id: 6,
        title: "Top Budget-Friendly Cars in 2024",
        description: "A list of the best affordable cars that offer great value for money.",
        image: img6,
        date: 'May 20, 2025',

    },
    {
        id: 7,
        title: 'Top 5 Cars for First-Time Buyers in 2025',
        description: 'A guide to the most reliable and affordable cars perfect for new drivers entering the market in 2025.',
        date: 'May 20, 2025',
        image: img3,

    },
    {
        id: 8,
        title: 'Electric vs Gasoline Cars: Which Should You Choose?',
        description: 'Explore the pros and cons of electric vehicles vs traditional gasoline-powered cars to make an informed decision.',
        date: 'May 18, 2025',
        image: img4,
    },
    {
        id: 9,
        title: 'How to Maintain Your Car for Peak Performance',
        description: 'Learn essential car maintenance tips to extend your vehicle’s life and ensure optimal performance.',
        image: img1,
        date: 'May 15, 2025',
    },
];

export default function Blog() {
    return (
        <section className=" ">
            <div className=" ">

                <Text title="Latest Car Insights & News" desc="Stay ahead in the world of automobiles with our expert blogs! From the latest car releases to maintenance tips and electric vehicle trends, we bring you in-depth articles to help you make informed decisions." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts?.slice(0, 6).map((blog) => (
                        <div key={blog.id} className="bg-white  cursor-pointer  shadow-md  hover:shadow-2xl transition-all duration-300">
                            <div>
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover  " />
                            </div>
                            <div className="p-6 ">
                                <h2 className="text-xl font-semibold">{blog.title}</h2>
                                <p className="text-gray-700 mt-2">{blog.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
                                    <Button variant={'outline'} className=" text-black ">Read More →</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Button variant="destructive" className="text-white">
                        <Link to={'/blogs'}>View All Blogs</Link>
                    </Button>

                </div>
            </div>
        </section>
    );
}
