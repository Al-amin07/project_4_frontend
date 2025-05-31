import { Button } from "@/components/ui/button";
import { blogPosts } from "../home/Blog";

// const blogs = [
//     {
//         id: 1,
//         title: 'Top 5 Cars for First-Time Buyers in 2025',
//         description: 'A guide to the most reliable and affordable cars perfect for new drivers entering the market in 2025.',
//         date: 'May 20, 2025',

//     },
//     {
//         id: 2,
//         title: 'Electric vs Gasoline Cars: Which Should You Choose?',
//         description: 'Explore the pros and cons of electric vehicles vs traditional gasoline-powered cars to make an informed decision.',
//         date: 'May 18, 2025',
//     },
//     {
//         id: 3,
//         title: 'How to Maintain Your Car for Peak Performance',
//         description: 'Learn essential car maintenance tips to extend your vehicle’s life and ensure optimal performance.',
//         date: 'May 15, 2025',
//     },
//     {
//         id: 4,
//         title: 'The Future of Self-Driving Cars',
//         description: 'An overview of the latest advancements in autonomous vehicle technology and what it means for drivers.',
//         date: 'May 12, 2025',
//     },
//     {
//         id: 5,
//         title: 'Used vs New Cars: Which is Better?',
//         description: 'We break down the cost, benefits, and risks of buying a used car versus a brand new one.',
//         date: 'May 10, 2025',
//     },
//     {
//         id: 6,
//         title: 'Car Financing Explained: What You Need to Know',
//         description: 'From down payments to interest rates — this post helps you navigate the world of auto loans with confidence.',
//         date: 'May 8, 2025',
//     },
//     {
//         id: 7,
//         title: 'Top 7 Fuel-Efficient Cars in 2025',
//         description: 'Looking to save on gas? Here are the most fuel-efficient vehicles to consider this year.',
//         date: 'May 6, 2025',
//     },
//     {
//         id: 8,
//         title: 'What to Check When Buying a Used Car',
//         description: 'A checklist every buyer should follow to avoid surprises when purchasing a pre-owned vehicle.',
//         date: 'May 3, 2025',
//     },
//     {
//         id: 9,
//         title: 'How to Get the Best Trade-In Value for Your Car',
//         description: 'Tips and strategies to increase your car’s trade-in value and get the most out of your old vehicle.',
//         date: 'May 1, 2025',
//     },

// ];


const BlogPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Latest Blog Posts</h1>
            <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((blog) => (
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
        </div>
    );
};

export default BlogPage;
