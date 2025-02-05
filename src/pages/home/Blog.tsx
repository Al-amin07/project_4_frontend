import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Text from "./Text";
import img1 from '@/assets/blog/1.jpg'
import img2 from '@/assets/blog/2.jpg'
import img3 from '@/assets/blog/3.avif'
import img4 from '@/assets/blog/4.webp'
import img5 from '@/assets/blog/5.avif'
import img6 from '@/assets/blog/6.jpeg'
const blogPosts = [
    {
        id: 1,
        title: "Top 5 Cars for 2024",
        description: "Explore the latest and most innovative cars hitting the market in 2024.",
        image: img1,
    },
    {
        id: 2,
        title: "How to Maintain Your Car",
        description: "Essential tips and tricks to keep your car running smoothly and efficiently.",
        image: img5,
    },
    {
        id: 3,
        title: "Best Electric Cars of the Year",
        description: "A deep dive into the best electric vehicles available this year.",
        image: img3,
    },
    {
        "id": 4,
        "title": "SUVs vs Sedans: Which One Should You Buy?",
        "description": "Comparing the pros and cons of SUVs and sedans to help you make the right choice.",
        "image": img2
    },
    {
        "id": 5,
        "title": "Car Safety Features You Must Have",
        "description": "Learn about the latest safety technologies that can protect you on the road.",
        "image": img4
    },
    {
        "id": 6,
        "title": "Top Budget-Friendly Cars in 2024",
        "description": "A list of the best affordable cars that offer great value for money.",
        "image": img6
    }
];

export default function Blog() {
    return (
        <section className=" ">
            <div className=" ">

                <Text title="Latest Car Insights & News" desc="Stay ahead in the world of automobiles with our expert blogs! From the latest car releases to maintenance tips and electric vehicle trends, we bring you in-depth articles to help you make informed decisions." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="overflow-hidden rounded-lg shadow-lg bg-white">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <CardContent className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.description}</p>
                                <Button variant="default" className="mt-auto">Read More</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
